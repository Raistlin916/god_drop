import Component from './Component'

type ComponentList = (new(...args) => Component)[]

export default class Aspect {

  private allTypes: ComponentList = [];

  constructor(...components: ComponentList) {
    this.allTypes = this.allTypes.concat(components)
  }

  public static all(...components: ComponentList): Aspect {
    return new Aspect(...components)
  }

  public getAllTypes(): ComponentList {
    return this.allTypes
  }
}
