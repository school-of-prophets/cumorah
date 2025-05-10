/**
 * @typedef {import('./test-types').TestFunction} TestFunction
 * @typedef {import('./test-types').TestNode} TestNode
 * @typedef {import('./test-types').TestResult} TestResult
 * @typedef {import('./test-types').TestResults} TestResults
 */

/** @type {TestNode} */
const allTests = require("../tests")

/** Main ...  the thing that does the things */
async function main() {
    const results = await runTests("All Tests", allTests)
    const failureCount = displayResults(results, 0)
    console.log("Failure Count", failureCount)
    if (failureCount > 0) process.exit(1 /* FAILURE */)
}
main();

/**
 * Runs all of the tests under a given test node.
 * @param {string} testName
 * @param {TestNode} node
 * @returns {Promise<TestResults>}
 */
async function runTests(testName, node) {

    const testNames = Object.keys(node ?? {});

    const promises = testNames.map(testName => {
        const childNode = node[testName]

        return typeof childNode === "function"
            ? runTest(testName, childNode)
            : runTests(testName, childNode)
    });

    return await Promise.all(promises).then(results => {
        let accumulator = {};
        results.forEach(result => accumulator = {...accumulator, ...result});
        return {[testName]: accumulator};
    });
}

/**
 * @param {string} testName
 * @param {TestFunction} testFunction
 * @returns {Promise<TestResults>}
 */
async function runTest(testName, testFunction) {
    let success
    let error

    await testFunction()
        .then(() => {
            success = true;
        })
        .catch(err => {
            success = false;
            error = err;
        });

    return { [testName]: { success, error } }
}

/**
 * @param {TestResults} results - one node of the test result tree
 * @param {number} indent - how deeply in the tree are we (so we can indent the formatted output)
 * @returns {number} - The number of failed tests within this node ... so the caller can keep a running tally
 */
function displayResults(results, indent) {    
    const testNames = Object.keys(results);
    let failureCount = 0;

    testNames.forEach(testName => {
        const testResult = results[testName];
        const tabs = " ".repeat(indent * 2);
        if (typeof testResult.success === "boolean") {
            // its an individual test
            if (testResult.success) {
                console.log(tabs, ".", testName)
            }
            else {
                failureCount ++;
                console.log(tabs, "X", testName);
                if (testResult.error?.message) {
                    console.log(tabs, " ", "ERROR", testResult.error?.message);
                }
            }
        }
        else { // its a set of results
            console.log(tabs, testName);
            failureCount += displayResults(testResult, indent + 1);
        }
    })

    return failureCount;
}
