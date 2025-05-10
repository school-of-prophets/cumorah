const LineTypes = require("./line-types")

/**
 * @typedef {object} SubBookSumInfo
 * @property {"sub-book-sum"} type
 * @property {string} txt
 */

const subBookSumLineRegEx = /^sub-book-sum\:\s+(?<txt>.+)\s*$/

/**
 * @param {string} line
 * @returns {SubBookSumInfo | null}
 */
function parseSubBookSumLine(line) {
    if (!line) return null
    subBookSumLineRegEx.lastIndex = 0
    const match = subBookSumLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups
        return {
            type: LineTypes.SubBookSum,
            txt,
        }
    }
    return null
}

module.exports = parseSubBookSumLine
