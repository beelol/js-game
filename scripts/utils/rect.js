function Rect(left, top, width, height) {
  this.left = left;
  this.top = top;
  this.width = width;
  this.height = height;
}

Rect.prototype.isColliding = function (rect2) {
   return this.left < rect2.left + rect2.width &&
 this.left + this.width > rect2.left &&
 this.top < rect2.top + rect2.height &&
 this.height + this.top > rect2.top;
};

Rect.prototype.draw = function(color, ctx) {
  ctx.beginPath();
  ctx.rect(this.left, this.top, this.width, this.height);
  ctx.fillStyle = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  ctx.fill();
  ctx.closePath();
};

module.exports = Rect;
