// class Calculator {
//   constructor(calculator) {
//     this.calculator = calculator;
//   }

//   add(a, b) {
//     return a + b;
//   }

//   subtract(a, b) {
//     return a - b;
//   }

//   multiply(a, b) {
//     return a * b;
//   }

//   divide(a, b) {
//     return a / b;
//   }
// }

// //we use module.exports when we want to export a single class
// module.exports = Calculator;

//or

module.exports = class Calculator {
  constructor(calculator) {
    this.calculator = calculator;
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
};
