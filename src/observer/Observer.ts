/* Defining a new interface called `Observer` that has a method called `wakeUp` that takes a string
parameter. */
export interface Observer {
  wakeUp(variable: string): void;
}
