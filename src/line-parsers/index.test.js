/**
 * This module should export all of the tests that the test-runner should run.
 * All of its exports should either be test functions (async functions which return void, and throw on failure)
 * OR arrays of such functions.
 */

/**
 * @typedef {import('../testing/test-types').TestFunction} TestFunction
 * @typedef {import('../testing/test-types').TestNode} TestNode
 */

/** @type {TestNode} */
const bookLineParserTests = require("./book-line-parser.test")

/** @type {TestNode} */
const bookAkaLineParserTests = require("./book-aka-line-parser.test")

/** @type {TestNode} */
const bookSumLineParserTests = require("./book-sum-line-parser.test")

/** @type {TestNode} */
const lineParsersTestSuite = {
    "Line Parsers": {
        ...bookLineParserTests,
        ...bookAkaLineParserTests,
        ...bookSumLineParserTests,
    }
}

module.exports = lineParsersTestSuite
