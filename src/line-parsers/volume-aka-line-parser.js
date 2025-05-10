const LineTypes = require("./line-types")

/**
 * @typedef {object} VolumeAkaInfo
 * @property {"volume-aka"} type
 * @property {string} txt
 */

const volumeAkaLineRegEx = /^volume-aka\:\s*(?<txt>.*?)\s*$/;

/**
 * @param {string} line
 * @returns {VolumeAkaInfo | null}
 */
function parseVolumeAkaLine(line) {
    if (!line) return null
    volumeAkaLineRegEx.lastIndex = 0;
    const match = volumeAkaLineRegEx.exec(line);
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.VolumeAka,
            txt
        };
    }
    return null;
}

module.exports = parseVolumeAkaLine
