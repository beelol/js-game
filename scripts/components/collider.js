const Transform = require('./transform');
const Rect = require('../utils/rect');

function Collider () {
  this.rect = new Rect(0, 0, 0, 0);
}

Collider.prototype.initialize = function () {
  this.rect.left = this.actor.transform.position.x;
  this.rect.top = this.actor.transform.position.y;
};

Collider.prototype.isColliding = function(collider) {
  this.rect.left = this.actor.transform.position.x;
  this.rect.top = this.actor.transform.position.y;

  return rect.isColliding(collider.rect);
};

module.exports = Collider;
