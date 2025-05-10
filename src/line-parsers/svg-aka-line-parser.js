const LineTypes = require("./line-types")

/**
 * @typedef {object} SvgAkaInfo
 * @property {"svg-aka"} type
 * @property {string} txt
 */

const svgAkaLineRegEx = /^svg-aka\:\s*(?<txt>.*?)\s*$/;

/**
 * @param {string} line
 * @returns {SvgAkaInfo | null}
 */
function parseSvgAkaLine(line) {
    if (!line) return null
    svgAkaLineRegEx.lastIndex = 0;
    const match = svgAkaLineRegEx.exec(line);
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.SvgAka,
            txt
        };
    }
    return null;
}

module.exports = parseSvgAkaLine
