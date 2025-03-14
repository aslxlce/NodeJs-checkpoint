const generatePassword = require("password-generator");

function createRandomPassword() {
    const password = generatePassword(12, false);
    console.log("Generated Password:", password);
}
