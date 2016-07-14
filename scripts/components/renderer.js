// Component inheritance requirements
const Component = require('./component');
const Utils = require('../utils/utils');

const Rect = require("../utils/rect");
const Color = require("../utils/color");
const Vector = require('../utils/vector');

function Renderer () {
  this.rect = new Rect(0, 0, 0, 0);
  this.color = Color.red;
}

Utils.inherits(Renderer, Component);

Renderer.prototype.initialize = function () {
  this.rect.left = this.actor.transform.position.x;
  this.rect.top = this.actor.transform.position.y;
};

Renderer.prototype.render = function(ctx) {
  // Translate actor's position to a screen position
  let newPos = this.actor.transform.position.toScreenPos();

  this.rect.left = newPos.x;
  this.rect.top = newPos.y;
  this.rect.width = this.width;
  this.rect.height = this.height;

  this.rect.draw(this.color, ctx);
};


module.exports = Renderer;
