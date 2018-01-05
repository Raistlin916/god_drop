import Entity from './Entity';
import Aspect from './Aspect';
import World from './World';
import EntityManager from './EntityManager';
import ComponentManager from './ComponentManager';
import TeamManager from './TeamManager';

const lowerFirstLetter = (string: string): string => {
  return string.charAt(0).toLowerCase() + string.slice(1);
}

export default abstract class System {
  private entities: Entity[];
  protected world: World;
  protected aspect: Aspect;
  protected entityManager: EntityManager;
  protected teamManager: TeamManager;

  constructor(aspect: Aspect) {
    this.aspect = aspect;
  }

  public insert(entity: Entity): void {
    this.entities.push(entity);
  }

  public remove(entity: Entity): boolean {
    return this.entities.some((item: Entity, index: number) => {
      if (item === entity) {
        this.entities.splice(index, 1);
        return true;
      }
    })
  }

  public getEntities(): Entity[] {
    return this.entities;
  }

  public getAspect(): Aspect {
    return this.aspect;
  }

  abstract process(entity: Entity, delta: number): void;

  public bindWorld(world: World): void {
    const cm: ComponentManager = world.getComponentManager();
    const componentMappers = cm.getMappers();
    Object.keys(componentMappers).forEach(key => {
      this[`${key.toLowerCase()}Mapper`] = componentMappers[key]
    });
    const systems: System[] = world.getSystems()
    systems.forEach(system => {
      system[lowerFirstLetter(this.constructor.name)] = this;
      this[lowerFirstLetter(system.constructor.name)] = system;
    });

    this.entityManager = world.getEntityManager();
    this.teamManager = world.getTeamManager();
    this.world = world;
  }

  public onBegin(): void{

  }

  public onEnd(): void{

  }
}
