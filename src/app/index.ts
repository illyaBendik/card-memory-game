import Game from './Model/Game'
import Counter from './Model/Counter'
const game = new Game()
const counter = new Counter()

const init = () => {
  game.start()
  counter.init()
  const cards = document.querySelectorAll('.list__item')
  if (cards) {
    cards.forEach(card => {
      card.addEventListener('click', function (e) {
        const target = e.target as HTMLTextAreaElement;
        const card = game.findCard(+target.getAttribute('name')!)
        game.setSelectedCard(card)
        if (game.getCountSelectedCard() == 2) {
          card.showImg()
          setTimeout(() => {
            game.action()
            game.clearSelectedCard()
            if (game.isFinishGame()) {
              alert(counter.getTime())
              counter.clearTimer()
              init()
            }
          }, 500);
        } else {
          card.showImg()
        }
      })
    })
  }
}
init()
