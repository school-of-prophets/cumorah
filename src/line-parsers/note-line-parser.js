const LineTypes = require("./line-types")

/**
 * @typedef {object} NoteInfo
 * @property {"note"} type
 * @property {string} lbl
 * @property {string} txt
 */

const noteLineRegEx = /^\[(?<lbl>[^\[]+)\]\s+(?<txt>.+)\s*$/

/**
 * @param {string} line
 * @returns {NoteInfo | null}
 */
function parseNoteLine(line) {
    if (!line) return null
    noteLineRegEx.lastIndex = 0
    const match = noteLineRegEx.exec(line);
    if (match) {
        const {lbl, txt} = match.groups;
        return {
            type: LineTypes.Note,
            lbl,
            txt
        };
    }
    return null
}

module.exports = parseNoteLine
