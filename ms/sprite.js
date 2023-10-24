var SpriteActor = class extends Actor {
  /**
   * @param {Game} game
  */
  constructor(game, e = {}) {
    super(game, e);
    this.game = game;
    this.sprite = e.sprite ?? "sprite";
    this.xOffset = e.xOffset ?? 0;
    this.yOffset = e.yOffset ?? 0;
    this.xSprite = e.xSprite ?? 0;
    this.ySprite = e.ySprite ?? 0;
    this.widthSprite = e.widthSprite ?? 16;
    this.heightSprite = e.heightSprite ?? 16;
  }

  draw() {
    screen.drawSpritePart(
      this.xSprite,
      this.ySprite,
      this.widthSprite,
      this.heightSprite,
      this.x + this.xOffset,
      this.y + this.yOffset,
      this.widthSprite,
      this.heightSprite,
    );
    super.draw()
  }
}
