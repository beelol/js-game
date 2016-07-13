
/*
  The game class represents the governing logic around the
  flow of the gameplay. Most of the logic here is related
  to the core game loop.
*/
function Game() {
}

Game.start = function () {
  this.addStroids();
  Game.spawnPlayer();

  setInterval(() => this.step.call(this), 10);
  setInterval(Game.checkCollisons, 50);
};


Game.step = function () {
  Actor.all.forEach(actor => this.move(actor));
};

Game.addStroids = function () {
  let numAsteroids = Math.random() * ASTEROID_NUM_RANGE.y + ASTEROID_NUM_RANGE.x;

  for (let i = 0; i < numAsteroids; i++) {
    Actor.all.push(Asteroid.spawn({pos: Game.randomPosition(), vel: Vector.randomVelocity() }));
  }
};

Game.randomPosition = function () {
  let vec = Vector.random(1)

  vec.x *= DIM_X;
  vec.y *= DIM_Y;

  return vec;
};

Game.move = function (actor) {
  actor.move.call(actor);
};

Game.draw = function (ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  Actor.all.forEach(function(actor) {
    actor.draw(ctx);
  });
};

Game.spawnPlayer = function () {
  Actor.all.push(Ship.spawn({pos: Game.randomPosition(), vel: new Vector(0, 0), color: "red", radius: 10 }));
};

Game.checkCollisons = function () {
  Actor.all.forEach(function(actor, i) {
    Actor.all.forEach(function(actor2, j) {
      if (i !== j) {
        if (actor.isCollidedWith(actor2)) {
          actor.onCollisionEnter(actor2);
        }
      }
    });
  });
};

module.exports = Game;
