const Rect = require('./utils/rect');
const Collider = require('./components/collider.js');
const Transform = require('./components/transform.js');
const Renderer = require('./components/renderer.js');
const Vector = require('./utils/vector');

function Actor(pos, team, color) {
  this.team = team;
  this.color = color;

  // The idea here is that we can just grab components by their constructor similar to passing in a class to add and get components
  this.components = {};

  this.addComponent(Transform);
  this.transform = this.getComponent(Transform);

  this.addComponent(Collider);
  this.addComponent(Renderer);

  this.transform.position = pos;

  let rect = new Rect(
    this.transform.position.x,
    this.transform.position.y,
    50,
    50
  );

  this.col = this.getComponent(Collider);
  this.col.width = rect.width;
  this.col.height = rect.height;

  this.renderer = this.getComponent(Renderer);
  this.renderer.width = rect.width;
  this.renderer.height = rect.height;
}

Actor.all = [];

Actor.prototype.getComponent = function(componentType) {
  return this.components[componentType];
};

Actor.prototype.addComponent = function(componentType) {
  let component = new componentType();
  component.actor = this;
  component.initialize();

  this.components[componentType] = component;
};

Actor.prototype.render = function(ctx) {
  let renderer = this.getComponent(Renderer);

  if (renderer) {
    this.getComponent(Renderer).render(ctx);
  }
};

Actor.prototype.isColliding = function(actor) {
  let collider = this.getComponent(Collider);

  if (collider) {
    let otherCollider = actor.getComponent(Collider);

    return this.getComponent(Collider).isColliding(otherCollider);
  }

  return false;
};

Actor.prototype.tick = function () {
  // console.log("tickin");
};

Actor.prototype.outOfBounds = function () {
  return this.rect.top > canvas.height;
};

Actor.prototype.spawn = function () {
  Actor.all.push(actor);

  this.tickInterval = setInterval(actor.tick.bind(actor), 10);
};

Actor.prototype.destroy = function () {
  clearInterval(this.tickInterval);
};

// Actor.spawn = function(left, top, actor) {
//   actor.transform.position = new Vector(left, top);
//
//   Actor.all.push(actor);
//
//   // This should be moved to the gameloop with some offset so that
//   // it is more easily controlled. However, it is fine to have it here as well.
//   setInterval(actor.tick.bind(actor), 10);
// };

module.exports = Actor;
