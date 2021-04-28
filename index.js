'use strict';

let naTahu = 'circle';

const zmenaZnaku = document.querySelector('.hraje');
//změna znaku u HRAJE: nefunguje :(

const nyniHraje = (event) => {
  if (naTahu === 'circle') {
    event.target.classList.add('board__field--circle');
    zmenaZnaku.src = 'Obrazky/cross.svg';
    naTahu = 'cross';
  } else {
    event.target.classList.add('board__field--cross');
    zmenaZnaku.src = 'Obrazky/circle.svg';
    naTahu = 'circle';
  }
};

const btnElm = document.querySelectorAll('button');

for (let i = 0; i < btnElm.length; i++) {
  btnElm[i].addEventListener('click', nyniHraje);
}
