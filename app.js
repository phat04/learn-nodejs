const EventEmitter = require("events");
const customEmitter = new EventEmitter();
customEmitter.on("reponse", (name, id) => {
  console.log(`data recieved ${name} with id:${id}`);
});

customEmitter.on("reponse", () => {
  console.log(`The other logic here`);
});

customEmitter.emit("reponse", "Phat", 44);
