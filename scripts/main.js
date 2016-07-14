// Node jQuery
const $ = require('jquery');
const Input = require('./input');
const Game = require('./game');
const GameView = require('./game_view');

// Properties for the canvas
const Screen = require('./utils/screen');
const Color = require('./utils/color');
const Vector = require('./utils/vector');

// Actor Stuff
const Actor = require('./actor');
const PlayerController = require('./components/player_controller');
const Controller = require('./components/controller');
// const Transform = require('./components/transform');
// const Collider = require('./components/collider');

// Add key pressing listeners to the input object.
$('document').ready(function () {
  document.addEventListener("keydown", Input.keyDownHandler, false);

  document.addEventListener("keyup", Input.keyUpHandler, false);

  window.canvas.setAttribute("height", `${Screen.HEIGHT}`);
  window.canvas.setAttribute("width", `${Screen.WIDTH}`);

  window.player = new Actor(new Vector(0, 0), 1, Color.red);

  window.player.addComponent(PlayerController);

  window.player.spawn();

  window.gv = new GameView(window.canvas);

  window.gv.start();

  window.testVector = new Vector(Screen.WIDTH/2 - window.player.col.width/2, Screen.HEIGHT - window.player.col.height - 10);

  window.player.transform.setPosition(testVector.toWorldPos())
});
