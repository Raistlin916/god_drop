import System from 'engine/System'
import Entity from 'engine/Entity'
import Aspect from 'engine/Aspect'
import ComponentMapper from 'engine/ComponentMapper'
import Position from '../components/Position'
import Paint from '../components/Paint'
import Bound from '../components/Bound'

export default class RenderSystem extends System {

  private ctx: CanvasRenderingContext2D
  private width: number
  private height: number
  private positionMapper: ComponentMapper<Position>
  private boundMapper: ComponentMapper<Bound>
  private paintMapper: ComponentMapper<Paint>

  constructor(ctx: CanvasRenderingContext2D) {
    super(Aspect.all(Position, Paint))
    this.ctx = ctx
    this.width = this.ctx.canvas.width
    this.height = this.ctx.canvas.height
  }

  public onBegin(): void {
    this.ctx.fillStyle = '#eee'
    this.ctx.fillRect(0, 0, this.width, this.height)
  }

  public onEnd(): void {

  }

  public process(entity: Entity): void {
    const { ctx } = this

    const position = this.positionMapper.get(entity)
    const paint = this.paintMapper.get(entity)
    const bound = this.boundMapper.get(entity)

    ctx.save()
    ctx.drawImage(paint.img, position.x, position.y, bound.x2, bound.y2)
    ctx.restore()
  }
}
