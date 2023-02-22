const fs = require("fs");

setTimeout(() => console.log("Timer 1 finished"), 0);
setImmediate(() => console.log("Immediate 1 finished"));

fs.readFile("text-file.txt", () => {
  console.log("I/O finished");
  console.log("--------------------");

  //the result on the console below the line in when the code enters the event loop
  setTimeout(() => console.log("Timer 2 finished"), 0);
  setTimeout(() => console.log("Timer 3 finished"), 0);
  // setImmediate is executed once per tick
  setImmediate(() => console.log("Immediate 2 finished"));

  // a tick = an entire loop but nextTick actually means b4 the nxt loop phase
  process.nextTick(() => console.log("Process.nextTick"));
});

console.log("Hello from top-level code");
