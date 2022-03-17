import { Observer } from './Observer';

export class ObserverImpl implements Observer {
  private message!: string;

  wakeUp(variable: string): void {
    this.message = variable;
  }

  getMessage(): string {
    return this.message;
  }
}
