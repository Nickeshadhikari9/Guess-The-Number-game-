
let random = Math.ceil(Math.random() * 100)
const submit = document.querySelector('#submit')
let guessvalue = document.querySelector('#guessnum')
const guesses = document.querySelector('.guesses')
const remainguesses = document.querySelector('.remainguesses')
const loworhi = document.querySelector('.loworhi')
const resultplace = document.querySelector('.resultplace')
const p = document.createElement('p');
let Previousguess = []
let numguess = 1
let playgame = true
if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        guessnum = parseInt(guessvalue.value)
        //console.log(guessnum)
        validateguess(guessnum)
    })
}
function validateguess(guessnum) {
    if (guessnum < 0 || guessnum === '' || isNaN(guessnum)||guessnum>100) {
        alert('Please enter a valid num')
    }
    else {
        Previousguess.push(guessnum)
        if (numguess > 10) {
            displaymessage(`Game over!! Number was ${random}`)
            endgame()
        }
        else {
            displayguess(guessnum)
            checkguess(guessnum)
        }
    }
}
function checkguess(guessnum) {
    if (random === guessnum) {
        displaymessage('Your guess is correct')
    }
    else if (guessnum > random) {
        displaymessage("Your guess is higher.")
    }
    else if (guessnum < random) {
        displaymessage("Your guess is lower.")
    }
}
function displaymessage(message) {
    loworhi.innerHTML = `<h5>${message}</h5>`
}
function displayguess(guessnum) {
    guessnum.value = ''
    guesses.innerHTML += `${guessnum},`
    numguess++;
    remainguesses.innerHTML = `${11 - numguess}`
}
function endgame(){
    guessvalue.value=''
    guessvalue.setAttribute('disabled','')
    submit.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">New Game</h2>`
    resultplace.appendChild(p)
    playgame=false;
    newgame()
}
function newgame(){
    const newgame=document.querySelector('#newGame')
    newgame.addEventListener('click',function(e){
      random=Math.ceil(Math.random() * 100)
      Previousguess=[]
      numguess=1
      guesses.innerHTML=''
      remainguesses.innerHTML = `${11 - numguess}`
      submit.removeAttribute('disabled')
      guessvalue.removeAttribute('disabled')
      resultplace.removeChild(p)
      playgame=true
    })
}