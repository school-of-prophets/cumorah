const LineTypes = require("./line-types")

/**
 * @typedef {object} BookshelfAkaInfo
 * @property {"bookshelf-aka"} type
 * @property {string} txt
 */

const bookshelfAkaLineRegEx = /^bookshelf-aka\:\s*(?<txt>.*?)\s*$/;

/**
 * @param {string} line
 * @returns {BookshelfAkaInfo | null}
 */
function parseBookshelfAkaLine(line) {
    if (!line) return null
    bookshelfAkaLineRegEx.lastIndex = 0;
    const match = bookshelfAkaLineRegEx.exec(line);
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.BookshelfAka,
            txt
        };
    }
    return null;
}

module.exports = parseBookshelfAkaLine
