export default class Observable {
   constructor() {
        Object.defineProperty(this, "_events", { value: {} });
   }
   on(topic, handler) {
      this.getTopicObservers(topic).add(handler);

      return handler;
   }
   off(topic, handler) {
      this.getTopicObservers(topic).delete(handler);
   }
   trigger(topic, ...args) {
      this.getTopicObservers(topic).forEach(handler => {
         setTimeout(() => handler(...args), 1);
      });
   }
   getTopicObservers(topic) {
      if (!this._events[topic]) { this._events[topic] = new Set(); }
      return this._events[topic];
   }
};
