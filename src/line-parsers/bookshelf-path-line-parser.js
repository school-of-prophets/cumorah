const LineTypes = require("./line-types")

/**
 * @typedef {object} BookshelfPathInfo
 * @property {"bookshelf-path"} type
 * @property {string} viewerPath
 */

const bookshelfPathLineRegEx = /^bookshelf-path\:\s*(?<viewerPath>.*?)\s*$/

/**
 * @param {string} line
 * @returns {BookshelfPathInfo | null}
 */
function parseBookshelfPathLine(line) {
    if (!line) return null
    bookshelfPathLineRegEx.lastIndex = 0
    const match = bookshelfPathLineRegEx.exec(line)
    if (match) {
        const {viewerPath} = match.groups
        return {
            type: LineTypes.BookshelfPath,
            viewerPath
        }
    }
    return null
}

module.exports = parseBookshelfPathLine
