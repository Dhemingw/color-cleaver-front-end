const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')
const isValidPrimary = require('./is-valid-primary.js')
const isValidSecondary = require('./is-valid-secondary.js')


// Your code here!
const color1 = process.argv[2]
const color2 = process.argv[3]


if (color1 === undefined && color2 === undefined) {
    console.log( 'colors are undefined');
}
if (color1 !== undefined && color2 === undefined) {
    console.log('Color1 is ' + colorDeconstructor(color1))
}
