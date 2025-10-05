const uint8Array = new Uint8Array([72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33]);
const base64Encoded = Buffer.from(uint8Array).toString('base64');
console.log(base64Encoded); // Outputs: SGVsbG8sIFdvcmxkIQ==