const fs = require("fs");
const http = require("http");
const url = require("url");

//Blocking, Synchronous way
// const textIn = fs.readFileSync("./text/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `\nNode is just so lovevable.\nStarted on March 09`;
// fs.writeFileSync("./text/output.txt", textOut);
// console.log("file written");

//Non-blocking Asynchronous way
// fs.readFile("./text/output.txt", "utf-8", (err, data) => {
//   fs.readFile(`./text/${data}.txt`, "utf-8", (err, data1) => {
//     console.log(data1);
//   });
// });
// console.log("file read");

// SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathname = req.url;

  if (pathname === "/" || pathname === "/overview") {
    res.end("this is the OVERVIEW");
  } else if (pathname === "/product") {
    res.end("this is the PRODUCT");
  } else if (pathname === "/api") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "Hello there",
    });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to request on port 8000");
});
