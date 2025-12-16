export default class EventEmitter {
  constructor() {
    this._events = new Map();
  }

  on(eventName, listener) {
    if (!this._events.has(eventName)) {
      this._events.set(eventName, []);
    }

    const listeners = this._events.get(eventName);
    listeners.push(listener);
    return this;
  }

  off(eventName, listener) {
    if (!this._events.has(eventName)) return this;

    const listeners = this._events.get(eventName);

    // Remove only the FIRST matched listener
    const index = listeners.findIndex(l => l === listener);
    if (index < 0) return this;

    listeners.splice(index, 1);

    // Optional cleanup: remove event key if empty
    if (listeners.length === 0) {
      this._events.delete(eventName);
    }

    return this;
  }

  emit(eventName, ...args) {
    if (!this._events.has(eventName)) return false;

    const listeners = this._events.get(eventName);
    if (listeners.length === 0) return false;

    // Clone so mutation during emit doesn't break iteration
    const cloned = listeners.slice();

    cloned.forEach(listener => {
      listener.apply(null, args);
    });

    return true;
  }
}
