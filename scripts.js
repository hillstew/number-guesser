var inputGuess = document.querySelector('.input-guess');
var guessBtn = document.querySelector('#guess-btn');
var clearBtn = document.querySelector('#clear-btn');
var userInstruct = document.querySelector('.user-instruct');
var twentyFive = document.querySelector('.twenty-five');
var userFeedback = document.querySelector('.user-feedback');
var resetBtn = document.querySelector('.reset-btn');
var generateNum = Math.floor((Math.random() * 100) + 1);


// inputGuess.addEventListener('keyup', enableButtons);
// clearBtn.addEventListener('click', clearUserGuess);
// resetBtn.addEventListener('click', resetUserGuess);


guessBtn.addEventListener('click', submitUserGuess);



function submitUserGuess(e) {
  e.preventDefault()
  var parsedGuess = parseInt(inputGuess.value)
  twentyFive.innerHTML = parsedGuess
   console.log(parsedGuess)
}

console.log(generateNum);






