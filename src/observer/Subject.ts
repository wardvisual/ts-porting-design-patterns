import { Observer } from './Observer';

/* The Subject class is a container for observers. It has a method that allows observers to be added to
the container. It also has a method that notifies all observers that something has changed */
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
