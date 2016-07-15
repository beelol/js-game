// Component inheritance requirements
const Component = require('./component');
const Utils = require('../utils/utils');

// Check for out of bounds
const Screen = require('../utils/screen');

const Rect = require("../utils/rect");
const Color = require("../utils/color");
const Vector = require('../utils/vector');

function Controller () {
  this.rect = new Rect(0, 0, 0, 0);
  this.color = Color.red;
}

Utils.inherits(Controller, Component);

Controller.prototype.initialize = function () {
};

Controller.prototype.getMoveInput = function() {
  return new Vector(0, 0);
};

Controller.prototype.isValidInput = function(input) {
  return !this.inputOutOfBounds(input);
};

Controller.prototype.inputOutOfBounds = function (input) {
  let actorScreenPos = this.actor.transform.position.toScreenPos();

  let rect = new Rect(actorScreenPos.x + input.x, actorScreenPos.y + input.y, this.actor.col.width, this.actor.col.height);

  return Screen.rectOutOfBounds(rect);
};

Controller.prototype.move = function () {
  let input = this.getMoveInput();

  if (!this.isValidInput(input)) return;

  this.actor.transform.translate(input);
};


module.exports = Controller;
