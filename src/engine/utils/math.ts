export default {
  getRandomInt: (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min,
  getRandom: (min: number, max: number): number =>
    Math.random() * (max - min + 1) + min
}
