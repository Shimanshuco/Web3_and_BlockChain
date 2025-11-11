import bs58 from 'bs58';

const publicKey = "";
const privatekey ="";

const publickeyBytes = bs58.decode(publicKey);
const privatekeyBytes = bs58.decode(privatekey);

console.log('Public Key Bytes:', publickeyBytes);
console.log('Private Key Bytes:', privatekeyBytes);

                                                                                                                  