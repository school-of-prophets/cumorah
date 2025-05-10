const LineTypes = require("./line-types")
const parseBookAkaLine = require("./book-aka-line-parser")
/**
 * @typedef {import('./test-types').TestFunction} TestFunction
 * @typedef {import('./test-types').TestNode} TestNode
 */

/** @type {TestNode} */
const bookAkaLineParserTests = {
    /** @type {TestNode} */
    "BookAka Line Parser Tests": {
        no_match_should_return_null,
        happy_path_should_return_book_sum,
        it_should_include_the_expected_txt,
    }
}

const nonBookAkaSamples = {
    nullMeansNull: null,
    empty: "",
    whitespace: "  ",
    somethingElse: "what-not: something else",
}

const validBookAkaSamples = {
    sample_with_no_extra_spaces: "book-aka:This is an Alt Title of a great book",
    sample_with_leading_space: "book-aka: This is an Alt Title of a great book",
    sample_with_trailing_spaces: "book-aka: This is an Alt Title of a great book    ",
}

/**
 * When line does not match the expected book-aka format,
 * It should return null
 * 
 * @type {TestFunction}
 */
async function no_match_should_return_null() {
    for (const [key, sampleLine] of Object.entries(nonBookAkaSamples)) {
        const result = parseBookAkaLine(sampleLine)
        if (result) {
            throw Error(`Failed to return null for "${key}"`)
        }
    }
}


/**
 * When line matches the book-aka format,
 * It should return a book-aka
 * 
 * @type {TestFunction}
 */
async function happy_path_should_return_book_sum() {
    for (const [key, sampleLine] of Object.entries(validBookAkaSamples)) {
        const result = parseBookAkaLine(sampleLine)
        if (!result || result.type !== LineTypes.BookAka) {
            throw Error(`Failed to return book-aka info for "${key}"`)
        }
        if (!result.txt) {
            throw Error(`Failed to return a txt for "${key}"`)
        }
    }
}

/**
 * It should include the expected txt
 * 
 * @type {TestFunction}
 */
async function it_should_include_the_expected_txt() {
    const results = Object.fromEntries(
        Object.entries(validBookAkaSamples)
        .map(([key, sampleLine]) => [key, parseBookAkaLine(sampleLine)])
    )

    if (results.sample_with_no_extra_spaces?.txt !== "This is an Alt Title of a great book") {
        throw Error(`Failed to pull correct txt for "sample_with_no_extra_spaces" .. '${results.sample_with_no_extra_spaces?.txt}'`)
    }
    if (results.sample_with_leading_space?.txt !== "This is an Alt Title of a great book") {
        throw Error(`Failed to pull correct txt for "sample_with_leading_space" .. '${results.sample_with_leading_space?.txt}'`)
    }
    if (results.sample_with_trailing_spaces?.txt !== "This is an Alt Title of a great book") {
        throw Error(`Failed to pull correct txt for "sample_with_trailing_spaces" .. '${results.sample_with_trailing_spaces?.txt}'`)
    }
}



module.exports = bookAkaLineParserTests
