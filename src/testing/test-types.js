/**
 * @typedef {function(): Promise<void>} TestFunction
 */

/**
 * @typedef {Object.<string, (TestFunction | TestNode)>} TestNode
 */

/**
 * @typedef {Object} TestResult - the leaf nodes of a TestResults
 * @property { boolean | undefined } success - did the test complete without exception?
 * @property { any } error - the thing thrown when not successful 
 */

/**
 * @typedef {Object.<string, (TestResult, TestResults)} TestResults - a node in the result tree
 */
