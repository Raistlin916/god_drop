import Component from 'engine/Component'

interface Position {
  x: number,
  y: number
}

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

  centerX(): number {
    return (this.x1 + this.x2) / 2
  }

  centerY(): number {
    return (this.y1 + this.y2) / 2
  }

  width(): number {
    return this.x2 - this.x1
  }

  height(): number {
    return this.y2 - this.y1
  }

  isIn(position: Position, targetPosition: Position): boolean {
    return targetPosition.x >= this.x1 + position.x &&
      targetPosition.x <= this.x1 + this.x2 + position.x &&
      targetPosition.y >= this.y1 + position.y &&
      targetPosition.y <= this.y1 + this.y2 + position.y
  }
}
