let randomNumber;
const arrPCNumbers = [];
const arrUserNumbers = [];
const arrTotalNumbers = [];
let score = 0;
const body = document.querySelector('body')
console.log(arrPCNumbers)


for (let i = 0; i < 5; i++) {

    do {
        randomNumber = getRandomInteger(1, 100);
    } while (arrPCNumbers.includes(randomNumber))
    arrPCNumbers.push(randomNumber);
}


const numberViewContainer = document.createElement('div')

numberViewContainer.classList.add('container')

body.append(numberViewContainer)

for (i = 0; i < 5; i++) {

const numberView = document.createElement('div')

numberView.style.marginRight = '3rem'
numberView.style.fontSize = '5rem'

numberViewContainer.append(numberView)

numberView.innerHTML = arrPCNumbers[i]

}



setTimeout (hidden, 3000)

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function hidden() {
    numberViewContainer.classList.remove('container')
    numberViewContainer.classList.add('hidden')
    const eleInput = document.createElement('input')
    eleInput.setAttribute('type', 'number')
    eleInput.classList.add('text')
    body.append(eleInput)
    const eleButton = document.createElement('button')
    eleButton.classList.add('btn')
    eleButton.innerHTML = 'ENTER'
    body.append(eleButton)
    
    eleButton.addEventListener ('click', function() {
        
        arrTotalNumbers.push(eleInput.value)
      
        if (arrPCNumbers.includes(parseInt(eleInput.value)) && !arrUserNumbers.includes(parseInt(eleInput.value))) {
            arrUserNumbers.push(parseInt(eleInput.value))
            score++
            
        }

        eleInput.value = '' 

        if (arrTotalNumbers.length == 5) {

            const eleResultContainer = document.createElement('div')
            eleResultContainer.classList.add('container')
            body.append(eleResultContainer)

            for (i = 0; i < arrUserNumbers.length; i++) {
            const eleResult = document.createElement('div')
            eleResult.style.fontSize = '5rem'
            eleResult.style.marginRight = '3rem'
            eleResultContainer.append(eleResult)
            eleResult.innerHTML = arrUserNumbers[i];
            }

            eleButton.classList.remove('btn')
            eleButton.classList.add('hidden')
            eleInput.classList.add('hidden')
            
            const eleScore = document.createElement('div');
            eleScore.innerHTML = `hai totalizzato ${score} punti`
            eleScore.style.fontSize = '2.5rem'
            eleScore.style.marginTop = '3rem'
            body.append(eleScore)  
        }
    })
}