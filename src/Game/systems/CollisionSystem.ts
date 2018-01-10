import System from 'engine/System'
import Entity from 'engine/Entity'
import Aspect from 'engine/Aspect'
import ComponentMapper from 'engine/ComponentMapper'
import { Bound, Position, Physical } from '../components/index'

export default class CollisionSystem extends System {
  private positionMapper: ComponentMapper<Position>
  private physicalMapper: ComponentMapper<Physical>
  private boundMapper: ComponentMapper<Bound>

  constructor() {
    super(Aspect.all(Position, Bound))
  }

  public process(entity: Entity): void {
    const physical: Physical = this.physicalMapper.get(entity)
    const position: Position = this.positionMapper.get(entity)
    const bound: Bound = this.boundMapper.get(entity)


  }

  public overlap(a: Entity, b: Entity): boolean {
    const ap: Position = this.positionMapper.get(a)
    const bp: Position = this.positionMapper.get(b)
    const ab: Bound = this.boundMapper.get(a)
    const bb: Bound = this.boundMapper.get(b)

    if (ap && bp && ab && bb) {
      return (ap.x + ab.x1 <= bp.x + bb.x2) &&
        (bp.x + bb.x1 <= ap.x + ab.x2) &&
        (ap.y + ab.y1 <= bp.y + bb.y2) &&
        (bp.y + bb.y1 <= ap.y + ab.y2)
    }
    return false
  }

  public distance(ap: Position, bp: Position): number {
    return Math.sqrt((ap.x - bp.x) ** 2 + (ap.y - bp.y) ** 2)
  }
}
