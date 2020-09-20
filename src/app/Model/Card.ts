import { ICard } from '../Interface/card'
class Card implements ICard {
  readonly id: number;
  path: string;
  node: HTMLElement;

  constructor(id: number, path: string, node: HTMLElement) {
    this.id = id
    this.path = path
    this.node = node
  }

  showImg(): void {
    this.node.style.backgroundImage = `url(${this.path})`
  }

  hideImg(): void {
    this.node.style.backgroundImage = ``
  }

  disableVisible(): void {
    this.node.style.visibility = 'hidden'
  }

}

export default Card;