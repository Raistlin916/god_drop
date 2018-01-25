import World, { EntityBundle } from './World';
import Entity from './Entity';
import UI from './UI/UI';
import EntityEditor from './EntityEditor';

export default abstract class Scene {
  protected world: World
  private entities: Entity[] = []
  private UIs: UI[] = []
  private running: Boolean = false

  constructor(world: World) {
    this.world = world
    this.loop = this.loop.bind(this)
  }

  abstract init(entityBundle: EntityBundle): void

  public start(): void {
    this.running = true
    this.loop()
  }

  public pause(): void {
    this.running = false
  }

  public loop(): void {
    if (!this.running) {
      return
    }
    this.world.process()

    requestAnimationFrame(this.loop)
  }

  public createEntity(): EntityEditor {
    const entityEditor = this.world.createEntity()
    const entity = entityEditor.getEntity()
    if (this.entities.indexOf(entity) === -1) {
      this.entities.push(entity)
    }
    return entityEditor
  }

  public clean(): void {
    const manager = this.world.getEntityManager()
    this.entities.forEach(entity => manager.remove(entity))
    this.entities = []
    this.UIs.forEach(ui => this.world.removeUI(ui))
    this.UIs = []
  }

  public addUI(ui: UI): void {
    this.world.addUI(ui)
    if (this.UIs.indexOf(ui) === -1) {
      this.UIs.push(ui)
    }
  }
}
