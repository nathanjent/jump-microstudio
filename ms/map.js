var Tile = class {
    /**
     * @param {string} name
     * @param {number} x
     * @param {number} y
     * @param {string} fullName
     */
    constructor(name, x, y, fullName = null) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.fullName = fullName;
    }

    /**
     * Separate the sprite path from the map call into components.
     * [path/][filename]:[tile x],[tile y]
     * @param {string?} tilePath
     */
    static fromPath(tilePath) {
        const match = tilePath.match(/^([a-zA-Z0-9]+\/)*([a-zA-Z0-9_]+):([0-9]+),([0-9]+)/);
        return new Tile(match[2], +match[3], +match[4], tilePath);
    }
}

var MapActor = class extends Actor {
    /**
     * @param {Game} game
     * @param {string} mapName
     * @param {Actor | object} actorProps
     * @param {Tile[]} solidTiles
     */
    constructor(game, mapName, actorProps = {}, solidTiles = []) {
        super(game, actorProps);
        this.mapName = mapName;
        this.solidTiles = solidTiles;
    }

    draw() {
        screen.drawMap(this.mapName, this.x, this.y, this.width, this.height);
        super.draw();
    }

    /**
     * @param {number} x
     * @param {number} y
     */
    isSolid(x, y) {
        const map = maps[this.mapName];
        if (!map) return false;

        // TODO translate coordinates to this map space
        const mx = Math.floor((x + this.x + this.width / 2) / map.block_width);
        const my = Math.floor((y + this.y + this.height / 2) / map.block_height);

        const tilePath = map.get(mx, my);
        if (!tilePath) return false;
        const tile = Tile.fromPath(tilePath);
        return this.solidTiles.some(
            t => t.name === tile.name && t.x === tile.x && t.y === tile.y);
    }
}
