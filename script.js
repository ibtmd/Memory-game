document.addEventListener('DOMContentLoaded', () => {
    // Card options
    const cardArray = [
      { name: 'fries', img: 'images/fries.jpg' },
      { name: 'cheeseburger', img: 'images/cheeseburger.jpg' },
      { name: 'ice-cream', img: 'images/ice-cream.jpg' },
      { name: 'pizza', img: 'images/pizza.jpg' },
      { name: 'milkshake', img: 'images/milkshake.jpg' },
      { name: 'hotdog', img: 'images/hotdog.jpg' },
      { name: 'fries', img: 'images/fries.jpg' },
      { name: 'cheeseburger', img: 'images/cheeseburger.jpg' },
      { name: 'ice-cream', img: 'images/ice-cream.jpg' },
      { name: 'pizza', img: 'images/pizza.jpg' },
      { name: 'milkshake', img: 'images/milkshake.jpg' },
      { name: 'hotdog', img: 'images/hotdog.jpg' }
    ];
    
  
    // Randomize cards
    cardArray.sort(() => 0.5 - Math.random());
  
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
  
    // Create board
    function createBoard() {
      cardArray.forEach((item, i) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        const cardImage = document.createElement('img');
        cardImage.setAttribute('src', item.img);
        card.appendChild(cardImage);
        grid.appendChild(card);
      });
    }
  
    // Check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('.card');
      const [optionOneId, optionTwoId] = cardsChosenId;
  
      if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
      } else {
        cards[optionOneId].classList.remove('flipped');
        cards[optionTwoId].classList.remove('flipped');
        alert('Sorry, try again!');
      }
  
      cardsChosen = [];
      cardsChosenId = [];
  
      if (cardsWon.length === cardArray.length / 2) {
        alert('Congratulations! You found all matches!');
      }
    }
  
    // Flip card
    function flipCard() {
      const cardId = this.getAttribute('data-id');
      cardsChosen.push(cardArray[cardId].name);
      cardsChosenId.push(cardId);
      this.classList.add('flipped');
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
      }
    }
  
    createBoard();
  });
  