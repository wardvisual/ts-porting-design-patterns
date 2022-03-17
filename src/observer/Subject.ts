import { Observer } from './Observer';

export class Subject {
  private observers: Observer[];

  constructor() {
    this.observers = [];
  }

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  notifyObservers(variable: string): void {
    this.observers.forEach((observer: Observer) => observer.wakeUp(variable));
  }
}
