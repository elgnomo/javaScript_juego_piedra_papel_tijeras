"use strict"
const IMGPLAYERCHOICE = document.getElementById('playerChoice');
const IMGCOMPUTERCHOICE = document.getElementById('computerChoice');

const PRESULT = document.getElementById('result');
const PSCORE = document.getElementById('score');

const BUTTONS = document.querySelectorAll('button');
const CHOICES = ['piedra', 'papel', 'tijeras'];
const FILENAMES = {
    'piedra': 'assets/rock.png',
    'papel': 'assets/paper.png',
    'tijeras': 'assets/scissors.png',
};

console.log("BUTTONS :", BUTTONS);

let positiveScore = 0;
let negativeScore = 0;

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
    IMGPLAYERCHOICE.setAttribute('src', FILENAMES[
        PLAYERCHOICE]);

    IMGCOMPUTERCHOICE.setAttribute('src', FILENAMES[
        COMPUTERCHOICE]);

    let resultado;
    if (WINNER === 'player') {
        resultado = 'ganas';
        ++positiveScore; // positiveScore = positiveScore +1;
        // positiveScore += 1;
    } else if (WINNER === 'computer') {
        resultado = 'pierdes';
        ++negativeScore;
    } else { // empate
        resultado = 'empatas';
    }

    PRESULT.innerHTML = `Tú ${resultado} escogiendo <strong> ${PLAYERCHOICE} </strong> en contra de <strong> ${COMPUTERCHOICE} </strong>.`;

    PSCORE.innerHTML = `Has ganado ${positiveScore} veces. Has perdido ${negativeScore} veces.`;
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