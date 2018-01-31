var mainButton    = document.querySelector('.main-button-guess');
var lastGuess     = document.querySelector('.main-p-number');
var lastText      = document.querySelector('.main-p-instruct');
var guessInput    = document.querySelector('.guess');
var randomNumber  = Math.floor(Math.random()*100)
var hintPar       = document.querySelector('.hint')
var clearButton   = document.querySelector('.clear')
var resetButton   = document.querySelector('.reset')
var hardButton    = document.querySelector('.hard-game')
var minimumInput  = document.querySelector('.minput')
var maximumInput  = document.querySelector('.maxput')

function increaseRandomRange(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
  increaseRandomRange(minimumInput, maximumInput);}

mainButton.addEventListener('click', function (event){ 
  event.preventDefault();
  lastGuess.innerText = guessInput.value;
  lastText.innerText ='Your last guess was';
  var guessInt = parseInt(guessInput.value);
  if (guessInt === randomNumber) {
    hintPar.innerText = 'That is correct! Play another game';
    resetButton.removeAttribute('disabled');
    guessInput.value = '';
    clearButton.setAttribute('disabled', '');
    hardButton.removeAttribute('hidden');
  } else if (guessInt < randomNumber) {
    hintPar.innerText = 'That is too low. Try again';
    guessInput.value = '';
    clearButton.setAttribute('disabled', '');
    guessInput.focus();
  } else if (guessInt > randomNumber) {
    hintPar.innerText = 'That is too high. Try again';
    guessInput.value = '';
    clearButton.setAttribute('disabled', '');
    guessInput.focus();
  } else { 
    hintPar.innerText = 'Guess a number';
    resetButton.setAttribute('disabled', '');
  }
  mainButton.setAttribute('disabled', '')
});

guessInput.addEventListener('keyup', function (event){
  var guessInt = parseInt(guessInput.value);
  if (guessInt >= 0 && guessInt <= 100) {
    mainButton.removeAttribute('disabled')
  } else {
    mainButton.setAttribute('disabled', '')
  } 
  if (guessInput.value.length > 0) {
    clearButton.removeAttribute('disabled')
  } else {
    clearButton.setAttribute('disabled', '')
}    
});
 
clearButton.addEventListener('click', function (event){
  event.preventDefault();
  guessInput.value = ''
  clearButton.setAttribute('disabled', '')
  guessInput.focus()  
  mainButton.setAttribute('disabled', ' ')
});

resetButton.addEventListener('click', function(event){
  event.preventDefault();
  resetButton.setAttribute('disabled','')
  clearButton.setAttribute('disabled','')
  mainButton.setAttribute('disabled','')
  lastText.innerText = 'Guess a number between 0 and 100'
  lastGuess.innerText = 'N/A'
  hintPar.innerText = "I'll say if it's too high or too low"
  randomNumber = Math.floor(Math.random()*100)
  guessInput.focus()
});



hardButton.addEventListener('click', function(event){
  event.preventDefault();
  resetButton.setAttribute('disabled', '')
  clearButton.setAttribute('disabled', '')



})
console.log(randomNumber)
