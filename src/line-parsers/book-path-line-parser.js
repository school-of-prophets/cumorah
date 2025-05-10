const LineTypes = require("./line-types")

/**
 * @typedef {object} BookPathInfo
 * @property {"book-path"} type
 * @property {string} viewerPath
 */

const bookPathLineRegEx = /^book-path\:\s*(?<viewerPath>.*?)\s*$/

/**
 * @param {string} line
 * @returns {BookPathInfo | null}
 */
function parseBookPathLine(line) {
    if (!line) return null
    bookPathLineRegEx.lastIndex = 0
    const match = bookPathLineRegEx.exec(line)
    if (match) {
        const {viewerPath} = match.groups
        return {
            type: LineTypes.BookPath,
            viewerPath
        }
    }
    return null
}

module.exports = parseBookPathLine
