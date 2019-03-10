import Scene from 'engine/Scene'
import Entity from 'engine/Entity'
import UIText from 'engine/UI/Text'
import { EntityBundle } from 'engine/World'
import EntityEditor from 'engine/EntityEditor'
import { Payload, Position, Bound, Paint, Physical, PlayerController } from '../components/index'
import entityFactory from '../entityFactory'
import Input from '../Input'

const COUNTDOWN = 10

export default class Main extends Scene {
  private scoreText: UIText
  private countDownText: UIText
  private input: Input = new Input()
  private pot: Entity
  private player: Entity
  private itemSpawner: Entity
  private bg: Entity
  private section: number

  public init(entityBundle: EntityBundle): void {
    this.pot = entityFactory.createPot(this)
    this.bg = entityBundle.bg
    this.player = entityBundle.player

    const editor = new EntityEditor(this.player, this.world)
    editor.add(new PlayerController())

    this.startSection1()
  }

  startSection1(): void {
    this.section = 1
    const { pot, bg } = this

    this.input.on('click', e => {
      const position: Position = this.world.getComponent(Position, pot)
      const bound: Bound = this.world.getComponent(Bound, pot)

      if (bound && bound.isIn(position, e)) {
        this.startSection2()
      }
    })

    if (this.world.getComponent(Position, bg).y < 0) {
      const editor = new EntityEditor(bg, this.world)
      editor.setComponent(Physical, {
        vx: 0,
        vy: 10
      })

      const removeEvent = this.world.eventBus.on('processBegin', () => {
        if (this.world.getComponent(Position, this.bg).y + 10 >= 0) {
          editor.setComponent(Physical, {
            vx: 0,
            vy: 0
          }).setComponent(Position, {
            x: 0,
            y: 0
          })
          removeEvent()
        }
      })
    }
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

    this.itemSpawner = entityFactory.createMassItemsSpawner(this)

    this.scoreText = new UIText('', {
      fillStyle: '#eee',
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Monaco',
      x: 20,
      y: 40
    })
    world.addUI(this.scoreText)
    const removeEvent = world.eventBus.on('processEnd', () => {
      this.scoreText.text = this.world.getComponent(Payload, this.player).data.score
      if (this.section !== 2) {
        removeEvent()
      }
    })
  }

  startStatistics(): void {
    this.section = 3
    const { world } = this
    const editor = new EntityEditor(this.bg, world)
    editor.setComponent(Physical, {
      vx: 0,
      vy: -4
    })

    const potEditor = new EntityEditor(this.pot, world)
    potEditor.setComponent(Paint, {
      animation: 'fadeOut',
      animationCount: 0,
      animationDuration: 30
    })

    const removeAnimationEvent = this.world.eventBus.on('animationEnd', (entity: Entity) => {
      if (entity === this.pot) {
        this.world.getEntityManager().remove(this.pot)
        removeAnimationEvent()
      }
    })
    world.removeUI(this.countDownText)
    world.removeUI(this.scoreText)

    const removeEvent = this.world.eventBus.on('processEnd', () => {
      if (this.world.getComponent(Position, this.bg).y +
      this.world.getComponent(Bound, this.bg).height() <= 150) {
        editor.setComponent(Physical, {
          vx: 0,
          vy: 0
        })
        removeEvent()

        world.nextScene()
      }
    })
  }

  initCountDown(): void {
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
    this.countDownText = countDownText
    world.addUI(countDownText)
    const removeEvent = world.eventBus.on('processBegin', () => {
      const countDown = COUNTDOWN - Math.floor((world.totalFrames - startAt) / 60)
      countDownText.text = countDown
      if (countDown === 0) {
        removeEvent()
        this.world.getEntityManager().remove(this.itemSpawner)
        countDownText.text = '时间到!'
        countDownText.textOption.fontSize = 30

        const potEditor = new EntityEditor(this.pot, world)
        potEditor.setComponent(Paint, {
          animation: null
        })

        const removeCheckEvent = this.world.eventBus.on('processEnd', () => {
          if (this.world.getTagManager().getByTag('item').length === 0) {
            this.startStatistics()
            removeCheckEvent()
          }
        })
      }
    })
  }
}
