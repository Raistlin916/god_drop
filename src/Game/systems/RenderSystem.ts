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
  private size: Bound

  constructor(ctx: CanvasRenderingContext2D) {
    super(Aspect.all(Position, Paint))
    this.ctx = ctx
    this.width = this.ctx.canvas.width
    this.height = this.ctx.canvas.height
    this.size = new Bound(this.width, this.height)
  }

  public getSize(): Bound {
    return this.size
  }

  public onBegin(): void {
    this.ctx.fillStyle = '#fff'
    this.ctx.fillRect(0, 0, this.width, this.height)
  }

  public onEnd(): void {

  }

  private handleAnimation(ctx: CanvasRenderingContext2D, paint: Paint, position: Position, bound: Bound): void {
    if (paint.animation === 'shake') {
      const c = paint.animationCount
      ctx.translate(Math.cos(1 * c) + Math.cos(3 * c), Math.sin(0.5 * c) + Math.sin(0.571 * c))
      paint.animationCount ++
    }
  }

  private handleState(ctx: CanvasRenderingContext2D, paint: Paint, position: Position, bound: Bound): void {
    if (paint.state === 'reverse') {
      ctx.translate(bound.centerX(), 0)
      ctx.scale(-1, 1)
      ctx.translate(-bound.centerX(), 0)
    }
  }

  public process(entity: Entity): void {
    const { ctx } = this

    const position = this.positionMapper.get(entity)
    const paint = this.paintMapper.get(entity)
    const bound = this.boundMapper.get(entity)

    ctx.save()
    ctx.translate(position.x, position.y)

    if (paint.animation) {
      this.handleAnimation(ctx, paint, position, bound)
    }

    if (paint.state) {
      this.handleState(ctx, paint, position, bound)
    }

    if (paint.imageRenderOptions) {
      const { imageRenderOptions } = paint
      ctx.drawImage(paint.img, imageRenderOptions.sx, imageRenderOptions.sy,
        imageRenderOptions.sw, imageRenderOptions.sh, 0, 0, bound.x2, bound.y2)
    } else {
      ctx.drawImage(paint.img, 0, 0, bound.x2, bound.y2)
    }

    ctx.restore()
  }
}
