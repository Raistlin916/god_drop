import Component from 'engine/Component'

export default class Position extends Component {
  public x: number = 0
  public y: number = 0

  constructor(x: number, y: number) {
    super()
    this.x = x
    this.y = y
  }
}
