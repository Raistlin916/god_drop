import EventEmitter from 'engine/utils/EventEmitter'

interface InputEvent {
  x: number,
  y: number
}

const eventMapper = {
  click: 'touchstart',
  touchstart: 'touchstart',
  toucdmove: 'toucdmove',
  touchend: 'touchend'
}

let instance = null

export default class Input extends EventEmitter {
  constructor() {
    super()
    if (instance) {
      return instance
    } else {
      instance = this
    }
  }
  public on(name: string, cb: (e: InputEvent) => void): Function {
    const targetEventName = eventMapper[name]
    if (!targetEventName) {
      return
    }
    const handler = (e: TouchEvent) => {
      e.preventDefault()
      cb({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      })
    }
    canvas.addEventListener(targetEventName, handler)
    return () => canvas.removeEventListener(targetEventName, handler)
  }
}
