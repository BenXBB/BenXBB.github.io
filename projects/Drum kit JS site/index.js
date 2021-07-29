// Storing the 7 drums with a class of drum in a var
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// Loop that adds an event listener for clicking one of the drums
for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() { //function for clicking the drum

    var buttonInnerHTML = this.innerHTML; // Selecting the letter in the drum to parse fucntions

    makeSound(buttonInnerHTML); // Function for making drum sound

    buttonAnimation(buttonInnerHTML); // Function for button animation

  });

}

document.addEventListener("keypress", function(event) { // function for pressing the key assoicated to the drum

  makeSound(event.key); // Parsing to the function to make a sound

  buttonAnimation(event.key); // Parsing to the function to make the button click animation

});


function makeSound(key) { // Function to make the sound using a switch statement

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) { // Function for the button click animation

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed"); // Adding a class for the button click for 1 second

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
