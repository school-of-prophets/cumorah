const LineTypes = require("./line-types")

/**
 * @typedef {object} VolumeSumInfo
 * @property {"volume-sum"} type
 * @property {string} txt
 */

const volumeSumLineRegEx = /^volume-sum\:\s+(?<txt>.+)\s*$/

/**
 * @param {string} line
 * @returns {VolumeSumInfo | null}
 */
function parseVolumeSumLine(line) {
    if (!line) return null
    volumeSumLineRegEx.lastIndex = 0
    const match = volumeSumLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups
        return {
            type: LineTypes.VolumeSum,
            txt,
        }
    }
    return null
}

module.exports = parseVolumeSumLine
