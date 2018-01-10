import UI from './UI/UI'
import Entity from './Entity'
import System from './System'
import EntityEdit from './EntityEdit'
import EntityManager from './EntityManager'
import TagManager from './TagManager'
import ComponentManager from './ComponentManager'
import Component, { Components } from './Component'

export default class World {
  private systems: System[] = [];
  private UIs: UI[] = [];
  private entityManager: EntityManager = new EntityManager(this);
  private componentManager: ComponentManager = new ComponentManager(this);
  private tagManager: TagManager = new TagManager();
  public frames: number = 0;

  public addSystem(system: System): this {
    this.systems.push(system);
    system.bindWorld(this);
    return this;
  }

  public getSystems(): System[] {
    return this.systems;
  }

  public createEntity(): EntityEdit {
    return this.entityManager.create();
  }

  public getComponentManager(): ComponentManager {
    return this.componentManager;
  }

  public getComponent<T extends Component>(ComponentClass: new() => T, entity: Entity): T {
    return this.componentManager.getComponent(ComponentClass, entity)
  }

  public getEntityManager(): EntityManager {
    return this.entityManager;
  }

  public getTagManager(): TagManager {
    return this.tagManager;
  }

  public process(delta?: number): void {
    this.frames += 1
    this.onProcessBegin();
    this.systems.forEach(system => {
      system.onBegin();
      this.entityManager.query(system.getAspect())
        .forEach(entity => system.process(entity, delta));
      system.onEnd();
    });
    this.UIs.forEach(ui => ui.doRender())
    this.onProcessEnd();
  }

  public onProcessBegin(): void {

  }

  public onProcessEnd(): void {

  }

  public addUI(ui: UI): void {
    this.UIs.push(ui)
    ui.bind(this)
  }

  public removeUI(ui: UI): void {
    this.UIs = this.UIs.filter(u => u !== ui)
  }

  public importComponents(components: Components) {
    for(let key in components) {
      this.componentManager.createMapper(components[key])
    }
  }
}
