// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require("./04-names");
// console.log(names);
const sayHi = require("./05-utils");
const data = require("./06-alternative-flavor");
console.log(data);  // Returns an object

sayHi("shaban");
sayHi(names.fakher);
sayHi(names.hammad);