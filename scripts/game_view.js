/*
  The GameView class handles rendering of the game
  in a separate class to divide UI and game logic.
*/

const Actor = require('./actor.js');

// Grabs a reference to the canvas
function GameView(canvas) {
  this.canvas = canvas;
  this.ctx = canvas.getContext("2d");
}

// Draws the game every animation frame
GameView.prototype.render = function() {
  this.draw();
  requestAnimationFrame(this.render.bind(this));
};

// Starts the render loop
GameView.prototype.start = function () {
  requestAnimationFrame(this.render.bind(this));
};

// Draws every actor in the game
GameView.prototype.draw = function () {
  this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  Actor.all.forEach((actor) => { actor.render(this.ctx); });
};

module.exports = GameView;
