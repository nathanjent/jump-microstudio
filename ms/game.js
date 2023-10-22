var Game = class {
    /**
     * @param {Scene[]} scenes
     */
    constructor(scenes = []) {
        this.scenes = scenes;
        this._tick = 0;
        this._currentSceneIndex = 0;
        this._gameEnded = false;
    }

    update() {
        if (this._gameEnded) return;
        this.currentScene?.update();
        this._tick++;
    }

    draw() {
        if (this._gameEnded) {
            screen.clear();
            screen.drawText("Game Over", 0, 0, 20, "rgb(255,0,0)");
            return;
        }

        this.currentScene?.draw();
    }

    get currentScene() {
        return this.scenes[this._currentSceneIndex];
    }

    /**
     * @param {Scene} scene
     */
    addScene(scene) {
        this.scenes.push(scene);
    }
}
