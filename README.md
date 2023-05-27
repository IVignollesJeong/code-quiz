# JavaScript Code Quiz

## Description

This project called for the creation of a JavaScript coding quiz. The quiz would be interactive, complete with a timer, game parameters, and a working highscore leaderboard. The requirements for this coding quiz app were as follows: 

- Upon starting the quiz by clicking the "start" button, the timer on the top right of the page begins and the first question is presented.
- When the questions are answered, the user is then presented with another question.
- Upon answering a question incorrectly, time is subtracted from the timer as a penalty.
- When all questions are answered or the timer hits "0", the game is over.
- Upon completing the game, the user can save their initials and score. The user's score can then be seen in the View Highscores page along with other locally stored highscores.

## Installation

N/A, the webpage can be reached through the URL found inside the "Usage" section.

Source code for the portfolio page can be found here: [Code Quiz HTML](https://github.com/IVignollesJeong/code-quiz/blob/master/index.html) // [Highscores HTML](https://github.com/IVignollesJeong/code-quiz/blob/master/highscores.html) // [Assets: JavaScript (logic.js/scores.js) + CSS](https://github.com/IVignollesJeong/code-quiz/tree/master/assets).

## Usage

![CodeQuiz](https://github.com/IVignollesJeong/code-quiz/assets/131202032/5304d4fc-881a-42de-8e1a-e7e61cc21414)


[Code Quiz]()

The application functions as follows:

- User is presented with brief introduction on the quiz along with information on the question style that will be presented.
- By clicking "start", a 60-second timer will begin and the user will be presented with the first of 6 questions.
- Upon answering the question, the user will be presented with the following question. Incorrect answers will proceed to the following question while also penalizing time remaining.
- If the user answers all questions, the game ends. If the user runs out of time, the game will end as well.
- Scoring will be based off the time remaining.
- Once the game ends, the user will be prompted to add their initials. The initials will be parsed with the score and added to the highscores page.
- The highscores page will store local scores. If the user chooses to, they may clear the highscores page by clicking "clear".
## Credits

[w3schools JSON.parse help](https://www.w3schools.com/js/js_json_parse.asp) </br>
[w3schools JavaScript timer/interval help](https://www.w3schools.com/js/js_timing.asp) </br>
[MP4 to GIF converter](https://cloudconvert.com/mp4-to-gif) </br>
Starter code - OSU Bootcamp Slack

## License

MIT License

Copyright (c) [2023] [Ian Vignolles-Jeong]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
