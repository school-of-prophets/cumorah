const LineTypes = require("./line-types")

/**
 * @typedef {object} SubVolumeSumInfo
 * @property {"sub-volume-sum"} type
 * @property {string} txt
 */

const subVolumeSumLineRegEx = /^sub-volume-sum\:\s+(?<txt>.+)\s*$/

/**
 * @param {string} line
 * @returns {SubVolumeSumInfo | null}
 */
function parseSubVolumeSumLine(line) {
    if (!line) return null
    subVolumeSumLineRegEx.lastIndex = 0
    const match = subVolumeSumLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups
        return {
            type: LineTypes.SubVolumeSum,
            txt,
        }
    }
    return null
}

module.exports = parseSubVolumeSumLine
