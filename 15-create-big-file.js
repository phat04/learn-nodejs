const { writeFileSync } = require("fs");
for (let i = 0; i < 1000; i++) {
  writeFileSync("./content/big.txt", `hello World ${i}\n`, { flag: "a" });
}
