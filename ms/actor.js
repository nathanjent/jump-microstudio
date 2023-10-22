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
    this.vxMax = e.vxMax ?? 0;
    this.vyMax = e.vyMax ?? 0;
    this.ax = e.ax ?? 0;
    this.ay = e.ay ?? 0;
    this.width = e.width ?? 0;
    this.height = e.height ?? 0;
    this.sprite = e.sprite ?? new msImage(this.width, this.height);
    this.flip = e.flip;
    /** @type {Behavior[]} */
    this.behaviors = e.behaviors ?? [];
  }

  update() {
    this.behaviors.forEach((behavior) => behavior.update(this));
  }

  draw() {
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
