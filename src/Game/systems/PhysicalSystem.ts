import System from 'engine/System'
import Entity from 'engine/Entity'
import ComponentMapper from 'engine/ComponentMapper'
import Aspect from 'engine/Aspect'
import Position from '../components/Position'
import Physical from '../components/Physical'
import Gravity from '../components/Gravity'

export default class PhysicalSystem extends System {
  private positionMapper: ComponentMapper<Position>
  private physicalMapper: ComponentMapper<Physical>
  private gravityMapper: ComponentMapper<Gravity>

  constructor() {
    super(Aspect.all(Position, Physical))
  }

  process(entity: Entity): void {
    const position = this.positionMapper.get(entity)
    const physical = this.physicalMapper.get(entity)
    const gravity = this.gravityMapper.get(entity)

    if (gravity) {
      physical.vy += 0.2
    }

    position.x += physical.vx
    position.y += physical.vy
  }
}
