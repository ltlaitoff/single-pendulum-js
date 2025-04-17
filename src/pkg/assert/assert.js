/**
 * @param {boolean} truth
 * @param {string} message
 */
export const assert = (truth, message) => {
	if (!truth) {
		throw new Error(message)
	}
}
