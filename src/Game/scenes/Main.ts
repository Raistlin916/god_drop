import Scene from 'engine/Scene'
import Entity from 'engine/Entity'
import UIText from 'engine/UI/Text'
import { EntityBundle } from 'engine/World'
import EntityEditor from 'engine/EntityEditor'
import { Payload, Position, Bound, Physical, PlayerController } from '../components/index'
import entityFactory from '../entityFactory'

const COUNTDOWN = 1

export default class Main extends Scene {
  private scoreText: UIText
  private countDownText: UIText
  private spawners: Entity[] = []
  private player: Entity
  private bg: Entity
  private section: number

  public init(entityBundle: EntityBundle): void {
    this.bg = entityBundle.bg
    this.player = entityBundle.player

    const editor = new EntityEditor(this.player, this.world)
    editor.add(new PlayerController())

    this.startSection1()
  }

  startSection1(): void {
    this.section = 1
    const { bg } = this

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

    setTimeout(() => {
      for(let i = 0; i < 7; i ++ ) {
        this.spawners.push(entityFactory.createItemSpawner(this))
      }
      this.startSection2()
    }, 1000)
  }

  startSection2(): void {
    if (this.section !== 1) {
      return
    }
    this.section = 2
    const { world } = this
    this.initCountDown()

    // const editor = new EntityEditor(pot, world)
    // editor.setComponent(Paint, {
    //   animation: 'shake',
    //   animationDuration: Infinity
    // })

    // entityFactory.createMassItemsSpawner(this)

    this.scoreText = new UIText('', {
      fillStyle: '#eee',
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Monaco',
      x: 30,
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
      vy: -6
    })

    // const potEditor = new EntityEditor(this.pot, world)
    // potEditor.setComponent(Paint, {
    //   animation: 'fadeOut',
    //   animationCount: 0,
    //   animationDuration: 30
    // })

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
        countDownText.text = '时间到!'
        countDownText.textOption.fontSize = 30

        this.spawners.forEach(spawner => this.world.getEntityManager().remove(spawner))

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
