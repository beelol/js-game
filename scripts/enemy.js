// Inheritance requirements
const Utils = require('./utils/utils');
const Screen = require('./utils/screen');
const Actor = require('./actor');
const Rect = require('./utils/rect');

const Color = require('./utils/color');

const KamikazeController = require('./components/kamikaze_controller');
const Transform = require('./components/transform.js');
const Renderer = require('./components/renderer.js');
const Collider = require('./components/collider.js');

const Vector = require('./utils/vector');

function Enemy(pos, team, color) {
  Actor.call(this, pos, team, color);
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

Enemy.prototype.tick = function() {
  Enemy.super.prototype.tick.call(this);

  if (this.getComponent(Collider)) {
    if (this.getComponent(Collider).outOfBounds()) {
      this.destroy();
    }
  }
};

Enemy.spawnRandomEnemy = function () {
  let enemyVector = new Vector(Math.random() * (Screen.WIDTH - 50), 10).toWorldPos();

  let enemy = new Enemy(enemyVector, 2, Color.red);
  enemy.addComponent(KamikazeController);

  enemy.spawn();
};

module.exports = Enemy;
