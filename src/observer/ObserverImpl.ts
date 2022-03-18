import { Observer } from './Observer';

/* `ObserverImpl` is a class that implements the `Observer` interface */
export class ObserverImpl implements Observer {
  private message!: string;

  wakeUp(variable: string): void {
    this.message = variable;
  }

  getMessage(): string {
    return this.message;
  }
}
