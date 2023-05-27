function printHighscores() {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
  
    // sorts highscores by score property in descending order
    highscores.sort(function (a,b) {
      return b.score - a.score;
    });
  

    //for loop that prints a list item of each high score, to the length of the amount of high scores stored in local storage.
    for (var i = 0; i < highscores.length; i += 1) {
      // create li tag for each high score
      var liTag = document.createElement('li');
      // sets the text content in the new list item to be initials-(high score amount)
      liTag.textContent = highscores[i].initials + ' - ' + highscores[i].score;
  
      // display on page
      var olEl = document.getElementById('highscores');
      //appends the li tag to the end of the ordered list element
      olEl.appendChild(liTag);
    }
  }
  
  // function that removes the high scores and reloads the page
  function clearHighscores() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
  }
  
  // event listener that will run clearHighScores function when clicking the clear button
  document.getElementById('clear').onclick = clearHighscores;
  
  // run function when page loads
  printHighscores();
  