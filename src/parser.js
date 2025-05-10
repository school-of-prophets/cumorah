const readline = require('readline');
const fs = require("fs")
const path = require("path");

async function parseContent (cwd, inputFile) {
    if (!fs.existsSync(inputFile)) {
        console.log("ERROR: File Not Found!", inputFile)
        return null;
    }
    // else

    console.log(inputFile)
    const lines = await readLinesRecursive(inputFile)
    const parsedLines = lines.map(x => parseLine(x))

    // const svgs = parsedLines.filter(x => x.type === LineTypes.Svg)
    // svgs.forEach(svg => { svg.contentPromise = readFile(path.join(baseDir, svg.relativePath)) })

    return [];
}

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
        parseBreakLine(line) 
        ?? parseBookLine(line)
        ?? parseChapterLine(line)
        ?? parseSubChapterLine(line)
        ?? parseBookSumLine(line)
        ?? parseChapterSumLine(line)
        ?? parseTitleLine(line)
        ?? parseSubTitleLine(line)
        ?? parseTitleSumLine(line)
        ?? parseTocLine(line)
        ?? parseContactLine(line)
        ?? parseAuthorLine(line)
        ?? parseCollectionOfBooksLine(line)
        ?? parseCollectionOfBooksAkaLine(line)
        ?? parseCollectionOfBooksSumLine(line)
        ?? parseLicenseLine(line)
        ?? parseIsbnLine(line)
        ?? parseCopyrightHolderLine(line)
        ?? parseCopyrightYearsLine(line)
        ?? parseBookAkaLine(line)
        ?? parseChapterAkaLine(line)
        ?? parseSvgLine(line)
        ?? parseNotesLine(line)
        ?? parseNoteLine(line)
        ?? parseVerseLine(line)
        ?? parseViewerPathLine(line)
        ?? {type: "OTHER", line}
    );
    if (parsedLine.type === LineTypes.Br && parsedLine.numberType === "1") {
        parsedLine.roman = false;
        roman = false; // for the rest of the lines
    }
    return parsedLine;
}



module.exports = Object.freeze({
    parseContent,
});