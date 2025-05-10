const LineTypes = require("./line-types");

/**
 * @typedef {object} VolumeInfo
 * @property {"volume"} type
 * @property {string} txt
 */

const volumeLineRegEx = /^volume\:\s*(?<txt>.*?)\s*$/

/**
 * @param {string} line
 * @returns {VolumeInfo | null}
 */
function parseVolumeLine(line) {
    if (!line) return null
    volumeLineRegEx.lastIndex = 0
    const match = volumeLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups
        return {
            type: LineTypes.Volume,
            txt,
        }
    }
    return null
}

module.exports = parseVolumeLine
