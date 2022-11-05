const arrPCNumbers = [];
const arrUserNumbers = [];
const arrTotalNumbers = [];
let score = 0;
const eleOk = document.querySelector('okok')
let i = 0

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function updateCountdown() {
  
    countdown.innerHTML = `${time}`
    
    if (time === 0) {
        clearInterval(clock)
        countdown.classList.remove('timer')
        countdown.classList.add('hidden')
    } else {
        time--
    }
}

function hidden() {

    function error() {
        eleInput.classList.remove('error')
    
    }

    screenNumberContainer.classList.remove('container')
    screenNumberContainer.classList.add('hidden')
    const eleInput = document.createElement('input')
    eleInput.setAttribute('type', 'number')
    eleInput.classList.add('text')
    document.body.append(eleInput)
    const eleButton = document.createElement('button')
    eleButton.classList.add('btn')
    eleButton.innerHTML = 'ENTER'
    document.body.append(eleButton)

    eleButton.addEventListener ('click', function() {

        if (eleInput.value == '' || eleInput.value <= 0) {
            eleInput.classList.add('error')
            setTimeout(error, 500)
            arrTotalNumbers.pop(eleInput.value)
            eleInput.value = ''
        }

        if (arrPCNumbers.includes(parseInt(eleInput.value)) && !arrUserNumbers.includes(parseInt(eleInput.value))) {
            arrTotalNumbers.push(eleInput.value)
            arrUserNumbers.push(parseInt(eleInput.value))
            score++
            eleInput.value = ''    
        } else {
            arrTotalNumbers.push(eleInput.value)
            eleInput.value = '' 
        }

        if (arrTotalNumbers.length == 5) {

            const eleResultContainer = document.createElement('div')
            eleResultContainer.classList.add('container')
            document.body.append(eleResultContainer)

            for (i = 0; i < arrUserNumbers.length; i++) {
            const eleResult = document.createElement('div')
            eleResult.classList.add('result')
            eleResult.classList.add('container')
            eleResultContainer.append(eleResult)
            eleResult.innerHTML = arrUserNumbers[i];
            }

            eleButton.classList.remove('btn')
            eleButton.classList.add('hidden')
            eleInput.classList.add('hidden')
            const eleScore = document.createElement('div');
            eleScore.classList.add('score')
            eleScore.innerHTML = `hai totalizzato ${score} punti`
            document.body.append(eleScore)  
        }
    })
}

let randomNumber

for (let i = 0; i < 5; i++) {

    do {
        randomNumber = getRandomInteger(1, 99);
    } while (arrPCNumbers.includes(randomNumber))
    arrPCNumbers.push(randomNumber);
}

const screenNumberContainer = document.createElement('div')
screenNumberContainer.classList.add('container')
document.body.append(screenNumberContainer)

for (i = 0; i < 5; i++) {

    const screenNumber = document.createElement('div')
    screenNumber.style.fontSize = '5rem'
    screenNumberContainer.append(screenNumber)
    screenNumber.innerHTML = arrPCNumbers[i]
    }

    const countdown = document.createElement('div')
    countdown.innerHTML = '30'
    countdown.classList.add('timer')
    document.body.append(countdown)
    let time = 29
    const clock = setInterval(updateCountdown, 1000)
    
setTimeout (hidden, 30000)