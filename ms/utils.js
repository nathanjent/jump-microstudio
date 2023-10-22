/**
 * @param {number} a
 * @param {number} b
 * @param {number} t
 */
var lerp = function (a, b, t) {
    return (1 - t) * a + t * b;
}
