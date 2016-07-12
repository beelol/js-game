const Input = require('./input.js');

const $ = require('jquery');

// Add key pressing listeners to the input object.
$('document').ready(function(){
  document.addEventListener("keydown", Input.keyDownHandler, false);

  document.addEventListener("keyup", Input.keyUpHandler, false);
});
