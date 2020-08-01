import { Model } from './Model';
import { User, UserProps } from './User';
import { Events } from './Model';
import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

export class Collection {
  models: User[] = [];
  events: Events = new Eventing();

  constructor(public rootUrl: string) {}

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then(({ data }: AxiosResponse) => {
      data.forEach((user: UserProps) => {
        this.models.push(User.buildUser(user));
      });
      this.trigger('fetch');
    });
  }
}
