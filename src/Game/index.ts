import Component, { Components } from 'engine/Component'
import World from 'engine/World'
import * as com from './components/index'
import RenderSystem from './systems/RenderSystem'
import PhysicalSystem from './systems/PhysicalSystem'
import WallSensorSystem from './systems/WallSensorSystem'
import SpawnerSystem from './systems/SpawnerSystem'
import PlayerControllerSystem from './systems/PlayerControllerSystem'
import CollisionSystem from './systems/CollisionSystem'
import MainScene from './scenes/Main'

const components: Components = { ...com }
const ctx: CanvasRenderingContext2D = canvas.getContext('2d')

export default class Game {
  constructor() {
    const world: World = new World(ctx)
    world.importComponents(components)
    world
      .addSystem(new PlayerControllerSystem(canvas))
      .addSystem(new SpawnerSystem())
      .addSystem(new WallSensorSystem())
      .addSystem(new PhysicalSystem())
      .addSystem(new CollisionSystem())
      .addSystem(new RenderSystem(ctx))

    const mainScene = new MainScene(world)
    mainScene.init()
    mainScene.start()
  }
}
