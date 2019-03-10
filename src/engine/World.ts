import UI from './UI/UI'
import Entity from './Entity'
import System from './System'
import EntityEditor from './EntityEditor'
import EntityManager from './EntityManager'
import TagManager from './TagManager'
import ComponentManager from './ComponentManager'
import Component, { Components } from './Component'
import EventEmitter from './utils/EventEmitter'
import Scene from './Scene'

export type EntityBundle = { [key: string]: Entity }

export default class World {
  private scenes: Scene[];
  private sceneIndex: number;
  private systems: System[] = [];
  private UIs: UI[] = [];
  private entityBundle: EntityBundle = {};
  private entityManager: EntityManager = new EntityManager(this);
  private componentManager: ComponentManager = new ComponentManager();
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
    this.UIs.forEach(ui => {
      this.ctx.save()
      ui.render(this.ctx)
      this.ctx.restore()
    })
    this.eventBus.emit('processEnd');
  }

  public addUI(ui: UI): void {
    this.UIs.push(ui)
    ui.bind(this)
  }

  public removeUI(ui: UI): void {
    this.UIs = this.UIs.filter(u => u !== ui)
  }

  public importComponents(components: Components): void {
    for(let key in components) {
      this.componentManager.createMapper(components[key])
    }
  }

  public clean(): void {
    this.UIs = []
    this.entityManager.clean()
    this.componentManager.clean()
    this.tagManager.clean()
  }

  public loadScenes(scenesClass: [new (world) => Scene], bundle: EntityBundle): void {
    this.scenes = scenesClass.map(c => new c(this))
    this.entityBundle = bundle
  }

  public getCurrentScene(): Scene {
    return this.scenes[this.sceneIndex]
  }

  public startScene():void {
    this.sceneIndex = 0
    const scene = this.getCurrentScene()
    scene.init(this.entityBundle)
    scene.start()
  }

  public nextScene(): void {
    const current = this.scenes[this.sceneIndex]
    current.cleanEntities()
    current.pause()

    this.sceneIndex ++
    if (this.sceneIndex === this.scenes.length) {
      this.sceneIndex = 0
    }
    const scene = this.scenes[this.sceneIndex]
    scene.init(this.entityBundle)
    scene.start()
  }
}
