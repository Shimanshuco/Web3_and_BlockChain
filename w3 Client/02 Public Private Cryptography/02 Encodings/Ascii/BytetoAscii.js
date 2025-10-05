function byteToAscii(byte) {
    return byteArray.map(byte => 
        String.fromCharCode(byte)
    ).join('');
}

// Example usage
const byteArray = [72, 101, 108, 108, 111];
const asciiString = byteToAscii(byteArray);
console.log(asciiString); // Output: Hello


// Note: This function assumes that the input is a valid byte array.// If the byte values are outside the ASCII range (0-127), 
// you may need to handle those cases separately.
