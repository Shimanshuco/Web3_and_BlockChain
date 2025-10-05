import {ethers} from 'ethers';

const wallet = ethers.Wallet.createRandom();

const publicKey = wallet.address;
const privateKey = wallet.privateKey;

console.log("Public Key (Address):", publicKey);
console.log("Private Key:", privateKey);

const message = "Hello, Ethereum!";

const signature = await wallet.signMessage(message);
console.log("Signature:", signature);

const recoveredAddress = ethers.utils.verifyMessage(message, signature);

console.log("Recovered Address:", recoveredAddress);

console.log("Signature valid:", recoveredAddress === publicKey);