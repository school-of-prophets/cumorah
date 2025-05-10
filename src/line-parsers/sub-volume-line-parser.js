const LineTypes = require("./line-types");

/**
 * @typedef {object} SubVolumeInfo
 * @property {"sub-volume"} type
 * @property {string} txt
 */

const subVolumeLineRegEx = /^sub-volume\:\s*(?<txt>.*?)\s*$/

/**
 * @param {string} line
 * @returns {SubVolumeInfo | null}
 */
function parseSubVolumeLine(line) {
    if (!line) return null
    subVolumeLineRegEx.lastIndex = 0
    const match = subVolumeLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.SubVolume,
            txt,
        }
    }
    return null
}

module.exports = parseSubVolumeLine
