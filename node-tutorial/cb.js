// var readFolder = require('./read-folder');
// var folder = process.argv[2];
// readFolder.linesInFilesAsync ('./files/week1', function(err, results) {
//   console.log(results);
// });

var Products = require('./products');
var products = new Products('./files/products.csv');

products.productNames(function(err, result){
  console.log(result);
});

products.productsSold(function(err, result){
  console.log(result);
});
