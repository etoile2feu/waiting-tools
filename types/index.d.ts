/**
 * This function allow you to wait x milliseconds, or to wait until the x timestamp.
 *
 * @param {any} argument The amount of milliseconds to wait or the timestamp.
 * @returns {boolean} Return a boolean to confirm all is right.
 */
export declare function wait(argument: number | object): boolean
/**
 * This function wait a random amount of time between 2 values.
 *
 * @param {number} min The minimum number.
 * @param {number} min The maximum number.
 * @returns {boolean} Return a boolean to confirm all is right.
 */
export declare function randomwait(min: number, max: number): boolean
/**
 * This function test the module.
 *
 * @returns {boolean} Return a boolean to confirm all is right.
 */

export declare function test(): boolean
