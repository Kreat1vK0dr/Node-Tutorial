
var fs = require('fs');
var filename = process.argv[2];
fs.readFile(filename, 'utf8', function(error, text) {
if (error)
throw error;
console.log('The file contains:', text);
});
