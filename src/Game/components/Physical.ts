import Component from 'engine/Component'

export default class Physical extends Component {
  constructor(
    public vx: number = 0,
    public vy: number = 0
  ) {
    super()
  }
}
