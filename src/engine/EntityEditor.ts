import World from './World';
import Entity from './Entity';
import Component from './Component';

export default class EntityEditor {
  private entity: Entity;
  private world: World;

  constructor(entity: Entity, world: World) {
    this.entity = entity;
    this.world = world;
  }

  public add<T extends Component>(component: T): this {
    this.world
      .getComponentManager()
      .create(component, this.entity);
    return this;
  }

  public removeComponent<T extends Component>(componentClass: new () => T): this {
    this.world
      .getComponentManager()
      .removeComponent(componentClass, this.entity)
    return this;
  }

  public getEntity(): Entity {
    return this.entity;
  }

  public setComponent<T extends Component>(
    componentClass: new (arg?, arg2?) => T, data
  ): this {
    const component: Component = this.world.getComponentManager()
        .getComponent(componentClass, this.entity)

    Object.assign(component, data)
    return this;
  }
}
