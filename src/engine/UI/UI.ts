import World from '../World'

export default abstract class UI {
  private world: World;

  abstract render(ctx: CanvasRenderingContext2D): void;

  public bind(world: World): void {
    this.world = world
  }
  public destroy(): void {
    this.world.removeUI(this)
  }
}
