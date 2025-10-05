import {keypair} from '@solana/web3.js';

// Generate a new random keypair
const newKeypair = keypair.generate();

const publicKey = newKeypair.publicKey.toString();
const secretKey = newKeypair.secretKey.toString('hex');

console.log('Public Key:', publicKey);
console.log('Secret Key:', secretKey);

const message = new TextEncoder().encode('Hello, Solana!');

// Sign the message
const signature = keypair.sign(message, newKeypair.secretKey);

const result = nacl.sign.detached.verify(
    message,
    signature,
    keypair.publicKey.toBytes(),
);

console.log('Signature valid:', result);