const fs = require("fs");

fs.readFile("hello.txt", "utf8", (err, data) => {
    if (err) console.error("Error reading the file:", err);

    console.log("File Content:", data);
});
