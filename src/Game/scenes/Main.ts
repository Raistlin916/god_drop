import Scene from 'engine/Scene'
import Entity from 'engine/Entity'
import UIText from 'engine/UI/Text'
import EntityEditor from 'engine/EntityEditor'
import { Payload, Position, Bound, Paint } from '../components/index'
import entityFactory from '../entityFactory'
import Input from '../Input'

export default class Main extends Scene {
  private input: Input = new Input()
  private pot: Entity
  private itemSpawner: Entity
  private section: number

  public init(): void {
    entityFactory.createBackground(this.world)
    this.startSection1()
  }

  startSection1(): void {
    this.section = 1
    const { world } = this

    const pot = entityFactory.createPot(world)
    this.pot = pot
    this.input.on('click', e => {
      const position: Position = this.world.getComponent(Position, pot)
      const bound: Bound = this.world.getComponent(Bound, pot)

      if (bound.isIn(position, e)) {
        this.startSection2()
      }
    })
  }

  startSection2(): void {
    if (this.section !== 1) {
      return
    }
    this.section = 2
    const { pot, world } = this
    this.initCountDown()

    const editor = new EntityEditor(pot, world)
    editor.setComponent(Paint, {
      animation: 'shake',
      animationDuration: Infinity
    })

    this.itemSpawner = entityFactory.createMassItemsSpawner(world)
    const player = entityFactory.createGod(world)
    world.getTagManager().addTag('player', player)

    const scoreText = new UIText('', {
      fillStyle: '#eee',
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Monaco',
      x: 20,
      y: 40
    })
    world.addUI(scoreText)
    world.eventBus.on('processEnd', () => {
      scoreText.text = this.world.getComponent(Payload, player).data.score
    })
  }

  initCountDown() {
    const { world } = this
    const startAt: number = world.totalFrames
    const countDownText =  new UIText('', {
      fillStyle: '#f8e879',
      fontSize: 60,
      fontFamily: 'Monaco',
      textAlign: 'center',
      x: canvas.width / 2,
      y: 100
    })
    world.addUI(countDownText)
    const removeEvent = world.eventBus.on('processBegin', () => {
      const countDown = 5 - Math.floor((world.totalFrames - startAt) / 60)
      countDownText.text = countDown
      if (countDown === 0) {
        this.world.getEntityManager().remove(this.itemSpawner)
        countDownText.text = '时间到!'

        const editor = new EntityEditor(this.pot, world)
        editor.setComponent(Paint, {
          animation: null
        })

        removeEvent()
      }
    })
  }
}
