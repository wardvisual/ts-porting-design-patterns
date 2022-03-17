import { Model } from './Model';

export class BaseModel implements Model {
  private attribute!: string;

  public getAttribute(): string {
    return this.attribute;
  }

  setAttribute(attribute: string): void {
    this.attribute = attribute;
  }
}
