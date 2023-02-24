import { QUESTION } from './question.js'

const GAME_STATE = {
    lastTime: Date.now() - 1,
    timer: [0, 19.99],
    currentInput: "",
    checkIfQuestionPicked: false,
    questionPicked: [],
    questions: QUESTION,
    dead: false,
    currentQuestion: {},
    currentRound: 20,
    currentDifficulty: 1,
    win: false,
    vie: 3,
    bruit: "../assets/sound/bomb-sound-effect..mp3",
    explication: false,
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
    var tempCurrent = currentInput.toUpperCase()
    var tempRep = reponse.toUpperCase()
    console.log(tempCurrent)
    console.log(tempRep)
    if (currentInput.toUpperCase() == reponse.toUpperCase()) {
        return true
    }
}

function checkIfQuestionWasAlreadyPicked(nbr, arr) {
    for (i in arr) {
        if (nbr == i) {
            return true
        }
    }
    return false
}

function pickRandomNum() {
    return Math.floor(Math.random() * 55) + 1
}

function pickAnotherQuestion(nbr) {
    var temp
    if (!checkIfQuestionWasAlreadyPicked(nbr, GAME_STATE.questionPicked)) {
        var question = document.getElementById("question")
        var text = GAME_STATE.questions[0][nbr]["question"]

        GAME_STATE.currentQuestion = {
            "question": text,
            "difficulté": GAME_STATE.questions[0][nbr]["dificulté"],
            "réponse": GAME_STATE.questions[0][nbr]["réponse"],
            "explication": GAME_STATE.questions[0][nbr]["explication"],
        }
        question.textContent = text
        temp = GAME_STATE.questions[0][nbr]["réponse"]
        GAME_STATE.currentDifficulty = GAME_STATE.questions[0][nbr]["dificulté"]
    }
    return temp
}

function indice(str) {
    let result = '';
    let accentRegex = /[àáâãäåçèéêëìíîïñòóôõöøùúûüýÿ]/gi;
    let specialCharRegex = /[\-\_\+\!\@\#\$\%\^\&\*\(\)\{\}\[\]\:\;\<\>\?\,\.\/\|\~\`\'\"]/gi;
    let letterCount = 0;
    let spaceCount = 0;

    //if (str.length())
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        result += ' ';
        spaceCount++;
      } else if (accentRegex.test(str[i]) || specialCharRegex.test(str[i])) {
        result += str[i];
      } else {
        letterCount++;
        if (Math.random() <= 0.6) {
          result += '_';
        } else {
          result += str[i];
        }
      }
    }
    
    // Insert spaces at the end of the string
    for (let i = 0; i < spaceCount; i++) {
      result += ' ';
    }
    
    return result;
}
  
  

function updateDifficulté() {
    var diff = document.getElementById("dif")
    diff.src = "../assets/Icones difficulté/Difficult‚ " + GAME_STATE.currentDifficulty.toString() + ".png"
} 

function updateRound() {
    var round = document.getElementById("num")
    round.src = "../assets/chiffres comics/" + GAME_STATE.currentRound.toString() + "_comic.png"
}

function checkLives() {
    var vie = GAME_STATE.vie

    var vie1 = document.getElementById("vie1")
    var vie2 = document.getElementById("vie2")
    var vie3 = document.getElementById("vie3")

    if (vie == 3) {
        vie1.src = "../assets/Vie.png"
        vie2.src = "../assets/Vie.png"
        vie3.src = "../assets/Vie.png"
    } else if (vie == 2) {
        vie1.src = "../assets/Vie.png"
        vie2.src = "../assets/Vie.png"
        vie3.src = "../assets/Vie perdue.png"
    } else if (vie == 1) {
        vie1.src = "../assets/Vie.png"
        vie2.src = "../assets/Vie perdue.png"
        vie3.src = "../assets/Vie perdue.png"
    } else {
        vie1.src = "../assets/Vie perdue.png"
        vie2.src = "../assets/Vie perdue.png"
        vie3.src = "../assets/Vie perdue.png"
    }
}


