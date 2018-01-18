import Component from 'engine/Component'

interface ImageRenderOptions {
  sx: number;
  sy: number;
  sw: number;
  sh: number;
}

export default class Paint extends Component {
  public img: HTMLImageElement;
  public imageRenderOptions: ImageRenderOptions;
  public animation: string;
  public animationCount: number = 0;

  constructor(src: string, imageRenderOptions?: ImageRenderOptions) {
    super()
    this.img = new Image()
    this.img.src = src
    this.imageRenderOptions = imageRenderOptions
  }
}
