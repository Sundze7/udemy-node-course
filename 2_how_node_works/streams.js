const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  //solution 1: without streams
  //   fs.readFile("text-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  //solution 2: using streams
  //   const readable = fs.createReadStream("text-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File not found");
  //   });

  //Solution 3: Using pipe() to resolve back-presure
  const readable = fs.createReadStream("text-file.txt");
  readable.pipe(res);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening...");
});
