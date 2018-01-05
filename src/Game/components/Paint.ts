import Component from 'engine/Component'

export default class Paint extends Component {
  public img: HTMLImageElement;
  constructor(src: string) {
    super()
    this.img = new Image()
    this.img.src = src
  }
}
