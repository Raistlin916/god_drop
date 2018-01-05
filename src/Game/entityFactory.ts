import World from 'engine/World'
import Entity from 'engine/Entity'
import { Position, Paint, Bound, Physical } from './components/index'

export default {
  createGod(world: World): Entity {
    return world.createEntity()
      .add(new Position(canvas.width / 2, canvas.height / 2))
      .add(new Bound(100, 113.5))
      .add(new Paint('imgs/god.png'))
      .getEntity()
  }
}
