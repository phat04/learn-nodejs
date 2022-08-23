const { readFile, writeFile } = require("fs");

console.log("start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-aSync.txt",
      `Here is result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
        console.log("done with this task");
      }
    );
  });
});

console.log("starting the next one");

// arrow function
// const writeFile = (fileName, callback) => {
//   const err = "";
//   // read file name
//   console.log(" Đã đọc file ./content/second.txt");
//   const result = "CC";
//   callback(err, result);
// };
// const cb = (err, result) => {
//   if (err != "") {
//     console.log("Error");
//     return;
//   }

//   console.log("Nội dung trong file là", result);
// };
// writeFile("Nguyen", cb);
