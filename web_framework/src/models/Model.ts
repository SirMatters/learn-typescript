import { AxiosResponse, AxiosPromise } from 'axios';

export interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface ModelAttributes<T> {
  set(update: T): void;
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      throw new Error('Can not fetch a user without id');
    }

    this.sync.fetch(id).then(({ data }: AxiosResponse<T>) => {
      this.set(data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((res) => {
        this.trigger('save');
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
