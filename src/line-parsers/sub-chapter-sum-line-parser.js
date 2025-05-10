const LineTypes = require("./line-types")

/**
 * @typedef {object} SubChapterSumInfo
 * @property {"sub-chapter-sum"} type
 * @property {string} txt
 */

const subChapterSumLineRegEx = /^sub-chapter-sum\:\s+(?<txt>.+)\s*$/

/**
 * @param {string} line
 * @returns {SubChapterSumInfo | null}
 */
function parseSubChapterSumLine(line) {
    if (!line) return null
    subChapterSumLineRegEx.lastIndex = 0
    const match = subChapterSumLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups
        return {
            type: LineTypes.SubChapterSum,
            txt,
        }
    }
    return null
}

module.exports = parseSubChapterSumLine
