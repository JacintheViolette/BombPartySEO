const GAME_STATE = {
    lastTime: Date.now() - 1,
    timer: [0, 19.99],
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
    
}

function update() {
    const currentTime = Date.now()
    const dt = (currentTime - GAME_STATE.lastTime) / 1000

    updateTimer(dt)
    updateBomb()

    GAME_STATE.lastTime = currentTime

    requestAnimationFrame(update)
}

function init() {
    timer()

    update()
}

init()