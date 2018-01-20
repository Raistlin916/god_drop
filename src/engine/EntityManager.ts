import World from 'engine/World'
import Entity from './Entity'
import EntityEditor from './EntityEditor'
import Aspect from './Aspect'

export default class EntityManager {
  private nextId: number = 0;
  private world: World;
  private entities: Entity[] = [];

  constructor(world: World) {
    this.world = world
  }

  create(): EntityEditor {
    const entity = this.nextId ++;
    this.entities.push(entity);
    return new EntityEditor(entity, this.world);
  }

  clean(): void {
    this.entities = []
  }

  remove(entity: Entity): void {
    const index = this.entities.indexOf(entity)
    if (index > -1) {
      this.entities.splice(index, 1)
      this.world.getTagManager().remove(entity)
      this.world.getComponentManager().removeEntity(entity)
    }
  }

  public query(aspect: Aspect): Entity[] {
    const allTypes = aspect.getAllTypes();
    const cm = this.world.getComponentManager();
    return this.entities.filter((entity: Entity) => {
      const flag = allTypes.every(klass => {
        const componentMapper = cm.getMappers()[klass.name]
        return componentMapper.get(entity)
      })
      return flag
    })
  }
}
