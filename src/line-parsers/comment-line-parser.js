const LineTypes = require("./line-types")

/**
 * @typedef {object} CommentInfo
 * @property {"comment"} type
 * @property {boolean} opensComment
 * @property {boolean} closesComment
 */

const openCommentLineRegEx = /^\s*\/\*/; // starts with /*
const closeCommentLineRegEx = /\*\/\s*$/; // ends with */

/**
 * @param {string} line
 * @returns {CommentInfo | null}
 */
function parseCommentLine(line) {
    if (!line) return null
    openCommentLineRegEx.lastIndex = 0
    closeCommentLineRegEx.lastIndex = 0
    const opensComment = Boolean(openCommentLineRegEx.exec(line))
    const closesComment = Boolean(closeCommentLineRegEx.exec(line))
    if (opensComment || closesComment) {
        return {
            type: LineTypes.Comment,
            opensComment,
            closesComment,
        }
    }
    return null
}

module.exports = parseCommentLine
