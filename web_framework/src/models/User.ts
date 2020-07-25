import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { Model } from './Model';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attribtes: UserProps) {
    return new User(
      new Attributes<UserProps>(attribtes),
      new Eventing(),
      new Sync<UserProps>(rootUrl)
    );
  }
}
