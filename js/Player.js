export default class Player {
  constructor() {
    const img = new Image()
    img.src = 'imgs/god.png'
    this.img = img
    img.onload = () => {
      this.scale = img.height / img.width
      this.width = 100
      this.height = this.scale * this.width
    }
  }
  render(ctx) {
    const { img, height, width } = this
    ctx.drawImage(img, 0, 0, img.width, img.height,
      width, canvas.height - height - 10,
      width, height)
  }
}
