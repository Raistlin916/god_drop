import Component from 'engine/Component'

export interface ImageRenderOptions {
  sx: number;
  sy: number;
  sw: number;
  sh: number;
}

export interface RectRenderOptions {
  color: string;
}

type RenderOptions = ImageRenderOptions | RectRenderOptions

export default class Paint extends Component {
  public img: HTMLImageElement;
  public type: string;
  public animation: string;
  public animationCount: number = 0;
  public animationDuration: number = 60;
  public state: string;

  constructor(src: string, public renderOptions?: RenderOptions) {
    super()
    if (src === 'rect') {
      this.type = 'rect'
      return
    }
    this.type = 'image'
    this.img = new Image()
    this.img.src = src
  }
}
