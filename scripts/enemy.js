// Inheritance requirements
const Utils = require('./utils/utils');
const Screen = require('./utils/screen');
const Actor = require('./actor');
const Rect = require('./utils/rect');

const Transform = require('./components/transform.js');
const Renderer = require('./components/renderer.js');
const Vector = require('./utils/vector');

function Enemy(pos, team, color) {
  Actor.call(this, pos, team, color);
  //
  // let left = Math.random() * (Screen.WIDTH) - 50;
  // let top = -50;
  //
  // let rect = new Rect(left, top, 50, 50);
  //
  // console.log(new Vector(left, top).toWorldPos());
  //
  // this.transform.setPosition(new Vector(left, top).toWorldPos());
  //
  // console.log(this.transform.position);
}

Enemy.all = [];

Utils.inherits(Enemy, Actor);

Enemy.prototype.isColliding = function(actor) {
  let collider = this.getComponent(Collider);

  if (collider) {
    let otherCollider = actor.getComponent(Collider);

    return this.getComponent(Collider).isColliding(otherCollider);
  }

  return false;
};

// Enemy.prototype.tick = function () {
//   if (this.getComponent(Controller)) {
//     this.getComponent(Controller).move();
//   }
// };

// Enemy.prototype.spawn = function () {
//   Enemy.all.push(this);
//
//   this.tickInterval = setInterval(this.tick.bind(this), 10);
// };

module.exports = Enemy;
