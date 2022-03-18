import { View } from '../view/View';
import { Model } from '../model/Model';

/* The ViewModel is the glue between the Model and the View. It exposes the Model's attributes to the
View and exposes the View's methods to the Model */
export class ViewModel {
  private model!: Model;
  private view!: View;

  setModal(model: Model): void {
    this.model = model;
  }

  setView(view: View): void {
    this.view = view;
  }

  handleInput(input: string): void {
    this.model.setAttribute(input);
    this.view.update(this.model.getAttribute());
  }
}
