function asciitoBytes(asciiString){
    const byteArray = [];
    for (let i=0; i< asciiString.length; i++) {
        byteArray.push(asciiString.charCodeAt(i));
    }
    return byteArray;
}

const asciiString = "Hello";
const byteArray = asciitoBytes(asciiString);
console.log(byteArray); // Output: [72, 101, 108, 108, 111]
