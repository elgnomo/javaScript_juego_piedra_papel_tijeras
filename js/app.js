"use strict"
const IMGPLAYERCHOICE = document.getElementById('playerChoice');
const IMGCOMPUTERCHOICE = document.getElementById('computerChoice');

const PRESULT = document.getElementById('result');
const PSCORE = document.getElementById('score');

const BUTTONS = document.querySelectorAll('button');
const CHOICES = ['piedra', 'papel', 'tijeras'];
console.log("BUTTONS :", BUTTONS);

BUTTONS.forEach(
    button => button.addEventListener('click', starGame)
);

function starGame(event) {
    //determinar la eleccion del jugdor
    //console.log(event.target); //propiedad target
    const BUTTON = event.currentTarget;
    const PLAYERCHOICE = BUTTON.dataset.choice;
    console.log(PLAYERCHOICE);
    //console.log(event.currentTarget);

    //determinar la eleccion de la computadora
    const COMPUTERCHOICE = getComputerChoice();
    console.log(COMPUTERCHOICE)

    //determinar quien gana
    const WINNER = getWinner(PLAYERCHOICE, COMPUTERCHOICE);
    console.log(`El ganador es ${WINNER}`);

    //mostrar resultados
    if (WINNER == 'player') {

    } else if (WINNER == 'computer') {

    } else {

    }
}
//forEach argumento una funcion

function getComputerChoice() {
    //obtener un valor aleatorio i (0, 1, 2)
    const I = parseInt(Math.random() * 3);
    //vamos a devolver la eleccion de la computadora
    return CHOICES[I];
    return I;
}

function getWinner(PLAYERCHOICE, COMPUTERCHOICE) {
    if (PLAYERCHOICE === COMPUTERCHOICE) {
        return null;
    }

    if (PLAYERCHOICE == 'piedra') {
        if (COMPUTERCHOICE == 'papel') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (PLAYERCHOICE == 'papel') {
        if (COMPUTERCHOICE == 'piedra') {
            return 'player';
        } else {
            return 'computer';
        }
    } else { //cuando no se ni piedra ni papel
        if (COMPUTERCHOICE == 'papel') {
            return 'player';
        } else {
            return 'computer';
        }
    }
}