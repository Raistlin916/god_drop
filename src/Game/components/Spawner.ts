import Component from 'engine/Component'

export default class Spawner extends Component {
  public type: string
  public cooldown: number
  public originCooldown: number
  constructor(type: string, cooldown: number) {
    super()
    this.originCooldown = cooldown
    this.type = type
    this.cooldown = 0
  }
}
