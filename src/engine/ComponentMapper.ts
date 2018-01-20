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

  public remove(entity: Entity): T {
    const result = this.maps[entity]
    delete this.maps[entity]
    return result
  }

  public getEntityIds(): number[] {
    return Object.keys(this.maps).map(id => +id)
  }

  public clean(): void {
    this.maps = {}
  }
}
