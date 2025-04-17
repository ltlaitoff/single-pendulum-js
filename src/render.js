import * as math from './pkg/math/math'

const CIRCLE_SIZE = 5

/**
 * X and Y coords
 * @typedef {{x: number, y: number}} Coords
 */

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Coords} startPoint - Coords of start point
 * @param {number} angle - Angle in degree
 * @param {number} length - Length
 */
export function render(ctx, startPoint, angle, length) {
	ctx.fillStyle = 'rgba(255, 0, 0)'
	ctx.strokeStyle = 'rgba(255, 0, 0)'
	clear(ctx)

	renderCircle(ctx, startPoint, CIRCLE_SIZE)

	const endPoint = math.calculateEndPoint(math.degreeToRadian(angle), length)
	endPoint.x += startPoint.x
	endPoint.y += startPoint.y

	renderLine(ctx, startPoint, endPoint)

	renderCircle(ctx, endPoint, 10)
}

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function clear(ctx) {
	ctx.clearRect(0, 0, 480, 480)
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Coords} coords
 * @param {number} size
 */
function renderCircle(ctx, coords, size) {
	ctx.beginPath()

	ctx.arc(coords.x, coords.y, size, 0, 2 * Math.PI)
	ctx.fill()

	ctx.closePath()
}

/**
 * @param {CanvasRenderingContext2D} ctx
 * @param {Coords} startPoint
 * @param {Coords} endPoint
 */
function renderLine(ctx, startPoint, endPoint) {
	ctx.beginPath()

	ctx.moveTo(startPoint.x, startPoint.y)
	ctx.lineTo(endPoint.x, endPoint.y)

	ctx.stroke()
	// ctx.closePath()
}
