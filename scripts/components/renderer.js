const Rect = require("../utils/rect");
const Color = require("../utils/color");
const Vector = require('../utils/vector');

function Renderer () {
  this.rect = new Rect(0, 0, 0, 0);
  this.color = Color.red;
}

Renderer.prototype.initialize = function () {
  this.rect.left = this.actor.transform.position.x;
  this.rect.top = this.actor.transform.position.y;
};

Renderer.prototype.render = function(ctx) {
  let newPos = new Vector(this.actor.transform.position.x,
                          this.actor.transform.position.y).toScreenPos();

  this.rect.left = newPos.x;
  this.rect.top = newPos.y;
  this.rect.width = this.width;
  this.rect.height = this.height;

  this.rect.draw(this.color, ctx);
};


module.exports = Renderer;
