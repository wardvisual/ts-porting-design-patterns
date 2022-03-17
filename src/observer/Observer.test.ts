import { Subject } from './Subject';
import { Observer } from './Observer';
import { ObserverImpl } from './ObserverImpl';

describe('Observer', () => {
  it('Should wake up when notified', () => {
    /* Given */
    const subject: Subject = new Subject();
    const observer: Observer = new ObserverImpl();
    subject.addObserver(observer);

    /* When */
    subject.notifyObservers(`Hello Observer!`);

    /* Then */
    expect((observer as ObserverImpl).getMessage()).toBe(`Hello Observer!`);
  });
});
