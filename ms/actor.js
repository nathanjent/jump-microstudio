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
    this.sprite = e.sprite ?? "sprite";
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
    screen.drawSprite(this.sprite, this.x, this.y, this.width, this.height);
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
