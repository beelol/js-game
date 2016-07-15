const Rect = require('./utils/rect');
const Collider = require('./components/collider.js');
const Controller = require('./components/controller.js');
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
  this.renderer.color = color;
  this.renderer.width = rect.width;
  this.renderer.height = rect.height;
}

Actor.all = [];

Actor.prototype.getComponent = function(componentType) {
  if (this.components[componentType]){
    return this.components[componentType];
  } else {
    // This entire else is supposed to do some weird temporary
    // type checking. We need to do this to check if something inherits
    // from something else temporarily.

    let componentClasses = Object.keys(this.components);

    let target;
    componentClasses.forEach((compClass) => {
      if (this.components[compClass].constructor.super === componentType) {
        target = this.components[compClass];
      }
    });

    return target;
  }
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
  if (this.getComponent(Controller)) {
    this.getComponent(Controller).move();
  }
};

Actor.prototype.spawn = function () {
  Actor.all.push(this);

  this.tickInterval = setInterval(this.tick.bind(this), 10);
};

Actor.prototype.destroy = function () {
  clearInterval(this.tickInterval);

  let index = Actor.all.indexOf(this);

  delete Actor.all[index];
};

module.exports = Actor;
