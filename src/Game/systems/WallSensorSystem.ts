import System from 'engine/System'
import Entity from 'engine/Entity'
import ComponentMapper from 'engine/ComponentMapper'
import Aspect from 'engine/Aspect'
import RenderSystem from './RenderSystem'
import Position from '../components/Position'
import Bound from '../components/Bound'
import WallSensor from '../components/WallSensor'

export default class WallSensorSystem extends System {
  private positionMapper: ComponentMapper<Position>
  private renderSystem: RenderSystem;

  constructor() {
    super(Aspect.all(Position, Bound, WallSensor))
  }

  process(entity: Entity): void {
    const position = this.positionMapper.get(entity)
    const screenSize = this.renderSystem.getSize()

    if (position.y > screenSize.y2) {
      this.entityManager.remove(entity)
    }
  }
}
