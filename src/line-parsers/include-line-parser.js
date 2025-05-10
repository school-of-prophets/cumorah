const LineTypes = require("./line-types");

/**
 * @typedef {object} IncludeInfo
 * @property {"include"} type
 * @property {string} relativePath
 * @property {string} line
 */

const includeLineRegEx = /^include\:\s*(?<relativePath>.*?)\s*$/

/**
 * @param {string} line
 * @returns {IncludeInfo | null}
 */
function parseIncludeLine(line) {
    if (!line) return null
    includeLineRegEx.lastIndex = 0
    const match = includeLineRegEx.exec(line)
    if (match) {
        const {relativePath} = match.groups;
        return {
            type: LineTypes.Include,
            line,
            relativePath,
        }
    }
    return null
}

module.exports = parseIncludeLine
