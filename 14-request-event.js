const http = require("http");

// const server = http.createServer('request',(req, res)=>{
//     res.end('welcom')
//     return
// });

//Using Event Emitter API

const server = http.createServer();
//Emitter request event
//subcribe to it/ listen for it/ reponse to it
server.on("request", (req, res) => {
  res.end("welcom");
  return;
});
server.listen(5000);
