const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcom to our homepageccccccccccccccc");
    return;
  }
  if (req.url === "/about") {
    res.write("Here is short history");

    return;
  }
  res.end(
    `<h1>Oops!</h1>
    <p>We can't find page you are looking for</p>
    <a href = "/">backhome</a>`
  );
  //   res.write("welcom to our homepage");
  //   res.end();
});
server.listen(5000, () => {
  console.log("Server is running on port ", 5000);
});
