const LineTypes = require("./line-types");

/**
 * @typedef {object} SubBookInfo
 * @property {"sub-book"} type
 * @property {string} txt
 */

const subBookLineRegEx = /^sub-book\:\s*(?<txt>.*?)\s*$/

/**
 * @param {string} line
 * @returns {SubBookInfo | null}
 */
function parseSubBookLine(line) {
    if (!line) return null
    subBookLineRegEx.lastIndex = 0
    const match = subBookLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.SubBook,
            txt,
        }
    }
    return null
}

module.exports = parseSubBookLine
