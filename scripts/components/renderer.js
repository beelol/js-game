const Rect = require("../utils/rect");
const Color = require("../utils/color");

function Renderer () {
  this.rect = new Rect(0, 0, 0, 0);
  this.color = Color.red;
}

Renderer.prototype.initialize = function () {
  this.rect.left = this.actor.transform.position.x;
  this.rect.top = this.actor.transform.position.y;
};

Renderer.prototype.render = function() {
  this.rect.left = this.actor.transform.position.x;
  this.rect.top = this.actor.transform.position.y;

  this.rect.draw(this.color);
};


module.exports = Renderer;
