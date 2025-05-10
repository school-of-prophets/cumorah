const LineTypes = require("./line-types");

/**
 * @typedef {object} BookshelfInfo
 * @property {"bookshelf"} type
 * @property {string} txt
 */

const bookshelfLineRegEx = /^bookshelf\:\s*(?<txt>.*?)\s*$/

/**
 * @param {string} line
 * @returns {BookshelfInfo | null}
 */
function parseBookshelfLine(line) {
    if (!line) return null
    bookshelfLineRegEx.lastIndex = 0
    const match = bookshelfLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.Bookshelf,
            txt,
        }
    }
    return null
}

module.exports = parseBookshelfLine
