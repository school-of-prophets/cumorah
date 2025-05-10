const LineTypes = require("./line-types")

/**
 * @typedef {object} SubBookshelfSumInfo
 * @property {"sub-bookshelf-sum"} type
 * @property {string} txt
 */

const subBookshelfSumLineRegEx = /^sub-bookshelf-sum\:\s+(?<txt>.+)\s*$/

/**
 * @param {string} line
 * @returns {SubBookshelfSumInfo | null}
 */
function parseSubBookshelfSumLine(line) {
    if (!line) return null
    subBookshelfSumLineRegEx.lastIndex = 0
    const match = subBookshelfSumLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups
        return {
            type: LineTypes.SubBookshelfSum,
            txt,
        }
    }
    return null
}

module.exports = parseSubBookshelfSumLine
