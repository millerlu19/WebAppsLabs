export default class Spy {
   constructor(object, methodName) {
      this.object = object;
      this.methodName = methodName;
      this.oldMethod = object[methodName];
      this.calls = [];
      this.setupSpy();
   }
   setupSpy() {
      let spy = this;
      this.object[this.methodName] = function(...args) {
         spy.calls.push({ context: this, args: args });
         spy.oldMethod.apply(this, args);
      }
   }
   numberOfCalls() {
      return this.calls.length;
   }
   argumentsOfCall(n) {
      return this.calls[n].args;
   }
}
