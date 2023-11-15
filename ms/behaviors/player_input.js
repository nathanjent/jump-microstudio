var PlayerInputBehavior = class extends Behavior {
    /**
    * @param {Actor} actor
    */
    update(actor) {
        actor.input = {
            up: keyboard.UP || gamepad.UP,
            down: keyboard.DOWN || gamepad.DOWN,
            left: keyboard.LEFT || gamepad.LT,
            right: keyboard.RIGHT || gamepad.RT,
            a: keyboard.A || gamepad.A,
            b: keyboard.B || gamepad.B,
            x: keyboard.X || gamepad.X,
            y: keyboard.Y || gamepad.Y,
        };
    }
}

