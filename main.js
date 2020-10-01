const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')
const isValidPrimary = require('./is-valid-primary.js')
const isValidSecondary = require('./is-valid-secondary.js')


// Your code here!
const color1 = process.argv[2]
const color2 = process.argv[3]

if(color1 == isValidPrimary(color)) {
    console.log('yes it is')
}

// if (color1 === undefined) {
//     console.log( 'colors are undefined');
// }
// if (color2 === undefined) {

// } else {
//     return 'hi'
// }
