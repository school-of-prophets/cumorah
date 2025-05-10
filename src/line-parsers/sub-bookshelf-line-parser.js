const LineTypes = require("./line-types");

/**
 * @typedef {object} SubBookshelfInfo
 * @property {"sub-bookshelf"} type
 * @property {string} txt
 */

const subBookshelfLineRegEx = /^sub-bookshelf\:\s*(?<txt>.*?)\s*$/

/**
 * @param {string} line
 * @returns {SubBookshelfInfo | null}
 */
function parseSubBookshelfLine(line) {
    if (!line) return null
    subBookshelfLineRegEx.lastIndex = 0
    const match = subBookshelfLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.SubBookshelf,
            txt,
        }
    }
    return null
}

module.exports = parseSubBookshelfLine
