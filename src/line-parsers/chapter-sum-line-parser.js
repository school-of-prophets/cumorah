const LineTypes = require("./line-types")

/**
 * @typedef {object} ChapterSumInfo
 * @property {"chapter-sum"} type
 * @property {string} txt
 */

const chapterSumLineRegEx = /^chapter-sum\:\s+(?<txt>.+)\s*$/

/**
 * @param {string} line
 * @returns {ChapterSumInfo | null}
 */
function parseChapterSumLine(line) {
    if (!line) return null
    chapterSumLineRegEx.lastIndex = 0
    const match = chapterSumLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups
        return {
            type: LineTypes.ChapterSum,
            txt,
        }
    }
    return null
}

module.exports = parseChapterSumLine
