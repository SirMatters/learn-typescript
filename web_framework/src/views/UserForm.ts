export class UserForm {
  constructor(public parent: HTMLElement) {}

  template(): string {
    return `
    <div>
      <h1>User Form</h1>
      <input>
      <button>Click Me</button>
    </div>
    `;
  }

  onButtonClick(): void {}
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:button': () => {
        alert('Button click!');
      },
    };
  }

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
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);

    this.parent.appendChild(templateElement.content);
  }
}
