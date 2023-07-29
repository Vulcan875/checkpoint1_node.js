const generatePassword = require('generate-password');

function generateRandomPassword(length = 10) {
    const password = generatePassword.generate({
        length: length,
        numbers: true,
        symbols: true,
        uppercase: true,
        excludeSimilarCharacters: true,
    });

    return password;
}

const passwordLength = 12; // You can change the password length here
const password = generateRandomPassword(passwordLength);
console.log("Generated Password:", password);
