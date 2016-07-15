const Utils = require('../utils/utils');

const Rect = require("../utils/rect");
const Color = require("../utils/color");
const Vector = require('../utils/vector');
const Controller = require('./controller');
const Input = require('../input');

const speed = 10;

function KamikazeController () {
  this.rect = new Rect(0, 0, 0, 0);
  this.color = Color.red;
}

Utils.inherits(KamikazeController, Controller);

KamikazeController.prototype.initialize = function () {
};

KamikazeController.prototype.isValidInput = function(input) {
  return true;
};

KamikazeController.prototype.getMoveInput = function() {
  return new Vector(0, -1);
};

module.exports = KamikazeController;
