import Scene from 'engine/Scene'
import Entity from 'engine/Entity'
import EntityEditor from 'engine/EntityEditor'
import UIText from 'engine/UI/Text'
import { PlayerController, Physical, Payload, Position, Bound, Paint } from '../components/index'
import entityFactory, { bonusMap } from '../entityFactory'

export default class Statistics extends Scene {
  private player: Entity
  init() {
    const { world } = this
    this.player = world.getTagManager().getByTag('player')[0]
    const playerEditor = new EntityEditor(this.player, world)
    playerEditor.removeComponent(PlayerController)
      .setComponent(Physical, {
        vx: 0,
        vy: 0
      })

    const catched = world.getComponent(Payload, this.player).data.catched
    // const catched = { bomb: 3, gold: 4, lucky: 5 }
    const entities = []
    let yCoord = 80

    const scoreText = new UIText('0', {
      fillStyle: '#db4635',
      fontSize: 60,
      fontFamily: 'Monaco',
      textAlign: 'center',
      x: canvas.width / 2,
      y: yCoord
    })
    world.addUI(scoreText)
    yCoord += 30

    Object.keys(catched).forEach((key, keyIndex) => {
      for (let i = 0; i < catched[key]; i ++) {
        const itemEntity = entityFactory.createItem(world, key)
        entities.push(itemEntity)
        const itemBound = world.getComponent(Bound, itemEntity)
        const editor = new EntityEditor(itemEntity, this.world)
        editor.setComponent(Position, {
          x: i * 20 + 30,
          y: yCoord
        }).setComponent(Paint, {
          opacity: 0
        })

        if (i === catched[key] - 1) {
          yCoord += itemBound.height() + 10
        }
      }
    })

    entities.forEach((entity, index) => {
      setTimeout(() => {
        const editor = new EntityEditor(entity, this.world)
        editor.setComponent(Paint, {
          opacity: 1
        })

        scoreText.text = Number(scoreText.text) + world.getComponent(Payload, entity).data.bonus
      }, index * 100)
    })
  }
}
