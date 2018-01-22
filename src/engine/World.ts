import UI from './UI/UI'
import Entity from './Entity'
import System from './System'
import EntityEditor from './EntityEditor'
import EntityManager from './EntityManager'
import TagManager from './TagManager'
import ComponentManager from './ComponentManager'
import Component, { Components } from './Component'
import EventEmitter from './utils/EventEmitter'

export default class World {
  private systems: System[] = [];
  private UIs: UI[] = [];
  private entityManager: EntityManager = new EntityManager(this);
  private componentManager: ComponentManager = new ComponentManager(this);
  private tagManager: TagManager = new TagManager();
  public totalFrames: number = 0;
  public eventBus: EventEmitter = new EventEmitter();

  constructor(private ctx: CanvasRenderingContext2D) {

  }

  public addSystem(system: System): this {
    this.systems.push(system);
    system.bindWorld(this);
    return this;
  }

  public getSystems(): System[] {
    return this.systems;
  }

  public createEntity(): EntityEditor {
    return this.entityManager.create();
  }

  public getComponentManager(): ComponentManager {
    return this.componentManager;
  }

  public getComponent<T extends Component>(ComponentClass: new(arg?, arg2?) => T, entity: Entity): T {
    return this.componentManager.getComponent(ComponentClass, entity)
  }

  public getEntityManager(): EntityManager {
    return this.entityManager;
  }

  public getTagManager(): TagManager {
    return this.tagManager;
  }

  public process(delta?: number): void {
    this.totalFrames += 1
    this.eventBus.emit('processBegin');
    this.systems.forEach(system => {
      system.onBegin();
      this.entityManager.query(system.getAspect())
        .forEach(entity => system.process(entity, delta));
      system.onEnd();
    });
    this.UIs.forEach(ui => ui.render(this.ctx))
    this.eventBus.emit('processEnd');
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

  public clean() {
    this.UIs = []
    this.entityManager.clean()
    this.componentManager.clean()
    this.tagManager.clean()
  }
}
