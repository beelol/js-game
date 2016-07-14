// Master component superclass that all components inherit from.
// Generally contains stuff to configure components
function Component () {
  this.enable();
}

Component.prototype.initialize = function () {
};

Component.prototype.enable = function () {
  this.enabled = true;
};

Component.prototype.disable = function () {
  this.enabled = false;
};

module.exports = Component;
