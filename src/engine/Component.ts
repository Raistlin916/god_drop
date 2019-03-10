export default abstract class Component {
  public get className(): string {
    return this.constructor.name
  }
}

type Components = {[key: string]: new(...args) => Component}
export {
  Components
}
