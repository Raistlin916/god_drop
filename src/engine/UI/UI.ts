import World from '../World'

export default abstract class UI {
  private world: World;

  constructor(public ctx: CanvasRenderingContext2D) {}

  abstract render(ctx: CanvasRenderingContext2D): void;

  public doRender() {
    this.ctx.save()
    this.render(this.ctx)
    this.ctx.restore()
  }
  public bind(world: World): void {
    this.world = world
  }
  public destroy(): void {
    this.world.removeUI(this)
  }
}
