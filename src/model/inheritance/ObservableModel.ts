import { Subject } from '../../observer/Subject';
import { Model } from '../Model';

export class Observablemodel extends Subject implements Model {
  private attribute!: string;

  public getAttribute(): string {
    return this.attribute;
  }

  public setAttribute(attribute: string): void {
    this.attribute = attribute;
    this.notifyObservers(attribute);
  }
}
