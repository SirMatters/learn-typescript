import { Events } from './Model';
import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

export class Collection<T, K> {
  models: T[] = [];
  events: Events = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then(({ data }: AxiosResponse) => {
      data.forEach((json: K) => {
        this.models.push(this.deserialize(json));
      });
      this.trigger('fetch');
    });
  }
}
