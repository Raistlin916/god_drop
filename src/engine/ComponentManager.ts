import World from './World'
import Component from './Component'
import ComponentMapper from './ComponentMapper'
import Entity from './Entity'

type ComponentMappers = {[key: string]: ComponentMapper<any>}

export default class ComponentManager {
  private world: World;
  private componentMappers: ComponentMappers = {};

  constructor(world: World) {
    this.world = world
  }

  public create<T extends Component>(component: T, entity: Entity): void {
    let cm: ComponentMapper<T> = this.componentMappers[component.className]
    if (!cm) {
      cm = new ComponentMapper<T>()
      this.componentMappers[component.constructor.name] = cm
    }
    cm.add(component, entity)
  }

  public createMapper<T extends Component>(componentClass: new() => Component): void {
    let cm: ComponentMapper<T> = this.componentMappers[componentClass.name];
    if (!cm) {
      this.componentMappers[componentClass.name] = new ComponentMapper<T>();
    }
  }

  public remove(entity: Entity): void {
    Object.keys(this.componentMappers).forEach(key => {
      this.componentMappers[key].remove(entity);
    });
  }

  public getMappers(): ComponentMappers {
    return this.componentMappers
  }
}
