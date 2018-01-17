import World from 'engine/World'
import Entity from 'engine/Entity'
import EntityEditor from 'engine/EntityEditor'
import math from 'engine/utils/math'
import { Position, Paint, Bound, Physical, WallSensor, Spawner, Payload, PlayerController, Gravity } from './components/index'

const instance = {
  createGod(world: World): Entity {
    return world.createEntity()
      .add(new PlayerController())
      .add(new Position(canvas.width / 2, canvas.height - 130))
      .add(new Physical(0, 0))
      .add(new Bound(100, 113.5))
      .add(new Paint('imgs/god.png'))
      .add(new Payload({
        score: 2
      }))
      .getEntity()
  },
  createItem(world: World): Entity {
    const entityEditor = world.createEntity()
      .add(new Position(math.getRandomInt(20, canvas.width - 50), -50))
      .add(new Physical(0, 5))
      .add(new WallSensor())

    const types = [
      'gold', 'gold_pack', 'gold_pack2', 'lucky', 'bomb'
    ]
    const type = types[math.getRandomInt(0, types.length - 1)]
    if (type === 'gold') {
      entityEditor.add(new Bound(38, 29))
        .add(new Paint('imgs/gold.png'))
        .add(new Payload({
          bonus: 2
        }))
    } else if (type === 'gold_pack') {
      entityEditor.add(new Bound(50, 42.5))
        .add(new Paint('imgs/gold_pack.png'))
        .add(new Payload({
          bonus: 5
        }))
    } else if (type === 'gold_pack2') {
      entityEditor.add(new Bound(40.5, 44.5))
        .add(new Paint('imgs/gold_pack2.png'))
        .add(new Payload({
          bonus: 10
        }))
    } else if (type === 'lucky') {
      entityEditor.add(new Bound(46.125, 48.75))
        .add(new Paint('imgs/lucky/1.png'))
        .add(new Payload({
          bonus: 1
        }))
    } else if (type === 'bomb') {
      entityEditor.add(new Bound(50, 73))
        .add(new Paint('imgs/bomb.png'))
        .add(new Payload({
          bonus: -10
        }))
    }

    return entityEditor.getEntity()
  },

  createItemSpawner(world: World): Entity {
    return world.createEntity()
      .add(new Spawner('item', {
        minCooldown: 30,
        maxCooldown: 120,
        initialCooldown: math.getRandomInt(0, 60) / 2
      }))
      .getEntity()
  },

  createBackground(world: World): Entity {
    return world.createEntity()
      .add(new Paint('imgs/bg.png'))
      .add(new Position(0, 0))
      .add(new Bound(canvas.width, canvas.height))
      .getEntity()
  },

  createMassItemsSpawner(world: World): Entity {
    return world.createEntity()
      .add(new Spawner('massItem', {
        minCooldown: 2,
        maxCooldown: 5,
        initialCooldown: 0
      }))
      .getEntity()
  }
}

export default instance
