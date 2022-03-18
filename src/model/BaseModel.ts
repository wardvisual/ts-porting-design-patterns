import { Model } from './Model';

/* `BaseModel` is a class that implements the `Model` interface */
export class BaseModel implements Model {
  private attribute!: string;

  public getAttribute(): string {
    return this.attribute;
  }

  setAttribute(attribute: string): void {
    this.attribute = attribute;
  }
}
