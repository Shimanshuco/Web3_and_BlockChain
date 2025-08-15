//Proof of Work
const crypto = require("crypto");

function findHashMapWithPrefix(prefix){
    let input=0;
    while(true){
        let inputStr = "himanshu"+input.toString();
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
        if(hash.startsWith(prefix)){
            return {input : inputStr , hash : hash};
        }
        input++;
    }
}

const result = findHashMapWithPrefix('00000');
console.log(`Input : ${result.input}`);
console.log(`Hash : ${result.hash}`);