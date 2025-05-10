const LineTypes = require("./line-types")

/**
 * @typedef {object} SvgTitleInfo
 * @property {"svg-title"} type
 * @property {string} txt
 */

const svgTitleLineRegEx = /^svg-title\:\s*(?<txt>.*?)\s*$/;

/**
 * @param {string} line
 * @returns {SvgTitleInfo | null}
 */
function parseSvgTitleLine(line) {
    if (!line) return null
    svgTitleLineRegEx.lastIndex = 0;
    const match = svgTitleLineRegEx.exec(line);
    if (match) {
        const {txt} = match.groups;
        return {
            type: LineTypes.SvgTitle,
            txt
        };
    }
    return null;
}

module.exports = parseSvgTitleLine
