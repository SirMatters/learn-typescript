import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  template(): string {
    return `
    <div>
      <input placeholder=${this.model.get('name')}>
      <button id='newNameBtn'>Set new name</button>
      <button id='randomAgeBtn'>Set random age</button>
      <button id='saveBtn'>Save</button>
    </div>
    `;
  }

  onSaveClick = (): void => {
    this.model.save();
  };

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
      'click:button#saveBtn': this.onSaveClick,
    };
  }
}
