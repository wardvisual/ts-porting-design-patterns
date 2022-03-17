import { Subject } from '../../observer/Subject';
import { Model } from '../Model';

export class ObservableDecorator extends Subject {
  private model: Model;

  constructor(model: Model) {
    super();
    this.model = model;
  }

  getAttribute(): string {
    return this.model.getAttribute();
  }

  setAttribute(attribute: string): void {
    this.model.setAttribute(attribute);
    this.notifyObservers(attribute);
  }
}
