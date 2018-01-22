import System from 'engine/System'
import Entity from 'engine/Entity'
import Aspect from 'engine/Aspect'
import EntityEditor from 'engine/EntityEditor'
import ComponentMapper from 'engine/ComponentMapper'
import { Bound, Position, Physical, Payload, RigidBody, Gravity, Paint } from '../components/index'

export default class CollisionSystem extends System {
  private positionMapper: ComponentMapper<Position>
  private physicalMapper: ComponentMapper<Physical>
  private boundMapper: ComponentMapper<Bound>
  private payloadMapper: ComponentMapper<Payload>
  private rigidBodyMapper: ComponentMapper<RigidBody>

  constructor() {
    super(Aspect.all(Position, Bound, RigidBody))
  }

  public process(entity: Entity): void {
    if (!this.tagManager.is(entity, 'player')) {
      return
    }
    this.tagManager.getByTag('item').forEach((item: Entity) => {
      if (!this.rigidBodyMapper.get(item)) {
        return
      }
      if (this.overlap(item, entity)) {
        this.payloadMapper.get(entity).data.score += this.payloadMapper.get(item).data.bonus
        const editor = new EntityEditor(item, this.world)
        editor.removeComponent(RigidBody, item)
          .removeComponent(Gravity, item)
          .setComponent(Physical, {
            vx: 0,
            vy: -5
          })
          .setComponent(Paint, {
            animation: 'fadeOut',
            animationCount: 5,
            animationDuration: 15
          })
        const removeEvent = this.world.eventBus.on('animationEnd', (entity: Entity) => {
          if (entity === item) {
            this.entityManager.remove(item)
            removeEvent()
          }
        })
      }
    })

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
