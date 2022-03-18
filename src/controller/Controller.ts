import { Model } from '../model/Model';

/* The Controller class is a class that is responsible for handling user input and updating the model */
export class Controller {
  private model!: Model;

  setModel(model: Model): void {
    this.model = model;
  }

  hanldeInput(input: string): void {
    this.model.setAttribute(input);
  }
}
