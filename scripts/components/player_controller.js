const Utils = require('../utils/utils');

const Rect = require("../utils/rect");
const Color = require("../utils/color");
const Vector = require('../utils/vector');
const Controller = require('./controller');
const Input = require('../input');

const BUTTONS = {
  "left": 37,
  "right": 39
};

const speed = 20;

function PlayerController () {
  this.rect = new Rect(0, 0, 0, 0);
  this.color = Color.red;
}

Utils.inherits(PlayerController, Controller);

PlayerController.prototype.initialize = function () {
};

PlayerController.prototype.getMoveInput = function() {
  let left = Input.getKey(BUTTONS["left"]);

  if (left) {
    if (left > 0) {
      return new Vector(-Input.getKey(BUTTONS["left"]) * speed, 0);
    }
  }

  let right = Input.getKey(BUTTONS["right"]);

  if (right) {
    if (right > 0) {
      return new Vector(Input.getKey(BUTTONS["right"]) * speed, 0);
    }
  }

  return new Vector(0, 0);
};

module.exports = PlayerController;
