const LineTypes = require("./line-types")

/**
 * @typedef {object} ChapterAkaInfo
 * @property {"chapter-aka"} type
 * @property {string} txt
 */

const chapterAkaLineRegEx = /^chapter-aka\:\s*(?<txt>.*?)\s*$/;

/**
 * @param {string} line
 * @returns {ChapterAkaInfo | null}
 */
function parseChapterAkaLine(line) {
    if (!line) return null
    chapterAkaLineRegEx.lastIndex = 0;
    const match = chapterAkaLineRegEx.exec(line);
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.ChapterAka,
            txt
        };
    }
    return null;
}

module.exports = parseChapterAkaLine
