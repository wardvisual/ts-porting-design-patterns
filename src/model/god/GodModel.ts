import { Observer } from '../../observer/Observer';
import { Model } from '../Model';

export class GodModel implements Model {
  private attribute!: string;
  private observers!: Observer[];

  constructor() {
    this.observers = [];
  }

  public getAttribute(): string {
    return this.attribute;
  }

  public setAttribute(attribute: string): void {
    this.attribute = attribute;
    this.notifyObservers(attribute);
  }

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  private notifyObservers(variable: string): void {
    this.observers.forEach((observer: Observer) => observer.wakeUp(variable));
  }
}
