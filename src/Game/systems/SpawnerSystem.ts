import System from 'engine/System'
import Entity from 'engine/Entity'
import Aspect from 'engine/Aspect'
import ComponentMapper from 'engine/ComponentMapper'
import Spawner from '../components/Spawner'
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
      const item = entityFactory.createItem(this.world)
      this.tagManager.addTeam('item', item)
    }
  }
}