function update() {
    var currentIdx
    const currentTime = Date.now()
    const dt = (currentTime - GAME_STATE.lastTime) / 1000

    if (GAME_STATE.currentRound >= 21 && !GAME_STATE.win) {
        GAME_STATE.win = true
        document.getElementById("question-box").style.display = "none"
        document.getElementById("victoire").style.display = "block"
    }

    if (GAME_STATE.explication) {
        console.log("explication")
    }

    if (!GAME_STATE.explication) {
        if (!GAME_STATE.win && !GAME_STATE.dead) {
            if (GAME_STATE.timer[1] != 0 && !GAME_STATE.win && !GAME_STATE.dead) {
                updateTimer(dt)
                updateBomb()
                updateDifficulté()
                updateRound()
            }
        
            if (GAME_STATE.checkIfQuestionPicked == false && GAME_STATE.dead == false) {
                if (currentIdx != undefined) {
                    GAME_STATE.questionPicked.push(currentIdx)
                }
                currentIdx = pickRandomNum()
                if (!checkIfQuestionWasAlreadyPicked(currentIdx, GAME_STATE.questionPicked)) {
                    var text = pickAnotherQuestion(currentIdx)
                    GAME_STATE.checkIfQuestionPicked = true
                    const reponseUtilisateur = document.getElementById("reponse-utilisateur");
                    reponseUtilisateur.textContent = indice(text);
                }
            }
        
            //console.log(GAME_STATE.dead)
        
            if (checkIfInIsCorrect(GAME_STATE.currentInput, GAME_STATE.currentQuestion.réponse)) {
                GAME_STATE.checkIfQuestionPicked = !GAME_STATE.checkIfQuestionPicked
                const reponse = document.getElementById("reponse");
                reponse.value = ""
                GAME_STATE.timer[1] = 19.99
                GAME_STATE.currentRound++
            }
            if (GAME_STATE.timer[1] <= 0) {
                GAME_STATE.dead == true
            }
            
            if (GAME_STATE.timer[1] <= 0) {
                currentIdx = pickRandomNum()
                GAME_STATE.vie--
                checkLives()
                GAME_STATE.timer[1] = 19.99
                var text = pickAnotherQuestion(currentIdx)
                GAME_STATE.checkIfQuestionPicked = true
                const reponseUtilisateur = document.getElementById("reponse-utilisateur");
                reponseUtilisateur.textContent = indice(text);

                if (GAME_STATE.vie > 0) {
                    document.getElementById("question-box").style.display = "none"
                    document.getElementById("reponse-box").style.display = "block"
                    document.getElementById("explication").textContent = GAME_STATE.currentQuestion["explication"]
                }

                GAME_STATE.explication = true
            }
            if (GAME_STATE.vie == 0) {
                document.getElementById("question-box").style.display = "none"
                document.getElementById("death-box").style.display = "block"
                document.getElementById("bomb").style.display = "none"
                document.getElementById("death").style.display = "block"
                document.getElementById("raison").textContent = GAME_STATE.currentQuestion["explication"]
                GAME_STATE.dead = true
            }
        }
    }
    
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
const next = document.getElementById("next");
const endButton = document.getElementById("mort-bouton");

boutonRepondre.addEventListener('click', (e) => {
    reponse.value = ""
})

reponse.addEventListener('input', updateValue);

function updateValue(e) {
    GAME_STATE.currentInput = e.target.value
    reponseUtilisateur.textContent = e.target.value;
}

next.addEventListener('click', finExplication)

endButton.addEventListener('click', boutonFin)

function finExplication() {
    console.log("omggggg")
    GAME_STATE.explication = false
    document.getElementById("reponse-box").style.display = "none"
    document.getElementById("question-box").style.display = "block"
    //document.getElementById("explication").textContent = GAME_STATE.currentQuestion["explication"]
}

function boutonFin() {
    window.location.href = "/menu";
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