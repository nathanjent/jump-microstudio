var game;
var DEBUG = true;

init = function () {
    game = new Game();
    const scene1 = new Scene(game);
    game.addScene(scene1);

    const actor1 = new Actor(game, {
        ay: 0.05,
    });
    scene1.addActor(actor1);

    const input = new PlayerInputBehavior(game, -1);
    const movement = new MovementBehavior(game, -1);
    actor1.addBehavior(input);
    actor1.addBehavior(movement);

    const map1 = new MapActor(game, "map", {
        width: 200,
        height: 200,
        z: -1,
    }, [
        new Tile("sand_18x18", 1, 6),
    ]);
    scene1.addActor(map1);
}

update = function () {
    game.update();
}

draw = function () {
    game.draw();
}
