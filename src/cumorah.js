#! /usr/bin/env node
const pkg = require("../package.json")
const Parser = require('./parser')
const cwd = process.cwd()

// the command line is expected to be in the order:
// node cumorah.js [flags] [inputs]
// eslint-disable-next-line no-unused-vars
const [_node_, _cumorah_js_, ...args] = process.argv;

// read the flags, and find where the inputs start
let inputsStartAtIndex = -1; // -1 means ..
for (let i = 0; i < args.length; i++) {
    switch(args[i]) {
    case "-h":
    case "--help":
        console.log("Send Help !")
        process.exit()
        
    case "-v":
    case "--version":
        console.log("Cumorah", pkg.version)
        process.exit()

    default:
        inputsStartAtIndex = i
        break
    }
    if (inputsStartAtIndex !== -1) {
        break
    }
}

if (inputsStartAtIndex === -1) {
    console.log("no input file(s) specified")
    process.exit()
}

// pull in all the files specified by the command line
const inputFiles = args.slice(inputsStartAtIndex)
for (const inputFile of inputFiles) {
    const content = Parser.parseContent(cwd, inputFile)
}
