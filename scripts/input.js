const Vector = require("./utils/vector.js");

function Input() {}

// Input.axes = {
//   // 32: 1,
//   37: new Vector(-1, 0), // left
//   38: new Vector(0, -1), // up
//   39: new Vector(1, 0), // right
//   40: new Vector(0, 1) // down
// };

// Input.buttons = {
//   32: 1, // space
// }

Input.keys = {};

Input.keyDownHandler = function(e) {
  Input.keys[e.keyCode] = 1;
};

Input.keyUpHandler = function (e) {
  Input.keys[e.keyCode] = 0;
};

// Input.receiveMoveInput = function() {
//   let pressedKeys = [];
//
//   for (var key in Input.axes) {
//     let pressed = Input.keyStates[key];
//
//     if (pressed) {
//       pressedKeys.push(Input.axes[key]);
//     }
//   }
//
//   return pressedKeys;
// };

// Input.getAxis = function(key) {
//   if (Input.keyStates[key]) {
//     return Input.axes[key];
//   }
// };

Input.getKey = function(key) {
  return Input.keys[key] ? Input.keys[key] : 0;
};

module.exports = Input;
