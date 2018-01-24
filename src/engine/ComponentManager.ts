import Component from './Component'
import ComponentMapper from './ComponentMapper'
import Entity from './Entity'

type ComponentMappers = {[key: string]: ComponentMapper<any>}

export default class ComponentManager {
  private componentMappers: ComponentMappers = {};

  public create<T extends Component>(component: T, entity: Entity): void {
    let cm: ComponentMapper<T> = this.componentMappers[component.className]
    if (!cm) {
      cm = new ComponentMapper<T>()
      this.componentMappers[component.className] = cm
    }
    cm.add(component, entity)
  }

  public createMapper<T extends Component>(componentClass: new() => T): void {
    let cm: ComponentMapper<T> = this.componentMappers[componentClass.name];
    if (!cm) {
      this.componentMappers[componentClass.name] = new ComponentMapper<T>();
    }
  }

  public getComponent<T extends Component>(componentClass: new() => T, entity: Entity): T {
    return this.componentMappers[componentClass.name].get(entity)
  }

  public removeComponent<T extends Component>(componentClass: new () => T, entity: Entity): T {
    return this.componentMappers[componentClass.name].remove(entity)
  }

  public removeEntity(entity: Entity): void {
    Object.keys(this.componentMappers).forEach(key => {
      this.componentMappers[key].remove(entity);
    });
  }

  public getMappers(): ComponentMappers {
    return this.componentMappers
  }

  public clean(): void {
    Object.keys(this.componentMappers).forEach(key => {
      this.componentMappers[key].clean();
    });
  }
}
