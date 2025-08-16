const x = 0;
console.log(x);

const y = 202;
console.log(y);

const z = [202,244,1,3];
console.log(z);

let bytes = new Uint8Array([72, 101, 108, 108, 111]);
console.log(bytes);

let str = new TextDecoder().decode(bytes);
console.log(str); // "Hello"

let abytes = new TextEncoder().encode("Hello");
console.log(abytes); // Uint8Array(5) [72, 101, 108, 108, 111]


