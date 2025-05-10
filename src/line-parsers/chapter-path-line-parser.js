const LineTypes = require("./line-types")

/**
 * @typedef {object} ChapterPathInfo
 * @property {"chapter-path"} type
 * @property {string} viewerPath
 */

const chapterPathLineRegEx = /^chapter-path\:\s*(?<viewerPath>.*?)\s*$/

/**
 * @param {string} line
 * @returns {ChapterPathInfo | null}
 */
function parseChapterPathLine(line) {
    if (!line) return null
    chapterPathLineRegEx.lastIndex = 0
    const match = chapterPathLineRegEx.exec(line)
    if (match) {
        const {viewerPath} = match.groups
        return {
            type: LineTypes.ChapterPath,
            viewerPath
        }
    }
    return null
}

module.exports = parseChapterPathLine
