/**
 * This function wait asynchronously for x milliseconds, or it wait until the x timestamp.
 *
 * @param {number | object} argument The amount of milliseconds to wait or the timestamp.
 * @returns {boolean} Return a boolean to confirm all is right.
 */
export declare function wait(argument: number | object): boolean
/**
 * This function wait asynchronously for a random moment between 2 values.
 *
 * @param {number} min The minimum number.
 * @param {number} min The maximum number.
 * @returns {boolean} Return a boolean to confirm all is right.
 */
export declare function randomwait(min: number, max: number): boolean
/**
 * This function test asynchronously the module.
 *
 * @returns {boolean} Return a boolean to confirm all is right.
 */

export declare function test(): boolean

/**
 * This function wait synchronously for x milliseconds, or it wait until the x timestamp.
 *
 * @param {number | object} argument The amount of milliseconds to wait or the timestamp.
 * @returns {boolean} Return a boolean to confirm all is right.
 */
export declare function swait(argument: number | object): boolean
/**
 * This function wait synchronously for a random moment between 2 values.
 *
 * @param {number} min The minimum number.
 * @param {number} min The maximum number.
 * @returns {boolean} Return a boolean to confirm all is right.
 */
export declare function srandomwait(min: number, max: number): boolean
/**
 * This function test synchronously the module.
 *
 * @returns {boolean} Return a boolean to confirm all is right.
 */

export declare function stest(): boolean