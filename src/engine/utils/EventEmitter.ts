export default class EventEmitter {
  private events: object = {}

  public on(name: string, cb: Function): Function {
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(cb);
    return () => this.remove(name, cb);
  }

  public once(name: string, cb: Function): void {
    const fn = (...args) => {
      cb(...args)
      this.remove(name, fn)
    }
    this.on(name, fn)
  }

  public emit(name: string, ...args) {
    const events = this.events[name];
    if (events) {
      events.forEach((cb) => cb(...args))
    }
  }

  public remove(name: string, fn: Function) {
    const targetEvent = this.events[name]
    if (!targetEvent) {
      return;
    }
    if(fn) {
      let index = targetEvent.indexOf(fn);
      if (index > -1) {
        targetEvent.splice(index, 1);
      }
    } else {
      delete this.events[name];
    }
  }
}
