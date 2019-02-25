export default class Spy {
   constructor(object, methodName, replyWith = null) {
      this.object = object;
      this.methodName = methodName;
      this.replyWith = replyWith || object[methodName];
      this.calls = [];
      this.setupSpy();
   }
   setupSpy() {
      let spy = this;
      this.object[this.methodName] = function(...args) {
         spy.calls.push({ context: this, args: args });
         spy.replyWith.apply(this, args);
      }
   }
   numberOfCalls() {
      return this.calls.length;
   }
   argumentsOfCall(n) {
      return this.calls[n].args;
   }
}
