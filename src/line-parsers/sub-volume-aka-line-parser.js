const LineTypes = require("./line-types")

/**
 * @typedef {object} SubVolumeAkaInfo
 * @property {"sub-volume-aka"} type
 * @property {string} txt
 */

const subVolumeAkaLineRegEx = /^sub-volume-aka\:\s*(?<txt>.*?)\s*$/;

/**
 * @param {string} line
 * @returns {SubVolumeAkaInfo | null}
 */
function parseSubVolumeAkaLine(line) {
    if (!line) return null
    subVolumeAkaLineRegEx.lastIndex = 0;
    const match = subVolumeAkaLineRegEx.exec(line);
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.SubVolumeAka,
            txt
        };
    }
    return null;
}

module.exports = parseSubVolumeAkaLine
