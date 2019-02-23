let expect = chai.expect;

import Observable from '../js/observable.js';

let expectedMessage = 'a message';
const TOPIC = 'food';
const OTHER_TOPIC = 'computers';

describe('Observable instances', () => {
   let observable;
   beforeEach(() => {
      observable = new Observable();
   });
   it('let you sign up for events on a topic', (done) => {
      observable.on(TOPIC, message => {
         expect(message).to.equal(expectedMessage);
         done();
      });
      observable.trigger(TOPIC, expectedMessage);
   });
   it('won\'t notify you about topics you have not registered', (done) => {
      observable.on(TOPIC, message => { setTimeout(done, 3); });
      observable.on(OTHER_TOPIC, () =>expect.fail());
      observable.trigger(TOPIC, expectedMessage);
   });
   it('let you remove yourself from being notified', (done) => {
      let handler = observable.on(TOPIC, () => expect.fail());
      observable.off(TOPIC, handler);
      observable.trigger(TOPIC);
      setTimeout(done, 3);
   });
   it('don\'t let you remove other\' handlers', (done) => {
      let handler = observable.on(TOPIC, () => done());
      let handler2 = observable.on(TOPIC, () => expect.fail());
      observable.off(TOPIC, handler2);
      observable.trigger(TOPIC);
   });
});
