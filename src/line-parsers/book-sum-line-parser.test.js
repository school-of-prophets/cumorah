const LineTypes = require("./line-types")
const parseBookSumLine = require("./book-sum-line-parser")
/**
 * @typedef {import('./test-types').TestFunction} TestFunction
 * @typedef {import('./test-types').TestNode} TestNode
 */

/** @type {TestNode} */
const bookSumLineParserTests = {
    /** @type {TestNode} */
    "BookSum Line Parser Tests": {
        no_match_should_return_null,
        happy_path_should_return_book_sum,
    }
}

const nonBookSumSamples = {
    nullMeansNull: null,
    empty: "",
    whitespace: "  ",
    somethingElse: "book-aka: something else",
}

const validBookSumSamples = {
    sample_book_summary: "book-sum: This is a summary of a great book",
}

/**
 * When line does not match the expected book-sum format,
 * It should return null
 * 
 * @type {TestFunction}
 */
async function no_match_should_return_null() {
    for (const [key, sampleLine] of Object.entries(nonBookSumSamples)) {
        const result = parseBookSumLine(sampleLine)
        if (result) {
            throw Error(`Failed to return null for "${key}"`)
        }
    }
}


/**
 * When line matches the book-sum format,
 * It should return a book-sum
 * 
 * @type {TestFunction}
 */
async function happy_path_should_return_book_sum() {
    for (const [key, sampleLine] of Object.entries(validBookSumSamples)) {
        const result = parseBookSumLine(sampleLine)
        if (!result || result.type !== LineTypes.BookSum) {
            throw Error(`Failed to return book-sum info for "${key}"`)
        }
    }
}

module.exports = bookSumLineParserTests
