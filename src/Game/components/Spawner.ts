import Component from 'engine/Component'

interface SpawnerOption {
  minCooldown: number,
  maxCooldown: number,
  initialCooldown: number
}

export default class Spawner extends Component {
  public cooldown: number
  public minCooldown: number
  public maxCooldown: number
  constructor(public type: string, option: SpawnerOption) {
    super()
    this.minCooldown = option.minCooldown
    this.maxCooldown = option.maxCooldown
    this.cooldown = option.initialCooldown
  }
}
