var inputGuess = document.querySelector('.input-guess');
var guessBtn = document.querySelector('#guess-btn');
var clearBtn = document.querySelector('#clear-btn');
var userInstruct = document.querySelector('.user-instruct');
var twentyFive = document.querySelector('.twenty-five');
var userFeedback = document.querySelector('.user-feedback');
var resetBtn = document.querySelector('.reset-btn');


inputGuess.addEventListener('keyup', enableButtons);
guessBtn.addEventListener('click', submitUserGuess);
clearBtn.addEventListener('click', clearUserGuess);
resetBtn.addEventListener('click', resetUserGuess);


