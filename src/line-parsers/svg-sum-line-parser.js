const LineTypes = require("./line-types")

/**
 * @typedef {object} SvgSumInfo
 * @property {"svg-sum"} type
 * @property {string} txt
 */

const svgSumLineRegEx = /^svg-sum\:\s*(?<txt>.*?)\s*$/;

/**
 * @param {string} line
 * @returns {SvgSumInfo | null}
 */
function parseSvgSumLine(line) {
    if (!line) return null
    svgSumLineRegEx.lastIndex = 0;
    const match = svgSumLineRegEx.exec(line);
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.SvgSum,
            txt
        };
    }
    return null;
}

module.exports = parseSvgSumLine
