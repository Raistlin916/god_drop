import System from 'engine/System'
import Entity from 'engine/Entity'
import Aspect from 'engine/Aspect'
import ComponentMapper from 'engine/ComponentMapper'
import EntityEditor from 'engine/EntityEditor'
import Spawner from '../components/Spawner'
import Position from '../components/Position'
import Physical from '../components/Physical'
import Gravity from '../components/Gravity'
import entityFactory from '../entityFactory'
import math from 'engine/utils/math'

export default class SpawnerSystem extends System {
  private spawnerMapper: ComponentMapper<Spawner>
  constructor() {
    super(Aspect.all(Spawner))
  }
  public process(entity: Entity): void {
    const spawner = this.spawnerMapper.get(entity)
    spawner.cooldown -= 1
    if (spawner.cooldown <= 0) {
      spawner.cooldown = math.getRandomInt(spawner.minCooldown, spawner.maxCooldown)
      const item = entityFactory.createItem(this.world.getCurrentScene())
      this.tagManager.addTag('item', item)

      if (spawner.type === 'massItem') {
        const editor = new EntityEditor(item, this.world)
        editor.setComponent(Position, {
          x: canvas.width / 2 - 20,
          y: 200
        }).setComponent(Physical, {
          vx: math.getRandom(-1.5, 1.5),
          vy: -10
        }).add(new Gravity())
      }
    }
  }
}
