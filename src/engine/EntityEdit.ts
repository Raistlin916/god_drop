import World from './World';
import Entity from './Entity';
import Component from './Component';

export default class EntityEdit {
  private entity: Entity;
  private world: World;

  constructor(entity: Entity, world: World) {
    this.entity = entity;
    this.world = world;
  }

  public add<T extends Component>(component: T): this {
    this.world
      .getComponentManager()
      .create(component, this.entity)
    return this;
  }

  public getEntity(): Entity {
    return this.entity
  }
}
