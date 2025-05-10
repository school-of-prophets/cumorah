const readline = require('readline');
const fs = require("fs");
const path = require("path");

const LineTypes = require("./line-types")
const parseBookLine = require("./book-line-parser")
const parseBookSumLine = require("./book-sum-line-parser")

/**
 * @param {string} inputFilePath
 */
async function parseContent(inputFilePath) {
    const baseDir = path.dirname(inputFilePath)
    const lines = await(readLinesRecursive(inputFilePath))
    const parsedLines = lines.map(x => parseLine(x))
    const svgs = parsedLines.filter(x => x.type === LineTypes.Svg)
    svgs.forEach(svg => { svg.contentPromise = readFile(path.join(baseDir, svg.relativePath)) })



}

/**
 * @param {string} filePath
 * @returns {Promise<string[]>}
 */
async function readFile(filePath) {
    const lines = [];
  
    const input = fs.createReadStream(filePath);
   
    const rl = readline.createInterface({
      input,
      crlfDelay: Infinity
    });
  
    for await (const line of rl) {
      lines.push(line);
    }
  
    return lines;
}

/**
 * @param {string} filePath
 * @returns {Promise<string[]>}
 */
async function readLinesRecursive(filePath) {
    const lines = (await readFile(filePath)).filter(x => x.trim().length > 0)
    const includes = lines.map(parseIncludeLine).filter(Boolean)
    if (!includes.length) return lines;
    const basePath = path.dirname(filePath)
    includes.forEach(inc => {inc.linesPromise = readLinesRecursive(path.join(basePath, inc.relativePath))  })
    const linesWithIncludes = []; // we'll add lines one by one
    for(const line of lines) {
        if (includeLineRegEx.test(line)) {
            const linesToInclude = await includes.find(x => x.line == line).linesPromise
            linesToInclude.forEach(line => linesWithIncludes.push(line))
        } else {
            linesWithIncludes.push(line)
        }
    }
    return linesWithIncludes
}

function parseLine(line) {
    const parsedLine = (
        parseBookLine(line)
        ?? parseBookSumLine(line)
        ?? {type: "OTHER", line}
        // ?? parseBreakLine(line) 
        // ?? parseChapterLine(line)
        // ?? parseSubChapterLine(line)
        // ?? parseChapterSumLine(line)
        // ?? parseTitleLine(line)
        // ?? parseSubTitleLine(line)
        // ?? parseTitleSumLine(line)
        // ?? parseTocLine(line)
        // ?? parseContactLine(line)
        // ?? parseAuthorLine(line)
        // ?? parseCollectionOfBooksLine(line)
        // ?? parseCollectionOfBooksAkaLine(line)
        // ?? parseCollectionOfBooksSumLine(line)
        // ?? parseLicenseLine(line)
        // ?? parseIsbnLine(line)
        // ?? parseCopyrightHolderLine(line)
        // ?? parseCopyrightYearsLine(line)
        // ?? parseBookAkaLine(line)
        // ?? parseChapterAkaLine(line)
        // ?? parseSvgLine(line)
        // ?? parseNotesLine(line)
        // ?? parseNoteLine(line)
        // ?? parseVerseLine(line)
        // ?? parseViewerPathLine(line)
    );
    return parsedLine;
}


module.exports = parseContent