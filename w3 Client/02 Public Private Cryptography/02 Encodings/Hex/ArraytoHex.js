function arrayToHex(array) {
    let hexString = '';
    for (let i = 0; i < array.length; i++) {
        hexString += array[i].toString(16).padStart(2, '0');
    }
    return hexString;
}

// Example usage:
const byteArray = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]);
const hexString = arrayToHex(byteArray);
console.log(hexString); // "48656c6c6f2c20576f726c6421"