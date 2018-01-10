import UI from './UI'

interface TextOption {
  fillStyle: string,
  fontSize: number,
  x: number,
  y: number
}

export default class Text extends UI {
  constructor(
    public ctx: CanvasRenderingContext2D,
    public text: string | number,
    public textOption: TextOption
  ) { super(ctx) }

  public render(ctx: CanvasRenderingContext2D): void {
    const { textOption, text } = this
    ctx.fillStyle = textOption.fillStyle
    ctx.font = ctx.font.replace(/\d+px/, textOption.fontSize + 'px')
    ctx.fillText(text + '', textOption.x, textOption.y)
  }
}