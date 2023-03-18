const EventEmitter = require("events");
const http = require("http");

//Sales class inherits from EventEmmitter
class Sales extends EventEmitter {
  constructor() {
    // Rem using super, we inherit all the parent methods
    super();
  }
}

const myEmitter = new Sales();

// this is an observer which is triggered when an event is emitted
myEmitter.on("newSale", () => {
  console.log("There was a new sale");
});

myEmitter.on("newSale", () => {
  console.log("Costumer name: Sundze");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are ${stock} items left in stock`);
});

myEmitter.emit("newSale", 9);

//////////////////////////////

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received");
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another request 😊");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("waiting for requests...");
});
