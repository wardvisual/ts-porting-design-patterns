import { Subject } from '../../observer/Subject';
import { Model } from '../Model';

/* `Observablemodel` is a `Subject` that has a `getAttribute` method that returns the `attribute`
property. It also has a `setAttribute` method that sets the `attribute` property and notifies all
observers of the change */
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
