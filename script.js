var mainButton    = document.querySelector('.main-button-guess');
var lastGuess     = document.querySelector('.main-p-number');
var lastText      = document.querySelector('.main-p-instruct');
var guessInput    = document.querySelector('.guess');
// var randomNumber  = Math.floor(Math.random()*100)
var hintPar       = document.querySelector('.hint');
var clearButton   = document.querySelector('.clear');
var resetButton   = document.querySelector('.reset');
var minimumInput  = 0;
var maximumInput  = 100;
var newMinimumInput = document.querySelector('.minput');
var newMaximumInput = document.querySelector('.maxput');
var submitButton  = document.querySelector('.hard-game')
var hiddenDiv = document.querySelector('.min-max-div')

function randomInput(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
var randomNumber = randomInput(minimumInput, maximumInput);

mainButton.addEventListener('click', function (event) { 
  event.preventDefault();
  lastGuess.innerText = guessInput.value;
  lastText.innerText ='Your last guess was';
  var guessInt = parseInt(guessInput.value);
  if (guessInt === randomNumber) {
    hintPar.innerText = 'That is correct! Play another game';
    resetButton.removeAttribute('disabled');
    guessInput.value = '';
    clearButton.setAttribute('disabled', '');
    hiddenDiv.removeAttribute('hidden')
    // increaseRandomRange(minimumInput, maximumInput);
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

guessInput.addEventListener('keyup', function () {
  var guessInt = parseInt(guessInput.value);
  if (guessInt >= minimumInput && guessInt <= maximumInput) {
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
 
clearButton.addEventListener('click', function (event) {
  event.preventDefault();
  guessInput.value = ''
  clearButton.setAttribute('disabled', '')
  guessInput.focus()  
  mainButton.setAttribute('disabled', ' ')
});

resetButton.addEventListener('click', function(event) {
  event.preventDefault();
  resetButton.setAttribute('disabled','')
  clearButton.setAttribute('disabled','')
  mainButton.setAttribute('disabled','')
  lastText.innerText = 'Guess a number between 0 and 100'
  lastGuess.innerText = 'N/A'
  hintPar.innerText = "I'll say if it's too high or too low"
  randomNumber = Math.floor(Math.random()*100)
  guessInput.focus()
  newMinimumInput.value = ''
  newMaximumInput.value = ''
});

submitButton.addEventListener('click', function(evemt) {
  event.preventDefault();
  maximumInput = parseInt(newMaximumInput.value)
  minimumInput = parseInt(newMinimumInput.value)  
  randomNumber = randomInput (minimumInput, maximumInput)
  console.log(randomNumber);
  guessInput.focus()
  submitButton.setAttribute('disabled', '')
});



newMaximumInput.addEventListener('keyup', function (){
 if (newMaximumInput.value > 0 && newMinimumInput.value > 0) {
  submitButton.removeAttribute('disabled')
 } else { 
  submitButton.setAttribute('disabled', '')
 }
 if (parseInt(newMinimumInput.value) > parseInt(newMaximumInput.value)) {
  submitButton.setAttribute('disabled', '')
 }
});

newMinimumInput.addEventListener('keyup', function () {
  if (newMaximumInput.value > 0 && newMinimumInput.value > 0) {
  submitButton.removeAttribute('disabled')
 } else { 
  submitButton.setAttribute('disabled', '')
}
if (parseInt(newMinimumInput.value) > parseInt(newMaximumInput.value)) {
  submitButton.setAttribute('disabled', '')
 }
});

console.log(randomNumber)


