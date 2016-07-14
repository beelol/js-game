const Vector = require("./utils/vector.js");

function Input() {}

Input.keys = {};

Input.keyDownListeners = {};

Input.keyUpListeners = {};

// Sets a key's value to be active and calls all keydown listeners
Input.keyDownHandler = function(e) {
  // e.preventDefault();
  Input.keys[e.keyCode] = 1;

  let keys = Object.keys(Input.keyDownListeners);

  keys.forEach((key) => {
    Input.keyDownListeners[key]();
  });
};

// Sets a key's value to be inactive and calls all keyup listeners
Input.keyUpHandler = function (e) {
  // e.preventDefault();
  Input.keys[e.keyCode] = 0;

  let keys = Object.keys(Input.keyUpListeners);

  keys.forEach((key) => {
    Input.keyUpListeners[key]();
  });
};

// Returns the active value of a certain key
Input.getKey = function(key) {
  return Input.keys[key] ? Input.keys[key] : 0;
};

// Adds a listener to a key's listener array stored in the key up listeners
// object of within the Input object
Input.addKeyDownListener = function (key, listener) {
  if (Input.keyDownListeners[key]) {
    Input.keyDownListeners[key].push(listener);
  } else {
    Input.keyDownListeners[key] = [listener];
  }
};

// Adds a listener to a key's listener array stored in the key down listeners
// object of within the Input object
Input.addKeyUpListener = function (key, listener) {
  if (Input.keyUpListeners[key]) {
    Input.keyUpListeners[key].push(listener);
  } else {
    Input.keyUpListeners[key] = [listener];
  }
};

module.exports = Input;
