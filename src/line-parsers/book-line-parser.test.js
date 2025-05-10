const LineTypes = require("./line-types");
const parseBookLine = require("./book-line-parser");
/**
 * @typedef {import('./test-types').TestFunction} TestFunction
 * @typedef {import('./test-types').TestNode} TestNode
 */

   
/** @type {TestNode} */
const bookLineParserTests = {
    /** @type {TestNode} */
    "Book Line Parser Tests": {
        no_match_should_return_null,
        happy_path_should_return_book,
    }
}

const nonBookSamples = {
    nullMeansNull: null,
    empty: "",
    whitespace: "  ",
    somethingElse: "book-aka: something else",
}

const validBookSamples = {
    book_with_no_title: "book:",
    book_with_title: "book: Example Book",
}

/**
 * When line does not match the expected book format,
 * It should return null
 * 
 * @type {TestFunction}
 */
async function no_match_should_return_null() {
    for (const [key, sampleLine] of Object.entries(nonBookSamples)) {
        const result = parseBookLine(sampleLine)
        if (result) {
            throw Error(`Failed to return null for "${key}"`)
        }
    }
}


/**
 * When line matches the book format,
 * It should return a book
 * 
 * @type {TestFunction}
 */
async function happy_path_should_return_book() {
    for (const [key, sampleLine] of Object.entries(validBookSamples)) {
        const result = parseBookLine(sampleLine)
        if (!result || result.type !== LineTypes.Book) {
            throw Error(`Failed to return book info for "${key}"`)
        }
    }
}

module.exports = bookLineParserTests
