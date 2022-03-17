import { Subject } from '../../observer/Subject';
import { Observer } from '../../observer/Observer';
import { Model } from '../Model';

export class ModelWithSubject implements Model {
  private attribute!: string;
  private subject: Subject;

  constructor() {
    this.subject = new Subject();
  }

  public addObserver(observer: Observer): void {
    this.subject.addObserver(observer);
  }

  public getAttribute(): string {
    return this.attribute;
  }

  public setAttribute(attribute: string): void {
    this.attribute = attribute;
    this.subject.notifyObservers(attribute);
  }
}
