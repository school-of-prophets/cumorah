/**
 * @typedef {import('./test-types').TestFunction} TestFunction
 * @typedef {import('./test-types').TestNode} TestNode
 */    
   
/** @type {TestNode} */
const dumbTests = {
    /** @type {TestNode} */
    "Dumb Tests": {
        no_err_should_succeed,
        err_should_NOT_succeed,
    }
}

/**
 * When no errors are thrown
 * It should be considered successful
 * 
 * @type {TestFunction}
 */
async function no_err_should_succeed() {
    // do nothing, and don't throw anything
}


/**
 * When errors are thrown
 * It should NOT be considered successful
 * 
 * @type {TestFunction}
 */
async function err_should_NOT_succeed() {
    throw Error("Please Fail!")
}

module.exports = dumbTests
