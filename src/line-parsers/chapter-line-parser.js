const LineTypes = require("./line-types");

/**
 * @typedef {object} ChapterInfo
 * @property {"chapter"} type
 * @property {string} txt
 */

const chapterLineRegEx = /^chapter\:\s*(?<txt>.*?)\s*$/

/**
 * @param {string} line
 * @returns {ChapterInfo | null}
 */
function parseChapterLine(line) {
    if (!line) return null
    chapterLineRegEx.lastIndex = 0
    const match = chapterLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.Chapter,
            txt,
        }
    }
    return null
}

module.exports = parseChapterLine
