const Vector = require("../utils/vector");

function Transform () {
  this.position = new Vector(0, 0);
}

Transform.prototype.initialize = function () {
  console.log("Transform initialized!");
};

Transform.prototype.translate = function (vector) {
  this.position.x += vector.x;
  this.position.y += vector.y;
};

module.exports = Transform;
