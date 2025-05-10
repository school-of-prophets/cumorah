const LineTypes = require("./line-types")

/**
 * @typedef {object} BookSumInfo
 * @property {"book-sum"} type
 * @property {string} txt
 */

const bookSumLineRegEx = /^book-sum\:\s+(?<txt>.+?)\s*$/

/**
 * @param {string} line
 * @returns {BookSumInfo | null}
 */
function parseBookSumLine(line) {
    if (!line) return null
    bookSumLineRegEx.lastIndex = 0
    const match = bookSumLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups
        return {
            type: LineTypes.BookSum,
            txt,
        }
    }
    return null
}

module.exports = parseBookSumLine
