const crypto = require('crypto');

//Generate a random encryption key
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16) //Initialization vector (v)

//Function to encrypt text
function encrypt(text){
    const cipher = crypto.createCipheriv('aes-256-cbc',key ,iv);
    let encrypted = cipher.update(text ,'utf-8','hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

//Function to decrypt text
function decrypt(encryptedtext){
    const decipher = crypto.createDecipheriv('aes-256-cbc',key,iv);
    let decrypted = decipher.update(encryptedtext,'hex','utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}

//Example
const textToEncrypt = 'Hello World';
const encryptedtext = encrypt(textToEncrypt);
const decryptedText = decrypt(encryptedtext);

console.log('Original Text:', textToEncrypt);
console.log('Encrypted Text:', encryptedtext);
console.log('Decrypted Text:', decryptedText);  