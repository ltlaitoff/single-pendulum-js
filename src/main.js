import * as render from './render'

const WIDTH = 480
const HEIGHT = 480
const START_POINT = { x: WIDTH / 2, y: HEIGHT / 2 }

const canvas = document.getElementById('canvas')

if (!(canvas instanceof HTMLCanvasElement)) {
	throw new Error('Canvas is undefined')
}

const ctx = canvas.getContext('2d')

if (!(ctx instanceof CanvasRenderingContext2D)) {
	throw new Error('Ctx is undefined')
}

let i = 0

/**
 * @param {CanvasRenderingContext2D} ctx
 */
function main(ctx) {
	let angle = 0

	setInterval(() => {
		angle += 5
		render.render(ctx, START_POINT, angle, 200)
	}, 1000 / 60)
}

main(ctx)
