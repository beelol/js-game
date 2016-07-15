const Utils = require('../utils/utils');

const Bullet = require('../bullet');

const Rect = require("../utils/rect");
const Color = require("../utils/color");
const Vector = require('../utils/vector');
const Controller = require('./controller');
const Input = require('../input');

const BUTTONS = {
  "left": 37,
  "right": 39,
  "space": 32
};

const speed = 20;

function PlayerController () {
  this.rect = new Rect(0, 0, 0, 0);
  this.color = Color.red;
}

Utils.inherits(PlayerController, Controller);

PlayerController.prototype.initialize = function () {
  Input.addKeyDownListener(BUTTONS["space"], this.fire.bind(this))
};

PlayerController.prototype.fire = function () {
  let position = new Vector(this.actor.transform.position.x, this.actor.transform.position.y + 10);

  let b = new Bullet(position, this.team, Color.white, new Vector(0, 1));

  console.log(b);

  b.spawn();
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
