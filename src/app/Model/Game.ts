import { ICard } from '../Interface/card'
import Card from './Card';
export default class Game {
  protected listCards: ICard[];
  protected idSelectedCards: ICard[];
  protected indexImg: number;
  protected countCards: number;
  protected countDisabledVisible: number;

  constructor() {
    this.listCards = [];
    this.idSelectedCards = [];
    this.indexImg = 1;
    this.countCards = 48;
    this.countDisabledVisible = 0
  }

  start() {
    this.createCards()
    this.shuffle(this.listCards)
    this.renderCard()
  }

  private createCards() {
    for (let i = 1; i <= this.countCards; i++) {
      const node = document.createElement('div');
      node.className = `list__item`
      const id = Math.floor(Math.random() * (Math.floor(1000) - Math.ceil(1))) + Math.ceil(1)
      const path = `./assets/images/icons/${this.indexImg}.svg`
      const card = new Card(id, path, node)
      node.setAttribute('name', `${card.id}`)
      this.listCards.push(card)
      this.updateIndexImg()
    }
  }

  updateIndexImg(): void {
    if (this.indexImg == 24) {
      this.indexImg = 1
    }
    this.indexImg++
  }

  private shuffle(arr: ICard[]) {
    let j, temp;
    for (let i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }

  private renderCard() {
    const nodeList = document.querySelector('.list')
    if (nodeList) {
      this.listCards.forEach(card => {
        nodeList.appendChild(card.node);
      });
    }
  }

  findCard(id: number): ICard {
    const card = this.listCards.find(card => card.id == id)
    return card!
  }

  setSelectedCard(card: ICard): void {
    if (!this.idSelectedCards.includes(card)) {
      this.idSelectedCards.push(card)
    }
  }

  clearSelectedCard(): void {
    for (let i = 0; i < this.idSelectedCards.length; i++) {
      this.idSelectedCards[i].hideImg()
    }
    this.idSelectedCards = this.idSelectedCards.slice(2, this.idSelectedCards.length)
  }

  getCountSelectedCard(): number {
    return this.idSelectedCards.length
  }

  action(): void {
    const [cardFirst, cardSecond] = this.idSelectedCards
    // if (cardFirst.path == cardSecond.path) {
      cardFirst.disableVisible()
      cardSecond.disableVisible()
      this.updateCountDisableVisibleCards()
    // } else {
    //   cardFirst.hideImg()
    //   cardSecond.hideImg()
    // }
  }

  updateCountDisableVisibleCards() {
    this.countDisabledVisible += 2
  }

  isFinishGame() {
    return this.countDisabledVisible === this.countCards
  }
}