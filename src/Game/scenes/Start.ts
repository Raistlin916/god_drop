import Scene from 'engine/Scene'
import UIText from 'engine/UI/Text'
import { Payload } from '../components/index'
import entityFactory from '../entityFactory'

export default class Start extends Scene {
  public init(): void {
    const { world } = this
    entityFactory.createItemSpawner(world)
    entityFactory.createItemSpawner(world)
    entityFactory.createItemSpawner(world)
    entityFactory.createItemSpawner(world)
    entityFactory.createItemSpawner(world)

    entityFactory.createBackground(world)


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
