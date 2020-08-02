import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};
  abstract template(): string;
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  constructor(public parent: Element, public model: T) {
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

  regionsMap(): { [key: string]: string } {
    return {};
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (!element) {
        throw new Error('No region element found');
      }
      this.regions[key] = element;
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);

    this.onRender();

    this.parent.appendChild(templateElement.content);
  }
}
