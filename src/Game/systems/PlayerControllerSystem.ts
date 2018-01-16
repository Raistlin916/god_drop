import System from 'engine/System'
import Entity from 'engine/Entity'
import ComponentMapper from 'engine/ComponentMapper'
import Aspect from 'engine/Aspect'
import PlayerController from '../components/PlayerController'
import Position from '../components/Position'
import Physical from '../components/Physical'
import Bound from '../components/Bound'

export default class PlayerControllerSystem extends System {
  private positionMapper: ComponentMapper<Position>
  private physicalMapper: ComponentMapper<Physical>
  private boundMapper: ComponentMapper<Bound>
  private finger: Position = new Position(0, 0)
  private isControl: boolean = false

  constructor(canvas: HTMLCanvasElement) {
    super(Aspect.all(PlayerController))
    this.initTouchEvents(canvas)
  }

  initTouchEvents(canvas: HTMLCanvasElement) {
    const movePlayer = (e) => {
      e.preventDefault()

      this.finger.x = e.touches[0].clientX
      this.finger.y = e.touches[0].clientY
      this.isControl = true
    }
    const leaveControl = e => {
      this.finger.x = null
      this.finger.y = null
      this.isControl = false
    }
    canvas.addEventListener('touchstart', movePlayer)
    canvas.addEventListener('touchmove', movePlayer)
    canvas.addEventListener('touchend', leaveControl)
  }

  process(entity: Entity): void {
    const physical: Physical = this.physicalMapper.get(entity)
    const position: Position = this.positionMapper.get(entity)
    const bound: Bound = this.boundMapper.get(entity)

    if (!this.isControl) {
      physical.vx = 0
      return
    }

    const centerX = bound.centerX() + position.x
    const delta = this.finger.x - centerX

    if (Math.abs(delta) < 10) {
      physical.vx = 0
    } else {
      const direction: number = delta / Math.abs(delta)
      const speed: number = Math.min(5, Math.abs(physical.vx) + 0.5)
      physical.vx = direction * speed
    }
  }
}
