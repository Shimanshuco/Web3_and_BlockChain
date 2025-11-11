import {
    generateKeyPairSigner,
    address,
    appendTransactionMessageInstruction,
    createTransactionMessage,
    pipe,
    setTransactionMessageFeePayerSigner,
    setTransactionMessageLifetimeUsingBlockhash,
    signTransactionMessageWithSigners,
} from '@solana/kit';

async function generateWallet() {
    const wallet = await generateKeyPairSigner();
    console.log('Generated Wallet Address:', wallet.address);
    console.log('Public Key:', wallet.keyPair.publicKey);
    console.log('Private Key:', wallet.keyPair.privateKey);
    return wallet;
}

// Run everything
(async () => {
    const wallet = await generateWallet();
})();
