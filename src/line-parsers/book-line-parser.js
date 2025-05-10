const LineTypes = require("./line-types");

/**
 * @typedef {object} BookInfo
 * @property {"book"} type
 * @property {string} txt
 */

const bookLineRegEx = /^book\:\s*(?<txt>.*?)\s*$/

/**
 * @param {string} line
 * @returns {BookInfo | null}
 */
function parseBookLine(line) {
    if (!line) return null
    bookLineRegEx.lastIndex = 0
    const match = bookLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.Book,
            txt,
        }
    }
    return null
}

module.exports = parseBookLine
