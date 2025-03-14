const fs = require("fs");

const content = "Hello Node";

fs.writeFile("welcome.txt", content, (err) => {
    if (err) console.log("Error writing to file:", err);
    console.log("File created successfully!");
});
