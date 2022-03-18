import { Observer } from '../observer/Observer';

/* The View class is an Observer that updates its output based on the variable passed to the update
method */
export class View implements Observer {
  private static TEMPLATE: string = '<h1>Hello ${variable}</h1>';

  private output!: string;

  constructor() {
    this.update('Edward!');
  }

  public update(variable: string): void {
    this.output = View.TEMPLATE.replace('${variable}', variable);
  }

  public getOutput(): string {
    return this.output;
  }

  wakeUp(variable: string): void {
    this.update(variable);
  }
}
