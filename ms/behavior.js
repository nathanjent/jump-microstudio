var Behavior = class {
	/**
	 * @param {Game} game
	*/
	constructor(game, order = 0) {
		this.game = game;
		this.order = order;
	}

	/**
	 * @param {Actor} actor
	*/
	update(actor) {}
}

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

var MovementBehavior = class extends Behavior {
	/**
	 * @param {Actor} actor
	*/
	update(actor) {
		const vx = actor.vx;

		if (actor.vx > -actor.vxMax && actor.input.left) {
			actor.vx -= actor.ax
			actor.flip = 1
		}
		if (actor.vx < actor.vxMax && actor.input.right) {
			actor.vx += actor.ax
			actor.flip = 0
		}
		if (vx == actor.vx) {
			if (actor.vx > 0.05 || actor.vx < -0.05) {
				actor.vx = lerp(actor.vx, 0, actor.vxFriction)
			} else {
				actor.vx = 0
			}

			if (game.currentScene?.hitWall(actor)) {
				actor.vx = 0
			}

			// Apply physics
			actor.x += actor.vx
			actor.y += actor.vy
		}
	}
}
