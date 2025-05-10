const LineTypes = require("./line-types")

/**
 * @typedef {object} VerseContinuationInfo
 * @property {"verse-continuation"} type
 * @property {string} txt
 */

const verseContinuationLineRegEx = /^\s+(?<txt>.*?)\s*$/;

/**
 * @param {string} line
 * @returns {VerseContinuationInfo | null}
 */
function parseVerseContinuationLine(line) {
    if (!line) return null
    verseContinuationLineRegEx.lastIndex = 0;
    const match = verseContinuationLineRegEx.exec(line);
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.VerseContinuation,
            txt
        };
    }
    return null;
}

module.exports = parseVerseContinuationLine
