import World from 'engine/World'
import Component, { Components } from 'engine/Component'
import * as com from './components/index'
import RenderSystem from './systems/RenderSystem'
import PhysicalSystem from './systems/PhysicalSystem'
import entityFactory from './entityFactory'

const components: Components = { ...com }

export default class Game {
  private world: World
  private running: Boolean = false

  constructor() {
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d')
    this.world = new World
    this.world.importComponents(components)
    this.world
      .addSystem(new PhysicalSystem())
      .addSystem(new RenderSystem(ctx))

    this.loop = this.loop.bind(this)

    this.init()
    this.start()
  }

  private init() :void {
    entityFactory.createGod(this.world)
  }

  public start() :void {
    this.running = true
    this.loop()
  }

  public loop() :void {
    this.world.process()

    requestAnimationFrame(this.loop)
  }
}
