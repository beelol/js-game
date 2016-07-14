const Rect = require("../utils/rect");
const Color = require("../utils/color");
const Vector = require('../utils/vector');

function Controller () {
  this.rect = new Rect(0, 0, 0, 0);
  this.color = Color.red;
}

Controller.prototype.initialize = function () {
};

Controller.prototype.getMoveInput = function() {
  return new Vector(0, 0);
};

Controller.prototype.move = function () {
  this.actor.transform.translate(this.getMoveInput());
};


module.exports = Controller;
