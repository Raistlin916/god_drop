import Component from 'engine/Component'

export default class Spawner extends Component {
  public cooldown: number
  public originCooldown: number
  constructor(public type: string, cooldown: number) {
    super()
    this.originCooldown = cooldown
    this.cooldown = 0
  }
}
