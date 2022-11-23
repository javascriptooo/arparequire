let fs = require('fs');
let text = fs.readFileSync("./cmudict-0.7b-mod.txt", 'utf-8');
let textByLine = text.split('\n')

textByLine.length

let arpaData = []

for (let i = 0; i < textByLine.length; i++ ) {
    // split line apart from word and translation
    let line = textByLine[i].split('  ')
    // convert array to object
    Object.assign({}, line)
    // rename the indexes to 'word' and 'arpanum'
    let lineReduced = line.reduce((w, a) => ({'word': w, 'arpanum': a}))

    // set arpabet key value pair 'arpabet' to 'empty'
    lineReduced.arpabet = 'empty'
    // remove numbers from 'arpanum' value and add as new key value pair
    lineReduced.arpabet = lineReduced.arpanum.replace(/[0-9]*/g, "")
    // error : 'Cannot read properties of undefined (reading 'replace')
    console.log(``)
    console.log(`replace method performed:`)
    console.log(lineReduced)

    // push new object into the 'arpaData' array
    arpaData.push(lineReduced)
}

console.log(arpaData[100789])
