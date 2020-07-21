import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => {};

type Events = { [eventName: string]: Callback[] };

export class User {
  private events: Events = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName] || [];
    handlers.forEach((cb) => cb());
  }

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((res: AxiosResponse): void => {
        this.set(res.data);
      });
  }
  save(): void {
    if (this.get('id')) {
      axios.post(`http://localhost:3000/users/${this.get('id')}`, {
        ...this.data,
      });
    } else {
        axios.post(`http://localhost:3000/users`, {
          ...this.data,
        });
  }
}
