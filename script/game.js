import { QUESTION } from './question.js'

const GAME_STATE = {
    lastTime: Date.now() - 1,
    timer: [0, 19.99],
    currentInput: "",
    check: false,
    questionPicked: [],
    questions: QUESTION,
}

function timer() {
    const elem = document.getElementById('timer')
    elem.innerHTML = `${GAME_STATE.timer[0]}:${Math.trunc(GAME_STATE.timer[1])}`
}

function updateTimer(dt) {
    const second = GAME_STATE.timer[1] - dt
    GAME_STATE.timer[1] = second
    const minute = GAME_STATE.timer[0]
    GAME_STATE.timer[0] = minute
    const trunc = Math.trunc(second)
    const timer = document.getElementById('timer')

    if (second <= 0 && GAME_STATE.timer[0] == 0) {
        GAME_STATE.timer[0] = 0
        GAME_STATE.timer[1] = 0
    } else if (second < 0) {
        GAME_STATE.timer[1] = 60
        GAME_STATE.timer[0] = GAME_STATE.timer[0] - 1
        if (GAME_STATE.timer[0] < 0) {
            pause = false
            document.getElementById('timer').innerHTML = '0:00'
        }
    }
    if (second < 10) {
        timer.innerHTML = `${GAME_STATE.timer[0]}:0${trunc}`
    } else {
        timer.innerHTML = `${GAME_STATE.timer[0]}:${trunc}`
    }

    //console.log(GAME_STATE.timer)
}

function updateBomb() {
    var bomb = document.getElementById('bomb')
    if (GAME_STATE.timer[1] == 0) {
        bomb.src = '../assets/Bombes/5_bombe.png'
    } else if (GAME_STATE.timer[1] > 16) {
        bomb.src = '../assets/Bombes/1_bombe.png'
    } else if (GAME_STATE.timer[1] > 12) {
        bomb.src = '../assets/Bombes/2_bombe.png'
    } else if (GAME_STATE.timer[1] > 8) {
        bomb.src = '../assets/Bombes/3_bombe.png'
    } else if (GAME_STATE.timer[1] > 4) {
        bomb.src = '../assets/Bombes/4_bombe.png'
    }
}

function checkIfInIsCorrect(currentInput, reponse) {
    /*
    console.log(reponse.toUpperCase())
    console.log(currentInput.toUpperCase())
    */

    if (currentInput.toUpperCase() == reponse.toUpperCase()) {
        GAME_STATE.check = true
    }
}

function pickRandomNumber() {
    const randomNumber = Math.floor(Math.random() * question);
    console.log(randomNumber);
}

function pickAnotherQuestion() {
    
}

function update() {
    const currentTime = Date.now()
    const dt = (currentTime - GAME_STATE.lastTime) / 1000

    if (GAME_STATE.timer[1] != 0) {
        updateTimer(dt)
    }

    checkIfInIsCorrect(GAME_STATE.currentInput, ""/* Vrai réponse à la question */)

    if (GAME_STATE.check) {
        pickAnotherQuestion()
    }

    //console.log(GAME_STATE.questions[0][1])

    updateBomb()

    /*  */

    GAME_STATE.lastTime = currentTime

    requestAnimationFrame(update)
}

function init() {
    timer()

    update()
}

init()


// Fonction pour la boite à Question

const boutonRepondre = document.getElementById("bouton-repondre");
const reponse = document.getElementById("reponse");
const reponseUtilisateur = document.getElementById("reponse-utilisateur");

boutonRepondre.addEventListener('click', (e) => {
    reponse.value = ""
})

reponse.addEventListener('input', updateValue);

function updateValue(e) {
    GAME_STATE.currentInput = e.target.value
    reponseUtilisateur.textContent = e.target.value;
}

function toggleDiv() {
  const monDiv = document.getElementById("mon-div");
  if (monDiv.style.display === "none") {
    monDiv.style.display = "block";
  } else {
    monDiv.style.display = "none";
  }
}

// Fin de la Fonction 