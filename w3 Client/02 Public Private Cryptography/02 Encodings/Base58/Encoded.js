const bs58 = require('bs58');

function uint8ArrayToBase58(uint8Array) {
    return bs58.encode(uint8Array);
}

const byteArray = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]);
const base58Encoded = uint8ArrayToBase58(byteArray);
console.log(base58Encoded); // Outputs: 2NEpo7TZRRrLZSi2U
