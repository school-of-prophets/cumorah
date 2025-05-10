const LineTypes = require("./line-types")

/**
 * @typedef {object} SubChapterAkaInfo
 * @property {"sub-chapter-aka"} type
 * @property {string} txt
 */

const subChapterAkaLineRegEx = /^sub-chapter-aka\:\s*(?<txt>.*?)\s*$/;

/**
 * @param {string} line
 * @returns {SubChapterAkaInfo | null}
 */
function parseSubChapterAkaLine(line) {
    if (!line) return null
    subChapterAkaLineRegEx.lastIndex = 0;
    const match = subChapterAkaLineRegEx.exec(line);
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.SubChapterAka,
            txt
        };
    }
    return null;
}

module.exports = parseSubChapterAkaLine
