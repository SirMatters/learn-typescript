import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  private events: Eventing = new Eventing();
  private sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  private attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') {
      throw new Error('Can not fetch a user without id');
    }

    this.sync.fetch(id).then(({ data }) => {
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
