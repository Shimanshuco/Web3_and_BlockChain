import * as spec from "@noble/secp256k1";

async function main(){
    const privateKey = spec.utils.randomPrivateKey();

    const publicKey = spec.getPublicKey(privateKey);

    const msgHash = new Uint8Array(32);
    for (let i = 0; i < msgHash.length; i++) {
        msgHash[i] = i;
    }
    const signature = await spec.sign(msgHash, privateKey);
    
    const isValid = await spec.verify(signature, msgHash, publicKey);
    
    console.log("Is the signature valid? ", isValid);
}

main();