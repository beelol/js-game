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
  console.log(this.actor);
};

Controller.prototype.getMoveInput = function() {
  return new Vector(0, 0);
};

Controller.prototype.rectOutOfBounds = function (rect) {
  // Usually you pass a new position to the rect with
  // some determined height and width of an actor
  // Then, if the new position is out of bounds, you can avoid
  // a new movement that would have happened with the added input.

  let rectBorderRight = rect.left + rect.width;
  let rectBorderLeft = rect.left - rect.width;

  let rectBorderTop = rect.top + rect.height;
  let rectBorderBottom = rect.top - rect.height;

  let outOfBoundsLeft = (rectBorderLeft < 0);
  let outOfBoundsRight = (rectBorderRight > Screen.WIDTH);
  let outOfBoundsTop = (rectBorderTop > Screen.HEIGHT);
  let outOfBoundsBottom = (rectBorderBottom < 0);

  return (outOfBoundsLeft ||
          outOfBoundsTop ||
          outOfBoundsRight ||
          outOfBoundsBottom);
};

Controller.prototype.move = function () {
  let input = this.getMoveInput();

  let actorScreenPos = this.actor.transform.position.toScreenPos();

  let rect = new Rect(actorScreenPos.x + input.x, actorScreenPos.y + input.y, this.actor.col.width, this.actor.col.height);

  if (this.rectOutOfBounds(rect))
      return;

  this.actor.transform.translate(input);
};


module.exports = Controller;
