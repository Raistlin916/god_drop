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
  private section: number

  public init(): void {
    entityFactory.createBackground(this.world)
    this.startSection1()
  }

  startSection1() {
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

  startSection2() {
    if (this.section !== 1) {
      return
    }
    this.section = 2
    const { pot, world } = this
    const editor = new EntityEditor(pot, world)
    editor.setComponent(Paint, {
      animation: 'shake'
    })

    entityFactory.createMassItemsSpawner(world)
    const player = entityFactory.createGod(world)
    world.getTagManager().addTeam('player', player)

    const scoreUI = new UIText('', {
      fillStyle: '#eee',
      fontSize: 24,
      fontFamily: 'Monaco',
      x: 20,
      y: 40
    })
    world.addUI(scoreUI)
    world.onProcessBegin = () => {
      scoreUI.text = this.world.getComponent(Payload, player).data.score
    }
  }
}
