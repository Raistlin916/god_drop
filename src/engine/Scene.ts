import World, { EntityBundle } from 'engine/World'
import Component, { Components } from 'engine/Component'
import Entity from 'engine/Entity';
import EntityEditor from 'engine/EntityEditor';

export default abstract class Scene {
  protected world: World
  private entities: Entity[] = []
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
    this.bindEntity(
      entityEditor.getEntity()
    )
    return entityEditor
  }

  public cleanEntities(): void {
    const manager = this.world.getEntityManager()
    this.entities.forEach(entity => manager.remove(entity))
  }

  public bindEntity(entity: Entity): void {
    if (this.entities.indexOf(entity) === -1) {
      this.entities.push(entity)
    }
  }
}
