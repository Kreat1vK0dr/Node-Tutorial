var itemList = function(folderpath) {
var list = [];
var fs = require('fs');
// fs.writeFile(folderpath + '/week1.txt', '', function() {
//   console.log('done');
// });

var filesAll = fs.readdirSync(folderpath);

var files = filesAll.filter(function(f) {
  return f !== 'week1.txt';
});

files.forEach(function(file) {
  var filepath = folderpath + '/' + file;
  var text =  fs.readFileSync(filepath, 'utf8');
  var rows = text.split('\n');
  rows.forEach(function(row) {
      list.push(row);
      // console.log('row pushing to list');
      // fs.appendFile(folderpath + '/week1.txt', row + "\n", 'utf8', function(err) {
      //   if (err) throw err;
      //   // console.log('Row appending to week1.txt');
      // });
    });
  });
    return list;
};

// fs.unlink(folderpath+'/week1.txt', function(err) {
//   if (err)
//   fs.appendFile(folderpath+'week1.txt',"", function (err) {
//     if (err)
//     console.log('error');
//     console.log('file created');
//   });
//   console.log('successfully removed');
// });

exports.linesInFilesAsync = function(path, cb) {
  cb(null, itemList(path));
};

exports.linesInFiles = function(path) {
  return itemList(path);
};

//
// var list = require('./read-folder');
// list.linesInFilesAsync('./files/week1');
