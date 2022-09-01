const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
    return;
  }
  if (req.url === "/about") {
    res.end("About page");
    return;
  }
  res.end("Error page");
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000...");
});
