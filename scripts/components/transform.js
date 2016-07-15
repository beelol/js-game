// Component inheritance requirements
const Component = require('./component');
const Utils = require('../utils/utils');

const Vector = require("../utils/vector");

function Transform () {
  this.position = new Vector(0, 0);
}

Utils.inherits(Transform, Component);

Transform.prototype.initialize = function () {

};

Transform.prototype.translate = function (vector) {
  this.position.x += vector.x;
  this.position.y += vector.y;
};

Transform.prototype.setPosition = function (vector) {
  this.position.x = vector.x;
  this.position.y = vector.y;
};

module.exports = Transform;
