/*
  The Vector class represents a mathematical vector.
  It can be used for directions or points on the
  cartesian plane.
*/
const Screen = require('./screen');

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.DIRS = [
  new Vector(1,1),
  new Vector(0,0),
  new Vector(0,1),
  new Vector(1,0),
  new Vector(-1,-1),
  new Vector(-1,1),
  new Vector(1,-1),
  new Vector(0,-1),
  new Vector(-1,0)
];

Vector.prototype.toScreenPos = function() {
  let screenX = this.x + Screen.WIDTH/2;
  let screenY = Screen.HEIGHT/2 - this.y;

  return new Vector(screenX, screenY);
};

Vector.prototype.toString = function () {
  return `(${this.x}, ${this.y})`;
};

Vector.prototype.dist = function(vec2) {
  return Math.sqrt((Math.pow((vec2.x - this.x), 2)) + (Math.pow((vec2.y - this.y), 2)));
};

Vector.randDir = function () {
  let vec = Vector.DIRS[Math.floor(Math.random() * Vector.DIRS.length)];

  return vec;
};

Vector.randomVelocity = function() {
  let vec = Vector.randDir(1);

  vec.x *= Math.random() + 0.1;
  vec.y *= Math.random() + 0.1;

  return vec;
};

Vector.random = function (length) {
  return new Vector(Math.random() * length, Math.random() * length);
};

module.exports = Vector;
