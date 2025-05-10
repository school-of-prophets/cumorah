const LineTypes = require("./line-types")

/**
 * @typedef {object} SubBookshelfAkaInfo
 * @property {"sub-bookshelf-aka"} type
 * @property {string} txt
 */

const subBookshelfAkaLineRegEx = /^sub-bookshelf-aka\:\s*(?<txt>.*?)\s*$/;

/**
 * @param {string} line
 * @returns {SubBookshelfAkaInfo | null}
 */
function parseSubBookshelfAkaLine(line) {
    if (!line) return null
    subBookshelfAkaLineRegEx.lastIndex = 0;
    const match = subBookshelfAkaLineRegEx.exec(line);
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.SubBookshelfAka,
            txt
        };
    }
    return null;
}

module.exports = parseSubBookshelfAkaLine
