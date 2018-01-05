import System from 'engine/System'
import Entity from 'engine/Entity'
import ComponentMapper from 'engine/ComponentMapper'
import Aspect from 'engine/Aspect'
import Position from '../components/Position'
import Paint from '../components/Paint'

export default class RenderSystem extends System {

  private ctx: CanvasRenderingContext2D
  private width: number
  private height: number

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

  }
}
