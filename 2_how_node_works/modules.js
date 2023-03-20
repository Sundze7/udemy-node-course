// console.log(arguments);
// // the node wrapper function
// console.log(require("module").wrapper);

//module.exports
const C = require("./test-module-1");
const cal1 = new C();
console.log(cal1.add(5, 6));

//exports
//const cal2 = require("./test-module-2");
//ES6 destructuring
const { add, multiply } = require("./test-module-2");
console.log(multiply(5, 10));

//caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
