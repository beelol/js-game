const Vector = require("./vector.js");

function Input() {}

Input.axes = {
  // 32: 1,
  37: new Vector(-1, 0), // left
  38: new Vector(0, -1), // up
  39: new Vector(1, 0), // right
  40: new Vector(0, 1) // down
};

Input.buttons = {
  32: 1, // space
}

Input.keyStates = {
  // 32: false,
  37: false,
  38: false,
  39: false,
  40: false
}

Input.keyDownHandler = function(e) {
  Input.keyStates[e.keyCode] = true
}

Input.keyUpHandler = function (e) {
  Input.keyStates[e.keyCode] = false
}

Input.receiveMoveInput = function() {
  let pressedKeys = []

  for (var key in Input.axes) {
    let pressed = Input.keyStates[key];

    if (pressed) {
      pressedKeys.push(Input.axes[key]);
    }
  }

  return pressedKeys;
}

Input.getAxis = function(key) {
  if (Input.keyStates[key]) {
    return Input.axes[key];
  }
}

Input.getKey = function(key) {
  if (Input.keyStates[key]) {
    return Input.axes[key];
  }
}

document.addEventListener("keydown", Input.keyDownHandler, false);

document.addEventListener("keyup", Input.keyUpHandler, false);

module.exports = Input;
