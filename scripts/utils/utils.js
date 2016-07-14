// Function.prototype.inherits = function (superclass) {
//   function Surrogate(){};
//
//   Surrogate.prototype = superclass.prototype;
//
//   this.prototype = new Surrogate();
//
//   this.prototype.constructor = this;
// };

module.exports = {
  inherits (subClass, superClass) {
    function Surrogate(){}

    Surrogate.prototype = superClass.prototype;

    subClass.prototype = new Surrogate();

    subClass.prototype.constructor = subClass;

    subClass.super = superClass;
  }
};
