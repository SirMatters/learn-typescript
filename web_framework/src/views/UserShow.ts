import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
    <div>
      <h1>User detail</h1>
      <h2>UserName: ${this.model.get('name')}</h2>
      <h2>User Age: ${this.model.get('age')}</h2>
    </div>
    `;
  }
}
