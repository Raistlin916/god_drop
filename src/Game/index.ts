import World from 'engine/World'
import Component, { Components } from 'engine/Component'
import UIText from 'engine/UI/Text'
import * as com from './components/index'
import { Payload } from './components/index'
import RenderSystem from './systems/RenderSystem'
import PhysicalSystem from './systems/PhysicalSystem'
import WallSensorSystem from './systems/WallSensorSystem'
import SpawnerSystem from './systems/SpawnerSystem'
import CollisionSystem from './systems/CollisionSystem'
import entityFactory from './entityFactory'

const components: Components = { ...com }
const ctx: CanvasRenderingContext2D = canvas.getContext('2d')

export default class Game {
  private world: World
  private running: Boolean = false

  constructor() {
    this.world = new World()
    this.world.importComponents(components)
    this.world
      .addSystem(new SpawnerSystem())
      .addSystem(new WallSensorSystem())
      .addSystem(new PhysicalSystem())
      .addSystem(new CollisionSystem())
      .addSystem(new RenderSystem(ctx))

    this.loop = this.loop.bind(this)

    this.init()
    this.start()
  }

  private init() :void {
    entityFactory.createItemSpawner(this.world)
    entityFactory.createItemSpawner(this.world)
    entityFactory.createItemSpawner(this.world)
    entityFactory.createItemSpawner(this.world)
    entityFactory.createItemSpawner(this.world)

    entityFactory.createBg(this.world)


    const player = entityFactory.createGod(this.world)
    this.world.getTagManager().addTeam('player', player)

    const scoreUI = new UIText(ctx, '', {
      fillStyle: '#eee',
      fontSize: 24,
      fontFamily: 'Monaco',
      x: 20,
      y: 40
    })
    this.world.addUI(scoreUI)
    this.world.onProcessBegin = () => {
      scoreUI.text = this.world.getComponent(Payload, player).data.score
    }
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
