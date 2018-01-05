import Component from 'engine/Component'

export default class Bound extends Component {
  public x1: number;
  public x2: number;
  public y1: number;
  public y2: number;

  constructor(...args: number[]) {
    super()
    if (args.length === 2) {
      this.x1 = 0;
      this.y1 = 0;
      this.x2 = args[0];
      this.y2 = args[1];
    } else if (args.length === 4) {
      this.x1 = args[0];
      this.y1 = args[1];
      this.x2 = args[2];
      this.y2 = args[3];
    } else {
      throw new Error('Bound: init error')
    }
  }

  centerX() {
    return (this.x1 + this.x2) / 2
  }

  centerY() {
    return (this.y1 + this.y2) / 2
  }

  width() {
    return this.x2 - this.x1
  }

  height() {
    return this.y2 - this.y1
  }
}
