const LineTypes = require("./line-types")

/**
 * @typedef {object} SubBookAkaInfo
 * @property {"sub-book-aka"} type
 * @property {string} txt
 */

const subBookAkaLineRegEx = /^sub-book-aka\:\s*(?<txt>.*?)\s*$/;

/**
 * @param {string} line
 * @returns {SubBookAkaInfo | null}
 */
function parseSubBookAkaLine(line) {
    if (!line) return null
    subBookAkaLineRegEx.lastIndex = 0;
    const match = subBookAkaLineRegEx.exec(line);
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.SubBookAka,
            txt
        };
    }
    return null;
}

module.exports = parseSubBookAkaLine
