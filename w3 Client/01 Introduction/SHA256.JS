const crypto = require('crypto'); //Cryptography

const input="Himanshu";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash);