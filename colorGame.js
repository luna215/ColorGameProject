var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

/* Buttons */
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");


init();
resetButton.addEventListener("click", function(){
  reset();
});

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupSquares(){
  for(var i=0; i<squares.length; i++){
    var square = squares[i];
    square.style.background = colors[i];
    square.addEventListener("click", function(){
      var clickedColor = this.style.background;
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play again?";
        changeColors(clickedColor);
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try again";
      }

    });
  }
}

function setupModeButtons(){
  for(var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

      reset();
    });
  }
}

function reset(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for(var i=0; i<squares.length; i++){
    if (colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "steelblue";
  resetButton.textContent = "New colors";
  messageDisplay.textContent = "";
}

function changeColors(color){
  // Loop through all the squares
  for(var i=0; i<squares.length; i++){
    squares[i].style.background = color;
  }
  h1.style.background = color;
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
  var arr = [];

  for(var i=0; i<num; i++){
    arr.push(randomColor());
  }

  return arr;
}

function randomColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);

  return "rgb(" + red + ", " + green + ", " + blue + ")";

}
