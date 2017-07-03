let fs = require('fs');

let success = true,
    content = fs.readFileSync('./code.js'),
    thenRegExp = /\.[ \t\n\r]*then[ \t\n\r]*\(/,
    catchRegExp = /\.[ \t\n\r]*catch[ \t\n\r]*\(/;

if (thenRegExp.test(content)) {
    console.error('Your code still contains a call to the `then` promises method');
    success = false;
}

if (catchRegExp.test(content)) {
    console.error('Your code still contains a call to the `catch` promises method');
    success = false;
}

console.log('TECHIO> success', success);