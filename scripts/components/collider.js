// Component inheritance requirements
const Component = require('./component');
const Utils = require('../utils/utils');

const Transform = require('./transform');
const Rect = require('../utils/rect');

const Screen = require('../utils/screen');


function Collider () {
  this.rect = new Rect(0, 0, 0, 0);
}

Utils.inherits(Collider, Component);

Collider.prototype.initialize = function () {
  this.rect.left = this.actor.transform.position.x;
  this.rect.top = this.actor.transform.position.y;
};

Collider.prototype.outOfBounds = function () {
  let actorScreenPos = this.actor.transform.position.toScreenPos();

  let rect = new Rect(actorScreenPos.x, actorScreenPos.y, this.actor.col.width, this.actor.col.height);

  return Screen.rectOutOfBounds(rect);
};

Collider.prototype.isColliding = function(collider) {
  this.rect.left = this.actor.transform.position.x;
  this.rect.top = this.actor.transform.position.y;

  return this.rect.isColliding(collider.rect);
};

module.exports = Collider;
