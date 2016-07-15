function Color(r, g, b, a) {
  this.r = r;
  this.g = g;
  this.b = b;
  this.a = a;
}

Color.red = new Color(255, 0, 0, 1);
Color.green = new Color(0, 255, 0, 1);
Color.blue = new Color(0, 0, 255, 1);
Color.black = new Color(0, 0, 0, 1);
Color.white = new Color(255, 255, 255, 1);

module.exports = Color;
