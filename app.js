// const names = require("./4-names");
const { john, peter } = require("./4-names"); // destructuring an array
// console.log(names);
const sayHi = require("./5-utlils");

sayHi("susan");
sayHi(john); // sayHi(names.john)
sayHi(peter); // sayHi(names.peter)
