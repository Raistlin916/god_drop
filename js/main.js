import Player from './Player'
const ctx = canvas.getContext('2d')

export default class Main {
  constructor() {
    this.player = new Player()
    this.start()
  }

  start() {
    this.running = true
    this.loop()
  }

  pause() {
    this.running = false
  }

  render() {
    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    this.player.render(ctx)
  }

  loop() {
    this.render()
    requestAnimationFrame(() => {
      if (!this.running) {
        return
      }
      this.loop()
    })
  }
}
