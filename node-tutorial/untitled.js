exports.linesInFilesAsync = function(folderpath, cb) {
  var list = [];
  var fs = require('fs');

  // fs.unlink(folderpath+'/week1.txt', function(err) {
  //   if (err)
  //   fs.appendFile(folderpath+'week1.txt',"", function (err) {
  //     if (err)
  //     console.log('error');
  //     console.log('file created');
  //   });
  //   console.log('successfully removed');
  // });
  fs.writeFile(folderpath + '/week1.txt', '', function() {
    console.log('done')
  }); //NO CODE WILL RUN AFTER THIS


  fs.readdir(folderpath, function(err, filesAll) {
    if (err)
      throw err;
    var files = filesAll.filter(function(f) {
      return f !== 'week1.txt';
    });

    files.forEach(function(file) {
      var filepath = folderpath + '/' + file;

      fs.readFile(filepath, 'utf8', function(error, text) {
        if (error)
          throw error;
        var rows = text.split('\n');
        rows.forEach(function(row) {
          list.push(row);
          console.log('row pushing to list');
          fs.appendFile(folderpath + '/week1.txt', row + "\n", 'utf8', function(err) {
            if (err) throw err;
            console.log('Row appending to week1.txt');
          });
          console.log('after closing bracket 1 list contains: ' + list); //RETURNS EVERY INCREMENT OF LIST.
        });

        console.log('after closing bracket 2 list contains: ' + list);
        //return list;
      });

      console.log('after closing bracket 3 list contains: ' + list);
    });
    console.log('after closing bracket 4 list contains: ' + list);
    // console.log(list); //RETURNS AN EMPTY LIST.
    //     return list;
  });

  //console.log('after closing bracket 5 list contains: ' + list);

  //cb(null, list);

};



  // exports.linesInFiles = function(folderpath) {
  //   var list = [];
  //   var fs = require('fs');
  //     var files = fs.readdirSync(folderpath);
  //     files.forEach(function(file) {
  //       var filepath  = folderpath+'/'+file;
  //       var text = fs.readFileSync(filepath, 'utf8');
  //       var rows = text.split('\n');
  //       rows.forEach(function(row) {
  //         list.push(row);
  //       });
  //
  //     });
  //   };
