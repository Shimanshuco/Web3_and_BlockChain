const bs58 = require('bs58');

function base58toUint8Array(base58String) {
    return bs58.decode(base58String);
}

// Example usage:
const base58Encoded = '2NEpo7TZRRrLZSi2U';
const decodedArray = base58toUint8Array(base58Encoded);
console.log(decodedArray); // Outputs: Uint8Array(13) [ 72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33 ]
