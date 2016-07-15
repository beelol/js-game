module.exports = {
  WIDTH: 720,
  HEIGHT: 480,
  rectOutOfBounds: function (rect) {
    // Usually you pass a new position to the rect with
    // some determined height and width of an actor
    // Then, if the new position is out of bounds, you can avoid
    // a new movement that would have happened with the added input.
    let rectBorderRight = rect.left + rect.width;
    let rectBorderLeft = rect.left;

    let rectBorderTop = rect.top;
    let rectBorderBottom = rect.top + rect.height;

    let outOfBoundsLeft = (rectBorderLeft < 0);
    let outOfBoundsRight = (rectBorderRight > this.WIDTH);
    let outOfBoundsTop = (rectBorderTop < 0);
    let outOfBoundsBottom = (rectBorderBottom > this.HEIGHT);

    return (outOfBoundsLeft ||
            outOfBoundsTop ||
            outOfBoundsRight ||
            outOfBoundsBottom);
  }

};
