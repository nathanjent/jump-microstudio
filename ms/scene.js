var Scene = class {
  /**
   * @param {Game} game
   * @param {Color} clearColor
   * @param {Actor[]} actors
   * @param {MapActor[]} maps
   */
  constructor(game, clearColor = null, actors = [], maps = []) {
    this.game = game;
    this.clearColor = clearColor;
    this.actors = actors;
    this.maps = maps;
  }

  update() {
    this.actors.forEach((a) => a.update());
  }

  draw() {
    screen.clear(this.clearColor);
    this.maps.forEach((m) => m.draw());
    this.actors.forEach((a) => a.draw());
  }

  /**
   * @param {Actor} actor
   */
  addActor(actor) {
    this.actors.push(actor);
  }

  /*
   * @param {MapActor} map
   */
  addMap(map) {
    this.maps.push(map);
  }

  /**
   * @param {number} x
   * @param {number} y
   */
  isSolid(x, y) {
    return this.maps.some(map => map.isSolid(x, y));
  }

  /**
   * @param {Actor} actor
   */
  hitWall(actor) {
    const [x1, y1, x2, y2] = actor.aabb;
    const x = actor.flip == 1 ? x1 : x2;
    for (let y = y1; y < y2 - actor.vy; y++) {
      if (this.isSolid(x, y)) {
        return true
      }
    }

    return false;
  }

  /**
   * @param {Actor} actor
   */
  hitGround(actor) {
    const [x1, _, x2, y2] = actor.aabb;
    for (let x = x1; x < x2; x++) {
      if (this.isSolid(x + actor.vx, y2 + actor.vy)) {
        return true
      }
    }

    return false
  }

  /**
   * @param {Actor} actor
   */
  hitCeiling(actor) {
    const [x1, y1, x2, _] = actor.aabb;
    for (let x = x1; x < x2; x++) {
      if (this.isSolid(x + actor.vx, y1 + actor.vy)) {
        return true
      }
    }

    return false
  }
}
