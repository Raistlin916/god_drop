import Entity from './Entity';

export default class TeamManager {
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

  getTeam(teamName: string): Array<Entity> {
    return this.teams[teamName];
  }
}
