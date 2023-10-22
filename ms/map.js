var MapActor = class extends Actor {
    /**
     * @param {Game} game
     * @param {string} mapName
     * @param {string[]} solidSprites
     */
    constructor(game, mapName, actorProps = {}, solidSprites = []) {
        super(game, actorProps);
        this.mapName = mapName;
        this.solidSprites = solidSprites;
    }

    update() {
    }

    draw() {
        screen.drawMap(this.mapName, this.x, this.y, this.w, this.h);
    }

    /**
     * @param {number} x
     * @param {number} y
     */
    isSolid(x, y) {
        const map = maps[this.mapName];
        if (!map) return false;
        // TODO translate coordinates to this map space
        const spriteName = map.get(x, y);
        return this.solidSprites.indexOf(spriteName) >= 0;
    }
}
