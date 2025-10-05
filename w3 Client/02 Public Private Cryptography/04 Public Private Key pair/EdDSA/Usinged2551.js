import * as ed from "@noble/ed25519";

async function main(){

    // Generate a random private key
    const privatekey = ed.utils.randomPrivateKey();

    // Get the public key from the private key
    const publickey = await ed.getPublicKeyAsync(privatekey);

    // Message to be signed
    const message = new TextEncoder().encode("hello world");

    // Sign the message with the private key
    const signature = await ed.signAsync(message , privatekey);

    // Verify the signature with the public key
    const isValid = await ed.verifyAsync(signature, message, publickey);

    console.log("Is the signature valid? ", isValid);

}

main();