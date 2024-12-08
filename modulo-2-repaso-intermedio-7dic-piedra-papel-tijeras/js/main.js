'use strict';

// SECCIÓN DE LOS QUERY-SELECTOR

const playBtn = document.querySelector('.js_playBtn');
const userOptionSelect = document.querySelector('.js_userOptionSelect');
const resultDiv = document.querySelector('.js_result');
const counterWinParagraph = document.querySelector('.js_counter_win');
const counterLostParagraph = document.querySelector('.js_counter_lost');
const winnerParagraph = document.querySelector('.js_winnerParagraph');
const reloadBtn = document.querySelector('.js_reloadBtn');


// SECCIÓN DE LOS DATOS DE APLICACIÓN

let playerWinsCounter = 0;
let playerLosesCounter = 0;


// SECCIÓN DE FUNCIONES

/**
 * Genera un número aleatorio entre 1 y el valor que el indiquemos
 * 
 * @param {*} max Número máximo que queremos que genere
 * @returns Un número entre 1 y el valor que le hayamos indicado
 */

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}



const genComputerMove = () => {
  // Generar un número random

  const randomNumber = getRandomNumber(9);
  console.log(randomNumber);

  // Registrar lo que la computadora ha generado
  let computerMove = '';

  if (randomNumber >= 1 && randomNumber <= 3) {
    computerMove = 'piedra';
  }
  else if (randomNumber >= 4 && randomNumber <= 6) {
    computerMove = 'papel';
  }
  else if (randomNumber >= 7 && randomNumber <= 9) {
    computerMove = 'tijera';
  }

  return computerMove;
};



const handleClickButton = (ev) => {
  ev.preventDefault();

  const computerMove = genComputerMove();

  console.log(computerMove);

  // Registrar lo que la usuaria haya escogido

  const userMove = userOptionSelect.value;

  console.log(userMove);

  const result = compareMoves(userMove, computerMove);

  resultDiv.innerHTML = result;

  if (playerWinsCounter === 10) {

    winnerParagraph.innerHTML = '¡Ha ganado la jugadora!';
    playBtn.classList.add('hidden');
    reloadBtn.classList.remove('hidden');
  }

  else if (playerLosesCounter === 10) {

    winnerParagraph.innerHTML = '¡Ha ganado la computadora!';
    playBtn.classList.add('hidden');
    reloadBtn.classList.remove('hidden');
  }

};


const compareMoves = (userMove, computerMove) => {


  // Comparar la jugada de la computadora y la jugada de la usuaria

  // Decir quién ha ganado o si han empatado

  if(userMove === 'select') {

    const result = 'Recuerda seleccionar una jugada';

    return result;
  }
  
  if (userMove === computerMove) {
    // ¡EMPATE!

    const result = 'Has empatado';

    return result;
  }

  else if ((userMove === 'tijera' && computerMove === 'papel') ||
    (userMove === 'papel' && computerMove === 'piedra') ||
    (userMove === 'piedra' && computerMove === 'tijera')) {
    // Usuaria gana

    const result = 'Has ganado';

    playerWinsCounter += 1;

    counterWinParagraph.innerHTML = 'Jugadora: ' + playerWinsCounter;

    return result;
  }

  else {
    // Computadora gana

    const result = 'Has perdido';

    playerLosesCounter += 1;

    counterLostParagraph.innerHTML = 'Computadora: ' + playerLosesCounter;

    return result;
  }
}



// SECCIÓN DE EVENTOS

playBtn.addEventListener('click', handleClickButton);
reloadBtn.addEventListener('click', (ev) => {
  ev.preventDefault();

  playBtn.classList.remove('hidden');
  reloadBtn.classList.add('hidden');

  playerWinsCounter = 0;
  playerLosesCounter = 0;

  counterWinParagraph.innerHTML = 'Jugadora: ' + playerWinsCounter;
  counterLostParagraph.innerHTML = 'Computadora: ' + playerLosesCounter;
  winnerParagraph.innerHTML = '';
  resultDiv.innerHTML = '¡Vamos a jugar!';

}
)

// CÓDIGO QUE SE EJECUTA AL CARGAR LA PÁGINA

counterWinParagraph.innerHTML = 'Jugadora: 0';
counterLostParagraph.innerHTML = 'Computadora: 0';