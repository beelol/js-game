// Inheritance requirements
const Utils = require('./utils/utils');
const Screen = require('./utils/screen');

const Rect = require('./utils/rect');

const Color = require('./utils/color');

const Transform = require('./components/transform.js');
const Renderer = require('./components/renderer.js');
const Collider = require('./components/collider.js');

const Vector = require('./utils/vector');

const Actor = require('./actor.js');

function Bullet(pos, team, color, dir) {
  Actor.call(this, pos, team, color);

  this.renderer.width = 10;
  this.renderer.height = 10;

  this.col.width = 10;
  this.col.height = 10;

  this.dir = dir;
  this.speed = 20;
}

Utils.inherits(Bullet, Actor);

Bullet.prototype.isColliding = function(actor) {
  let collider = this.getComponent(Collider);

  if (collider) {
    let otherCollider = actor.getComponent(Collider);

    return this.getComponent(Collider).isColliding(otherCollider);
  }

  return false;
};

Bullet.prototype.tick = function() {
  Bullet.super.prototype.tick.call(this);

  this.transform.translate(new Vector(this.dir.x * this.speed, this.dir.y * this.speed));

  Actor.all.forEach((actor) => {
    if (actor.isColliding(this)) {
      console.log("wooooooooooooo");
      if (actor.team !== this.team) {
        actor.destroy();
        this.destroy();
      }
    }
  });
};

module.exports = Bullet;
