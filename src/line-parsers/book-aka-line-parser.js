const LineTypes = require("./line-types")

/**
 * @typedef {object} BookAkaInfo
 * @property {"book-aka"} type
 * @property {string} txt
 */

const bookAkaLineRegEx = /^book-aka\:\s*(?<txt>.*?)\s*$/;

/**
 * @param {string} line
 * @returns {BookAkaInfo | null}
 */
function parseBookAkaLine(line) {
    if (!line) return null
    bookAkaLineRegEx.lastIndex = 0;
    const match = bookAkaLineRegEx.exec(line);
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.BookAka,
            txt
        };
    }
    return null;
}

module.exports = parseBookAkaLine
