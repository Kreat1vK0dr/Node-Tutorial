module.exports = function (filepath) {
  var fs = require('fs');
  var products = [];
  map = {};
  var rows = fs.readFileSync(filepath, 'utf8').split('\n');
  rows.forEach(function(row) {
    var line = row.split(',');
    if (map[line[1]]===undefined) {
      var quantity = 0;
      map[line[1]] = Number(line[2]);
      products.push(line[1]);
    } else {
      quantity = map[line[1]] + Number(line[2]);
      map[line[1]] = quantity;
    }
  });

  this.productsSold = function(cb) {
        cb(null, map);
};

  this.productNames = function(cb) {
      cb(null, products);
};
};

// exports.productNames = function (filepath, cb) {
//   cb(null, productMap(filepath));
// };
//
// exports.productsSold = function (filepath, cb) {
//   cb(null, productList(filepath));
// }
