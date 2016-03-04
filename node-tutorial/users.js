// a empty user list
var users = [];

//create 3 users in the users array
//using code like this: users.push({ first_name : 'Andy', last_name : 'Bradshaw' });

//Create 3 users : Jack, Callum and Neil - they all should have the name Bradshaw

var names = ['Jack', 'Callum', 'Neil'];

names.forEach(function(entry) {
  var obj = {
    first_name: entry,
    last_name: 'Bradshaw'
  };
  users.push(obj);
});

//now loop through the users array and write the following data to the console below each other for each user
//you can use the forEach method
users.forEach(function(entry) {
    console.log("Hi, " +entry.first_name+" "+entry.last_name+"!");

});
