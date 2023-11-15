var MovementBehavior = class extends Behavior {
    /**
    * @param {Actor} actor
    */
    update(actor) {
        const vx = actor.vx;

        if (actor.vx > -actor.vxMax && actor.input.left) {
            actor.vx -= actor.ax;
            actor.flip = 1;
        }
        if (actor.vx < actor.vxMax && actor.input.right) {
            actor.vx += actor.ax;
            actor.flip = 0;
        }
        if (vx == actor.vx) {
            if (actor.vx > 0.05 || actor.vx < -0.05) {
                actor.vx = lerp(actor.vx, 0, actor.vxFriction);
            } else {
                actor.vx = 0;
            }
        }

        if (game.currentScene?.hitWall(actor)) {
            actor.vx = 0;
        }

        if (game.currentScene?.hitGround(actor)) {
            actor.vy = 0;
        } else {
            actor.vy -= actor.ay;
        }

        if (actor.vy === 0 && actor.input.up) {
            actor.vy = actor.vyMax
        }

        if (game.currentScene?.hitCeiling(actor)) {
            actor.vy = 0;
        }

        // Apply physics
        actor.x += actor.vx;
        actor.y += actor.vy;
    }
}
