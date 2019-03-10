import Entity from './Entity';

export default class TagManager {
  private tags: object = {};

  addTag(tag: string, entity: Entity): void {
    if (!this.tags[tag]) {
      this.tags[tag] = [];
    }
    const group = this.tags[tag];
    if (group.indexOf(entity) === -1) {
      group.push(entity);
    }
  }

  remove(entity: Entity): void {
    Object.keys(this.tags).forEach(tag => {
      this.tags[tag] = this.tags[tag].filter(item => item !== entity);
    });
  }

  is(entity: Entity, tag: string): boolean {
    if (!this.tags[tag]) {
      return false
    }
    return this.tags[tag].indexOf(entity) > -1
  }

  getByTag(tag: string): Array<Entity> {
    return this.tags[tag] || [];
  }

  clean(): void {
    this.tags = {}
  }
}
