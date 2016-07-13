// Node jQuery
const $ = require('jquery');
const Input = require('./input');
const Game = require('./game');

// Properties for the canvas
const Screen = require('./utils/screen');
const Color = require('./utils/color');
const Vector = require('./utils/vector');

// Actor Stuff
const Actor = require('./actor');
// const Transform = require('./components/transform');
// const Collider = require('./components/collider');

// Add key pressing listeners to the input object.
$('document').ready(function () {
  document.addEventListener("keydown", Input.keyDownHandler, false);

  document.addEventListener("keyup", Input.keyUpHandler, false);

  window.canvas.setAttribute("height", `${Screen.HEIGHT}`);
  window.canvas.setAttribute("width", `${Screen.WIDTH}`);

  window.actor = new Actor(new Vector(0, 0), 1, Color.red);
  console.log(actor.transform);
});
