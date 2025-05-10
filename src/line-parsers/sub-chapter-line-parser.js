const LineTypes = require("./line-types");

/**
 * @typedef {object} SubChapterInfo
 * @property {"sub-chapter"} type
 * @property {string} txt
 */

const subChapterLineRegEx = /^sub-chapter\:\s*(?<txt>.*?)\s*$/

/**
 * @param {string} line
 * @returns {SubChapterInfo | null}
 */
function parseSubChapterLine(line) {
    if (!line) return null
    subChapterLineRegEx.lastIndex = 0
    const match = subChapterLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.SubChapter,
            txt,
        }
    }
    return null
}

module.exports = parseSubChapterLine
