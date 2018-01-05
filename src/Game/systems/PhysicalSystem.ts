import System from 'engine/System'
import Entity from 'engine/Entity'
import ComponentMapper from 'engine/ComponentMapper'
import Aspect from 'engine/Aspect'
import Position from '../components/Position'
import Physical from '../components/Physical'

export default class PhysicalSystem extends System {
  private positionMapper: ComponentMapper<Position>;
  private physicalMapper: ComponentMapper<Physical>;

  constructor() {
    super(Aspect.all(Position, Physical));
  }

  process(entity: Entity): void {
    const position = this.positionMapper.get(entity);
    const physical = this.physicalMapper.get(entity);

    position.x += physical.vx;
    position.y += physical.vy;
  }
}
