/* eslint-disable radix */
export default function game() {
  const boardSize = 16;

  const randomizer = () => Math.floor(1 + Math.random() * (boardSize - 1));
  const getHole = (index) => document.getElementById(index);

  document.addEventListener('DOMContentLoaded', () => {
    const random = randomizer();
    getHole(random).classList.add('hole__has-mole');
  });

  const moleMove = () => {
    let random = randomizer();
    const current = document.querySelector('.hole__has-mole');
    const currentIndex = current.id;
    if (random === parseInt(currentIndex)) {
      random = randomizer();
    }
    current.classList.remove('hole__has-mole');
    getHole(random).classList.add('hole__has-mole');
  };

  setInterval(() => {
    moleMove();
  }, 400);
}
