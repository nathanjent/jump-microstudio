var Actor = class {
  /**
   * @param {Game} game
  */
  constructor(game, e = {}) {
    this.game = game;
    this.x = e.x ?? 0;
    this.y = e.y ?? 0;
    this.z = e.z ?? 0;
    this.vx = e.vx ?? 0;
    this.vy = e.vy ?? 0;
    this.vxMax = e.vxMax ?? 1;
    this.vyMax = e.vyMax ?? 1;
    this.vxFriction = e.vxFriction ?? 0.2;
    this.vyFriction = e.vyFriction ?? 0.2;
    this.ax = e.ax ?? 0.02;
    this.ay = e.ay ?? 0.02;
    this.width = e.width ?? 16;
    this.height = e.height ?? 16;
    this.flip = e.flip;
    this.input = {};

    /** @type {Behavior[]} */
    this.behaviors = e.behaviors ?? [];
    this.sortBehaviors();
  }

  update() {
    this.behaviors.forEach((behavior) => behavior.update(this));
  }

  draw() {
    if (DEBUG) {
      screen.drawRound(this.x, this.y, 1, 1, "#FF0")
      screen.drawRect(this.x, this.y, this.width, this.height, "rgb(255,0,0)");
      screen.drawText(`x:${this.x} y:${this.y}`, this.x, this.y + this.width / 2, 5, "#FFF");

      const [x1, y1, x2, y2] = this.aabb;
      screen.drawRound(x1, y1, 1, 1, "#F0F")
      screen.drawRound(x1, y2, 1, 1, "#0F0")
      screen.drawRound(x2, y1, 1, 1, "#00F")
      screen.drawRound(x2, y2, 1, 1, "#0FF")
    }
  }

  /**
   * @param {Behavior} behavior
   */
  addBehavior(behavior) {
    this.behaviors.push(behavior);
    this.sortBehaviors();
  }

  sortBehaviors() {
    this.behaviors.sort((a, b) => a.order - b.order);
  }

  get hitbox() {
    const w = this.width ?? 1;
    const h = this.height ?? 1;
    return [this.x - w / 2, this.y - h / 2, w, h];
  }

  get aabb() {
    const w = (this.width ?? 1) / 2;
    const h = (this.height ?? 1) / 2;
    return [this.x - w, this.y - h, this.x + w, this.y + h];
  }
}
