module.exports = {
  WIDTH: 720,
  HEIGHT: 480,
  rectOutOfBounds : function (rect) {
    // Usually you pass a new position to the rect with
    // some determined height and width of an actor
    // Then, if the new position is out of bounds, you can avoid
    // a new movement that would have happened with the added input.
    let rectBorderRight = rect.left + rect.width;
    let rectBorderLeft = rect.left;

    let rectBorderTop = rect.top + rect.height;
    let rectBorderBottom = rect.top - rect.height;

    let outOfBoundsLeft = (rectBorderLeft < 0);
    let outOfBoundsRight = (rectBorderRight > this.WIDTH);
    let outOfBoundsTop = (rectBorderTop > this.HEIGHT);
    let outOfBoundsBottom = (rectBorderBottom < 0);

    return (outOfBoundsLeft ||
            outOfBoundsTop ||
            outOfBoundsRight ||
            outOfBoundsBottom);
  }

};
