import World from 'engine/World'
import Component, { Components } from 'engine/Component'

export default abstract class Scene {
  protected world: World
  private running: Boolean = false

  constructor(world?: World) {
    if (!world) {
      this.world = new World()
    }

    this.loop = this.loop.bind(this)
    this.init()
  }

  abstract init(): void

  public start(): void {
    this.running = true
    this.loop()
  }

  public pause(): void {
    this.running = false
  }

  public loop(): void {
    if (!this.running) {
      return
    }
    this.world.process()

    requestAnimationFrame(this.loop)
  }
}
