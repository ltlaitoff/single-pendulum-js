import { assert } from './pkg/assert/assert'
import * as render from './render'

/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById('canvas')
assert(canvas !== undefined, 'Canvas is undefined')

const WIDTH = 480
const HEIGHT = 480

const START_POINT = { x: WIDTH / 2, y: HEIGHT / 8 }

/**
 * @type {CanvasRenderingContext2D}
 */
const ctx = canvas.getContext('2d')
assert(ctx !== null, 'Ctx is null')

render.render(ctx, START_POINT, 90, 200)
