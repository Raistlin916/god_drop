import UI from './UI'

interface TextOption {
  fillStyle: string,
  fontSize: number,
  fontFamily?: string,
  textAlign?: string,
  x: number,
  y: number
}

export default class Text extends UI {
  constructor(
    public text: string | number,
    public textOption: TextOption
  ) { super() }

  public render(ctx: CanvasRenderingContext2D): void {
    const { textOption, text } = this
    ctx.fillStyle = textOption.fillStyle
    if (textOption.fontFamily) {
      ctx.font = `${textOption.fontSize}px ${textOption.fontFamily}`
    } else {
      ctx.font = ctx.font.replace(/\d+px/, textOption.fontSize + 'px')
    }
    if (textOption.textAlign) {
      ctx.textAlign = textOption.textAlign
    }
    ctx.fillText(text + '', textOption.x, textOption.y)
  }
}
