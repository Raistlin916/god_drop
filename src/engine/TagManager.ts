import Entity from './Entity';

export default class TagManager {
  private teams: object = {};

  addTeam(teamName: string, entity: Entity): void {
    if (!this.teams[teamName]) {
      this.teams[teamName] = [];
    }
    const team = this.teams[teamName];
    if (team.indexOf(entity) === -1) {
      team.push(entity);
    }
  }

  remove(entity: Entity) {
    Object.keys(this.teams).forEach(teamName => {
      this.teams[teamName] = this.teams[teamName].filter(item => item !== entity);
    });
  }

  getTeam(teamName: string): Array<Entity> {
    return this.teams[teamName];
  }
}
