function hexToArray(hexString) {
    const byteArray = new Uint8Array(hexString.length / 2);
    for(let i = 0; i < hexString.length; i++) {
        byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
    }
    return byteArray;
}

// Example usage:
const hexString = "48656c6c6f2c20576f726c6421"; // "Hello, World!" in hex
const byteArray = hexToArray(hexString);
console.log(byteArray); // Uint8Array(13) [ 72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33 ]