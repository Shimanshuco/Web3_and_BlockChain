function asciitoUInt8Array(asciiString) {
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}


// Example usage:
const asciiString = "Hello, World!";
const uint8Array = asciitoUInt8Array(asciiString);
console.log(uint8Array); // Uint8Array(13) [ 72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33 ]
