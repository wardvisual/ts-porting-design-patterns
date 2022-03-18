import { GodModel } from '../model/god/GodModel';
import { Model } from '../model/Model';
import { View } from '../view/View';
import { Controller } from './Controller';
import { Observablemodel } from '../model/inheritance/ObservableModel';
import { ModelWithSubject } from '../model/strategy/ModelWithSubjects';
import { BaseModel } from '../model/BaseModel';
import { Subject } from 'observer/Subject';
import { ObservableDecorator } from '../model/decorator/ObservableDecorator';

describe('Controller', () => {
  it('Should let model notify the view (God)', () => {
    /* Given */
    const model: Model = new GodModel();

    const view: View = new View();
    (model as GodModel).addObserver(view);

    const controller: Controller = new Controller();
    controller.setModel(model);

    /* When */
    controller.hanldeInput('Edward!');

    /* Then */
    expect(model.getAttribute()).toBe('Edward!');
    expect(view.getOutput()).toBe('<h1>Hello Edward!</h1>');
  });

  it('Should let the model notify the view (Inheritance)', () => {
    /* Given */
    const model: Model = new Observablemodel();

    const view: View = new View();

    // @ts-ignore
    (model as Subject).addObserver(view);

    const controller: Controller = new Controller();
    controller.setModel(model);

    /* When */
    controller.hanldeInput('Edward!');

    /* Then */
    expect(model.getAttribute()).toBe('Edward!');
    expect(view.getOutput()).toBe('<h1>Hello Edward!</h1>');
  });

  it('Should let the model notify the view (Strategy)', () => {
    /* Given */
    const model: Model = new ModelWithSubject();

    const view: View = new View();

    (model as ModelWithSubject).addObserver(view);

    const controller: Controller = new Controller();
    controller.setModel(model);

    /* When */
    controller.hanldeInput('Edward!');

    /* Then */
    expect(model.getAttribute()).toBe('Edward!');
    expect(view.getOutput()).toBe('<h1>Hello Edward!</h1>');
  });

  it('Should let the model notify the view (Decorator)', () => {
    /* Given */
    let model: Model = new BaseModel();
    model = new ObservableDecorator(model);

    const view: View = new View();

    // @ts-ignore
    (model as Subject).addObserver(view);

    const controller: Controller = new Controller();
    controller.setModel(model);

    /* When */
    controller.hanldeInput('Edward!');

    /* Then */
    expect(model.getAttribute()).toBe('Edward!');
    expect(view.getOutput()).toBe('<h1>Hello Edward!</h1>');
  });
});
