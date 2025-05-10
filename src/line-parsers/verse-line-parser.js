const LineTypes = require("./line-types")

/**
 * @typedef {object} VerseInfo
 * @property {"verse"} type
 * @property {string} lbl
 * @property {string} txt
 * @property {boolean} indent
 * @property {boolean} right
 * @property {boolean} left
 */

const verseLineRegEx = /^(?<lbl>.{0,35}?)\.\s*(?<indent>\.?)(?<right>\>?)(?<left>\<?)\s*(?<txt>.*?)\s*$/

/**
 * @param {string} line
 * @returns {VerseInfo | null}
 */
function parseVerseLine(line) {
    if (!line) return null
    verseLineRegEx.lastIndex = 0
    const match = verseLineRegEx.exec(line)
    if (match) {
        const {lbl, txt, indent, right, left} = match.groups;
        return {
            type: LineTypes.Verse,
            lbl,
            txt,
            indent: Boolean(indent),    // TODO decide if we still intend to support this stuff
            right: Boolean(right && !left),
            left: Boolean(left && !right),
            center: Boolean(right && left),
        };
    }
    return null
}

module.exports = parseVerseLine
