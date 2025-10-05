function uint8ArrayToAscii(uint8Array) {
    return new TextDecoder().decode(uint8Array);
}

const bytes = new Uint8Array([72, 101, 108, 108, 111]);
const asciiString = uint8ArrayToAscii(bytes);
console.log(asciiString); // Output: Hello

