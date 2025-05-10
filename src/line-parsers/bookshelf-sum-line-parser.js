const LineTypes = require("./line-types")

/**
 * @typedef {object} BookshelfSumInfo
 * @property {"bookshelf-sum"} type
 * @property {string} txt
 */

const bookshelfSumLineRegEx = /^bookshelf-sum\:\s+(?<txt>.+)\s*$/

/**
 * @param {string} line
 * @returns {BookshelfSumInfo | null}
 */
function parseBookshelfSumLine(line) {
    if (!line) return null
    bookshelfSumLineRegEx.lastIndex = 0
    const match = bookshelfSumLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups
        return {
            type: LineTypes.BookshelfSum,
            txt,
        }
    }
    return null
}

module.exports = parseBookshelfSumLine
