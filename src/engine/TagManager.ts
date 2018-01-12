import Entity from './Entity';

export default class TagManager {
  private tags: object = {};

  addTeam(tag: string, entity: Entity): void {
    if (!this.tags[tag]) {
      this.tags[tag] = [];
    }
    const team = this.tags[tag];
    if (team.indexOf(entity) === -1) {
      team.push(entity);
    }
  }

  remove(entity: Entity): void {
    Object.keys(this.tags).forEach(tag => {
      this.tags[tag] = this.tags[tag].filter(item => item !== entity);
    });
  }

  is(entity: Entity, tag: string): boolean {
    return this.tags[tag].indexOf(entity) > -1
  }

  getTeam(tag: string): Array<Entity> {
    return this.tags[tag] || [];
  }
}
