const game = new Game();

init = function () {
    const scene1 = new Scene(game);
    game.addScene(scene1);
}

update = function () {
    game.update();
}

draw = function () {
    game.draw();
}
