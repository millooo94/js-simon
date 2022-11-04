let randomNumber;
const arrPCNumbers = [];
const arrUserNumbers = [];
const arrTotalNumbers = [];
let score;

const body = document.querySelector('body')

console.log(arrPCNumbers)

for (let i = 0; i < 5; i++) {

    do {
        randomNumber = getRandomInteger(1, 100);
    } while (arrPCNumbers.includes(randomNumber))
    arrPCNumbers.push(randomNumber);
}

const numberView = document.createElement('div')
numberView.innerHTML = arrPCNumbers
body.append(numberView)

setTimeout (hidden, 3000)

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function hidden() {

    numberView.classList.add('hidden')
    const eleInput = document.createElement('input')
    body.append(eleInput)
    const eleButton = document.createElement('button')
    eleButton.innerHTML = 'ENTER'
    body.append(eleButton)
    
    eleButton.addEventListener ('click', function() {

        score = 0

        arrTotalNumbers.push(eleInput.value)

        // console.log('total', arrTotalNumbers)

        if (arrPCNumbers.includes(parseInt(eleInput.value)) && arrUserNumbers.length < 5) {
            arrUserNumbers.push(eleInput.value)
            score++
            // console.log('match', arrUserNumbers)
        }

        eleInput.value = '' 

        if (arrTotalNumbers.length == 5) {

            const eleResult = document.createElement('div')
            eleResult.innerHTML = arrUserNumbers
            body.append(eleResult)
            const eleScore = document.createElement('div');
            eleScore.innerHTML = score
            body.append(eleScore)
            
        }



    })



    







}