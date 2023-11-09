// Server Side Application
const https = require("https");
const fs = require("fs");

const options = {
  port: 3005,
  key: fs.readFileSync("./server/server.key"),
  cert: fs.readFileSync("./server/server.crt"),
  passphrase: "digital",
};

https
  .createServer(options, (req, res) => {
    res.writeHead(200, {});
    res.end("<h1>Hello from server</h1>");
  })
  .listen(options.port, () =>
    console.log(`hello from server on https://localhost:3005`)
  );
