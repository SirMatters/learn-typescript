import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <h2>User name: ${this.model.get('name')}</h2>
      <h2>User age: ${this.model.get('age')}</h2>
      <input/>
      <button id='newNameBtn'>Set new name</button>
      <button id='randomAgeBtn'>Set random age</button>
    </div>
    `;
  }

  onNewNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (!input) {
      throw new Error('No element found');
    }
    const name = input.value;
    this.model.set({ name });
  };

  onRandomAgeClick = (): void => {
    this.model.setRandomAge();
  };

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button#newNameBtn': this.onNewNameClick,
      'click:button#randomAgeBtn': this.onRandomAgeClick,
    };
  }
}
