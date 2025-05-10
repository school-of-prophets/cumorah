/**
 * This module should export all of the tests that the test-runner should run.
 * All of its exports should either be test functions (async functions which return void, and throw on failure)
 * OR arrays of such functions.
 */

/**
 * @typedef {import('./testing/test-types').TestFunction} TestFunction
 * @typedef {import('./testing/test-types').TestNode} TestNode
 */

/** @type {TestNode} */
const lineParsersTestSuite = require("./line-parsers/index.test")

/** @type {TestNode} */
const entireTestSuite = {
    ...lineParsersTestSuite,
}

module.exports = entireTestSuite
