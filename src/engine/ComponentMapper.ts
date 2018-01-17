import Entity from './Entity'
import Component from './Component'

export default class ComponentMapper<T extends Component> {
  private maps: {[key: string]: T} = {};

  public get(entity: Entity): T {
    return this.maps[entity]
  }

  public add(component: T, entity: Entity): void {
    this.maps[entity] = component
  }

  public remove(entity: Entity) {
    delete this.maps[entity]
  }

  public getEntityIds(): number[] {
    return Object.keys(this.maps).map(id => +id)
  }

  public clean(): void {
    this.maps = {}
  }
}
