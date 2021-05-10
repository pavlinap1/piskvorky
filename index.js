'use strict';

let naTahu = 'circle';

const zmenaZnaku = document.querySelector('.zmena');

const nyniHraje = (event) => {
  if (naTahu === 'circle') {
    event.target.classList.add('board__field--circle');
    event.target.disabled = true;
    zmenaZnaku.src = 'Obrazky/cross.svg';
    naTahu = 'cross';
    if (isWinningMove(event.target)) {
      const conf = confirm('Vyhrává kolečko.');
      if (conf) {
        location.reload();
      }
    }
  } else {
    event.target.classList.add('board__field--cross');
    event.target.disabled = true;
    zmenaZnaku.src = 'Obrazky/circle.svg';
    naTahu = 'circle';
    if (isWinningMove(event.target)) {
      const conf = confirm('Vyhrává křížek.');
      if (conf) {
        location.reload();
      }
    }
  }
};

let btnElm = document.querySelectorAll('.tlacitkoVPoli');

for (let i = 0; i < btnElm.length; i++) {
  btnElm[i].addEventListener('click', nyniHraje);
}

//Úkol 5

const getSymbol = (field) => {
  // Název třídy přizpůsob tvému kódu.
  if (field.classList.contains('board__field--cross')) {
    return 'cross';
  } else if (field.classList.contains('board__field--circle')) {
    return 'circle';
  } else {
    return 'undefined';
  }
};

const boardSize = 10; // 10x10
const fields = document.querySelectorAll('.tlacitkoVPoli'); // Selektor pozměň tak, aby odpovídal tvému kódu.

const getField = (row, column) => fields[row * boardSize + column];

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;
  let a;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }
  return false;
};
