import World from 'engine/World'
import Entity from 'engine/Entity'
import { Position, Paint, Bound, Physical, WallSensor, Spawner } from './components/index'

export default {
  createGod(world: World): Entity {
    return world.createEntity()
      .add(new Position(canvas.width / 2, canvas.height / 2))
      .add(new Bound(100, 113.5))
      .add(new Paint('imgs/god.png'))
      .getEntity()
  },
  createItem(world: World): Entity {
    // const seed = Math.ceil(Math.random() * 20)
    const seed = 0
    return world.createEntity()
      .add(new Position(canvas.width / 2, 20))
      .add(new Bound(40, 40))
      .add(new Physical(0, 5))
      .add(new WallSensor())
      .add(new Paint('imgs/artifacts.png', {
        sx: 10 + seed * 40,
        sy: 8,
        sw: 40,
        sh: 40
      }))
      .getEntity()
  },
  createItemSpawner(world: World): Entity {
    return world.createEntity()
      .add(new Spawner('item', 120))
      .getEntity()
  }
}
