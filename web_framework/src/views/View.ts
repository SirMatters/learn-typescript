import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  abstract template(): string;
  abstract eventsMap(): { [key: string]: () => void };

  constructor(public parent: HTMLElement, public model: T) {
    this.bindModel();
  }

  bindModel = () => {
    this.model.on('change', () => {
      this.render();
    });
  };

  bindEvents(fragment: DocumentFragment): void {
    let eventsMap = this.eventsMap();
    for (let event in eventsMap) {
      let [action, target] = event.split(':');
      fragment.querySelectorAll(target).forEach((e) => {
        e.addEventListener(action, eventsMap[event]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.appendChild(templateElement.content);
  }
}
