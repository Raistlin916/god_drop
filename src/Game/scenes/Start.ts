import Scene from 'engine/Scene'
import { EntityBundle } from 'engine/World'
import EntityEditor from 'engine/EntityEditor'
import { Position, Bound, PlayerController } from '../components/index'
import entityFactory from '../entityFactory'
import Input from '../Input'

export default class Start extends Scene {
  private input: Input = new Input()

  init(entityBundle: EntityBundle): void {
    const { world } = this
    const bgEditor = new EntityEditor(entityBundle.bg, world)
    bgEditor.setComponent(Position, {
      y: - world.getComponent(Bound, entityBundle.bg).height()
    })

    const playerEditor = new EntityEditor(entityBundle.player, this.world)
    playerEditor.removeComponent(PlayerController)

    entityFactory.createMask(this)
    entityFactory.createTitle(this)
    const startBtn = entityFactory.createStartBtn(this)

    const removeEvent = this.input.on('click', e => {
      const position: Position = this.world.getComponent(Position, startBtn)
      const bound: Bound = this.world.getComponent(Bound, startBtn)

      if (bound && bound.isIn(position, e)) {
        world.nextScene()
        removeEvent()
      }
    })
  }
}
