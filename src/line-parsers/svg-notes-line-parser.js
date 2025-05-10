const LineTypes = require("./line-types")

/**
 * @typedef {object} SvgNotesInfo
 * @property {"svg-notes"} type
 * @property {string} txt
 */

const svgNotesLineRegEx = /^svg-notes\:\s+(?<txt>.+)\s*$/

/**
 * @param {string} line
 * @returns {SvgNotesInfo | null}
 */
function parseSvgNotesLine(line) {
    if (!line) return null
    svgNotesLineRegEx.lastIndex = 0
    const match = svgNotesLineRegEx.exec(line)
    if (match) {
        const {txt} = match.groups
        return {
            type: LineTypes.SvgNotes,
            txt,
        }
    }
    return null
}

module.exports = parseSvgNotesLine
