const LineTypes = require("./line-types")

/**
 * @typedef {object} VolumePathInfo
 * @property {"volume-path"} type
 * @property {string} viewerPath
 */

const volumePathLineRegEx = /^volume-path\:\s*(?<viewerPath>.*?)\s*$/

/**
 * @param {string} line
 * @returns {VolumePathInfo | null}
 */
function parseVolumePathLine(line) {
    if (!line) return null
    volumePathLineRegEx.lastIndex = 0
    const match = volumePathLineRegEx.exec(line)
    if (match) {
        const {viewerPath} = match.groups
        return {
            type: LineTypes.VolumePath,
            viewerPath
        }
    }
    return null
}

module.exports = parseVolumePathLine
