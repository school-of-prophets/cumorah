const LineTypes = require("./line-types")

/**
 * @typedef {object} SvgInfo
 * @property {"svg"} type
 * @property {string} relativePath
 */

const svgLineRegEx = /^svg\:\s*(?<relativePath>.*?)\s*$/;

/**
 * @param {string} line
 * @returns {SvgInfo | null}
 */
function parseSvgLine(line) {
    if (!line) return null
    svgLineRegEx.lastIndex = 0
    const match = svgLineRegEx.exec(line)
    if (match) {
        const {relativePath} = match.groups
        return {
            type: LineTypes.Svg,
            relativePath,
        };
    }
    return null
}

module.exports = parseSvgLine
