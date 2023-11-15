var Behavior = class {
    /**
    * @param {Game} game
    */
    constructor(game, order = 0) {
        this.game = game;
        this.order = order;
    }

    /**
    * @param {Actor} _actor
    */
    update(_actor) {}
}
