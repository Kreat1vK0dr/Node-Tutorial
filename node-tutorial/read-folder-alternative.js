// USING A 'this.abc'  IN MODULE.EXPORTS REQUIRES YOU TO  'var Name = require('filepath');'
    //THEN 'var name the = new Name({arguments})'
//WHEREAS 'exports.functionname' etc. ONLY REQUIRES YOU TO 'var name = require('filepath');'
    //THEN 'name.functionname({arguments})'.
module.exports = function() {

var itemList = function(folderpath) {
      var list = [];
      var fs = require('fs');

      fs.writeFile(folderpath + '/week1.txt', '', function(err) {
         if (err) throwback err;
        console.log('done');
      });

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
            fs.appendFile(folderpath + '/week1.txt', row + "\n", 'utf8', function(err) {
              if (err) throw err;
              // console.log('Row appending to week1.txt');
            });
          });
        });
        return list;
};
      this.linesInFilesAsync = function(folderpath, cb) {
        cb(null, itemList());
      };

      this.linesInFiles = function(folderpath) {
        return itemList();
      };
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



//
// var list = require('./read-folder');
// list.linesInFilesAsync('./files/week1');
