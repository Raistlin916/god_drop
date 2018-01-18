export default class EventEmitter {
  private events: object = {}

  public on(name: string, cb: Function): this {
    this.events[name] || (this.events[name] = []);
    this.events[name].push(cb);
    return this;
  }

  public emit(name: string, ...args) {
    const events = this.events[name];
    if (events) {
      events.forEach((cb) => cb(...args))
    }
  }

  public remove(name: string, fn: Function) {
    if(!this.events[name]) {
      return;
    }
    if(fn) {
      let index = this.events[name].indexOf(fn);
      if (index > 0) {
        this.events[name].splice(index, 1);
      }
    } else {
      delete this.events[name];
    }
  }
}
