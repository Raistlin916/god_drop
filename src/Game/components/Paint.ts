import Component from 'engine/Component'

interface ImageRenderOptions {
  sx: number;
  sy: number;
  sw: number;
  sh: number;
}

interface RectRenderOptions {
  color: string;
}

interface PaintOption {
  opacity: number;
}

type RenderOptions = ImageRenderOptions | RectRenderOptions

export default class Paint extends Component {
  public img: HTMLImageElement;
  public type: string;
  public animation: string;
  public animationCount: number = 0;
  public animationDuration: number = 60;
  public state: string;
  public opacity: number = 1;

  constructor(src: string, public renderOptions?: RenderOptions, public paintOption?: PaintOption) {
    super()
    Object.assign(this, paintOption)
    if (src === 'rect') {
      this.type = 'rect'
      return
    }
    this.type = 'image'
    this.img = new Image()
    this.img.src = src
  }
}
