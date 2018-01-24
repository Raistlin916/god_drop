import World from 'engine/World'
import Entity from 'engine/Entity'
import EntityEditor from 'engine/EntityEditor'
import math from 'engine/utils/math'
import Scene from 'engine/Scene'
import { Position, Paint, Bound, Physical, WallSensor, Spawner, Payload, PlayerController, Gravity, RigidBody } from './components/index'

export const bonusMap = {
  gold: 2,
  gold_pack: 5,
  gold_pack2: 10,
  lucky: 1,
  bomb: -10
}

const instance = {
  createGod(world: World): Entity {
    return world.createEntity()
      .add(new PlayerController())
      .add(new Position(canvas.width / 2, canvas.height - 160))
      .add(new Physical(0, 0))
      .add(new RigidBody())
      .add(new Bound(100, 113.5))
      .add(new Paint('imgs/god.png'))
      .add(new Payload({
        score: 0,
        catched: {}
      }))
      .getEntity()
  },
  createItem(scene: Scene, customType?: string): Entity {
    const entityEditor = scene.createEntity()
      .add(new Position(canvas.width / 2, canvas.height / 2))
      .add(new Physical(0, 0))
      .add(new RigidBody())
      .add(new WallSensor())

    const types = [
      'gold', 'gold_pack', 'gold_pack2', 'lucky', 'bomb'
    ]
    if (customType && types.indexOf(customType) === -1) {
      throw new Error('unknown item type')
    }
    const type = customType || types[math.getRandomInt(0, types.length - 1)]
    const payload = new Payload({
      bonus: bonusMap[type],
      type
    })
    if (type === 'gold') {
      entityEditor.add(new Bound(38, 29))
        .add(new Paint('imgs/gold.png'))
        .add(payload)
    } else if (type === 'gold_pack') {
      entityEditor.add(new Bound(50, 42.5))
        .add(new Paint('imgs/gold_pack.png'))
        .add(payload)
    } else if (type === 'gold_pack2') {
      entityEditor.add(new Bound(40.5, 44.5))
        .add(new Paint('imgs/gold_pack2.png'))
        .add(payload)
    } else if (type === 'lucky') {
      entityEditor.add(new Bound(46.125, 48.75))
        .add(new Paint('imgs/lucky/1.png'))
        .add(payload)
    } else if (type === 'bomb') {
      entityEditor.add(new Bound(50, 73))
        .add(new Paint('imgs/bomb.png'))
        .add(payload)
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
      .add(new Physical(0, 0))
      .add(new Bound(canvas.width, canvas.height))
      .getEntity()
  },

  createDeeperBg(world: World): Entity {
    return world.createEntity()
      .add(new Paint('rect', {
        color: '#f8e879'
      }))
      .add(new Position(0, 0))
      .add(new Bound(canvas.width, canvas.height))
      .getEntity()
  },

  createMassItemsSpawner(scene: Scene): Entity {
    return scene.createEntity()
      .add(new Spawner('massItem', {
        minCooldown: 2,
        maxCooldown: 5,
        initialCooldown: 0
      }))
      .getEntity()
  },

  createPot(scene: Scene): Entity {
    return scene.createEntity()
      .add(new Paint('imgs/pot.png'))
      .add(new Bound(256, 238.5))
      .add(new Position(canvas.width / 2 - 128, 200))
      .getEntity()
  },

  createPlayAgainBtn(scene: Scene, pos: Position): Entity {
    return scene.createEntity()
      .add(new Paint('imgs/playagain.png'))
      .add(new Bound(64, 64))
      .add(pos)
      .getEntity()
  }
}

export default instance
