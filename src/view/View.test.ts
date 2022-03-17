import { View } from './View';

describe('View', () => {
  it('Should initialize', () => {
    /* Given */
    const view: View = new View();

    /* When */

    /* Then */
    expect(view.getOutput()).toBe('<h1>Hello Edward!</h1>');
  });
  it('Should update', () => {
    /* Given */
    const view: View = new View();

    /* When */
    view.update('WVL!');

    /* Then */
    expect(view.getOutput()).toBe('<h1>Hello WVL!</h1>');
  });
});
