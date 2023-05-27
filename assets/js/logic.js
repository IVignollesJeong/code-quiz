// variables to keep track of quiz state
var currentQuestionIndex = 0;
//time left value here
var time = 60;
var timerId;


// variable to store our questions

var questions = [
  {
    title: 'DOM stands for:',
    choices: ['Department of Motorvehicles', 'Document Oriented Management', 'Document Object Model', 'Div Object Manipulation'],
    answer: 'Document Object Model',
  },

  {
    title: 'JSON stands for:?',
    choices: ['JavaScript Overlay, New', 'JavaScript Object Notation', 'Java Saving Oriented Notation', 'Jump Script Operating Network'],
    answer: 'JavaScript Object Notation',
  },

  {
    title: 'String values must be enclosed within _____ when being assigned to variables.',
    choices: ['parentheses', 'quotes', 'curly brackets', 'element tags <>'],
    answer: 'quotes',
  },

  {
    title: 'Which operator evaluates if one OR the other expression is true?',
    choices: ['&&', '!==', '=+', '||'],
    answer: '||',
  },

  {
    title: 'what is the index of Apple in the following array? Apple, Banana, Pear, Strawberry',
    choices: ['1', 'Apple', '0', 'First'],
    answer: '0',
  },

  {
    title: 'How can we typically manipulate HTML by using JavaScript?',
    choices: ['Operators', 'Console.log', 'GitHub', 'JSON'],
    answer: 'JSON',
  },
];

// variables to reference DOM elements
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start');
var initialsEl = document.getElementById('initials');
var feedbackEl = document.getElementById('feedback');

var sfxRight = new Audio('assets/sfx/correct.wav');
var sfxWrong = new Audio('assets/sfx/incorrect.wav');


function startQuiz() {
  // hide start screen
  var startScreenEl = document.getElementById('start-screen');
  startScreenEl.setAttribute('class', 'hide');

  // un-hide questions section
  questionsEl.removeAttribute('class');

  // start timer
  timerId = setInterval(clockTick, 1000);

  // show starting time
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  // get current question object from array
  var currentQuestion = questions[currentQuestionIndex];

  // update title with current question
  var titleEl = document.getElementById('question-title');
  titleEl.textContent = currentQuestion.title; //think dot notation

  // clear out any old question choices
  choicesEl.innerHTML = '';

  // loop over choices
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    // create new button for each choice
    var choice = currentQuestion.choices[i];
    var choiceNode = document.createElement('button');
    choiceNode.setAttribute('class', 'choice');
    choiceNode.setAttribute('value', choice);

    choiceNode.textContent = i + 1 + '. ' + choice;

    // display on the page
    choicesEl.appendChild(choiceNode);
  }
}

function questionClick(event) {
  var buttonEl = event.target;

  // if the clicked element is not a choice button, do nothing.
  if (!buttonEl.matches('.choice')) {
    return;
  }

  // check if user guessed wrong
  if (buttonEl.value !== questions[currentQuestionIndex].answer) {
    // penalize time
    time -= 15;

    if (time < 0) {
      time = 0;
    }
    
    // display new time on page
    timerEl.textContent = time;


    // play wrong sfx
    sfxWrong.play();


    //flash wrong feedback
    feedbackEl.textContent = 'Wrong! :(';
  } else {


    // play right sfx
    sfxRight.play();


    //flash right feedback
    feedbackEl.textContent = 'Correct, WOO!';
  }

  //flash feedback for a second
  feedbackEl.setAttribute('class', 'feedback');
  setTimeout(() => {
    feedbackEl.setAttribute('class', 'feedback hide');
  }, 1000);
  

 // move to next question
  currentQuestionIndex++;
  
  // check if we've run out of questions or if time ran out?
  if (time <= 0 || currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  // stop timer
 clearInterval(timerId);
  // show end screen
  var endScreenEl = document.getElementById('end-screen');
  endScreenEl.removeAttribute('class');

  // show final score
  var finalScoreEl = document.getElementById('final-score');
  finalScoreEl.textContent = time;

  // hide questions section
  questionsEl.setAttribute('class', 'hide');
}

function clockTick() {
  // update time
  // decrement the variable we are using to track time
  time--;
  timerEl.textContent = time; // update out time

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  // get value of input box
  var initials = initialsEl.value.trim();

  // make sure value wasn't empty
  if (initials !== '') {

    // get saved scores from localstorage, or if not any, set to empty array
    
    var highscores =
      JSON.parse(window.localStorage.getItem('highscores')) /* what would go inside the PARSE??*/ || [];

    // format new score object for current user
    var newScore = {
      score: time,
      initials: initials,
    };

    // save to localstorage
    highscores.push(newScore);
    window.localStorage.setItem('highscores', JSON.stringify(highscores));

    // redirect to next page
    window.location.href = 'highscores.html';
  }
}

function checkForEnter(event) {
  // "13" represents the enter key
  if (event.key === 'Enter') {
    saveHighscore();
  }
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

// user clicks on element containing choices
choicesEl.onclick = questionClick;

// submits the initials form upon releasing enter (essentially hitting the enter key normally)
initialsEl.onkeyup = checkForEnter;
