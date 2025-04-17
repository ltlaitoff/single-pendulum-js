/**
 *	Calculate position of element(x, y) in polar coordinates
 *
 * @param {number} angle - Angle in **radians**
 * @param {number} length - Length of line
 * @returns {{ x: number, y: number}}
 */
export function calculateEndPoint(angle, length) {
	return {
		x: length * Math.cos(angle),
		y: length * Math.sin(angle)
	}
}

/**
 * @param {number} degree - Degree
 * @returns {number} - Radians
 */
export function degreeToRadian(degree) {
	return (degree / 180) * Math.PI
}

/**
 * @param {number} radians - Radians
 * @returns {number} - Degree
 */
export function radianToDegree(radians) {
	return (radians / Math.PI) * 180
}
