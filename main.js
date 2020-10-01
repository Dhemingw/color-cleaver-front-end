const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')
const isValidPrimary = require('./is-valid-primary.js')
const isValidSecondary = require('./is-valid-secondary.js')


// Your code here!
const color1 = process.argv[2]
const color2 = process.argv[3]
const colorDeconstructor1 = colorDeconstructor(color);

if (color1 === undefined && color2 === undefined) {
    console.log('We need at least one color');
}
if (color1 !== undefined && color2 === undefined) {
    console.log('you enter ' + color1)
}
if (color1 !== undefined && color2 !== undefined) {
    console.log('Color1 and color2' + colorDeconstructor1)
}