import { BaseModel } from '../model/BaseModel';
import { Model } from '../model/Model';
import { View } from '../view/View';
import { ViewModel } from './ViewModel';
describe('ViewModel', () => {
  it('Shoud explicitly update model and view', () => {
    /* Given */
    const model: Model = new BaseModel();

    const view: View = new View();

    const vm: ViewModel = new ViewModel();
    vm.setModal(model);
    vm.setView(view);

    /* When */
    vm.handleInput('Edward!');

    /* Then */
    expect(model.getAttribute()).toBe('Edward!');
    expect(view.getOutput()).toBe('<h1>Hello Edward!</h1>');
  });
});
