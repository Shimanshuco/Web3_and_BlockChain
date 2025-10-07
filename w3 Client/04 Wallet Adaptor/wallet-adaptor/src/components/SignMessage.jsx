import React, { useState } from "react" 
import { useCallback } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Connection, Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { PublicKey } from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com");

const SignMessage = () => {
    const { publicKey, sendTransaction } = useWallet();
    // Correct useState usage: array destructuring, initial value is empty string
    const [receiverAddress, setReceiverAddress] = useState("");

    // Function to handle sending SOL
    const onClick = useCallback(async () => {
        if (!publicKey) throw new WalletNotConnectedError();
        if (!receiverAddress) {
            alert("Please enter a receiver address.");
            return;
        }
        // Get minimum lamports for rent exemption (for demonstration, you may want to set a custom amount)
        const lamports = await connection.getMinimumBalanceForRentExemption(0);

        // Convert receiverAddress to PublicKey
        let toPubkey;
        try {
            toPubkey = new PublicKey(receiverAddress);
        } catch (e) {
            try {
                toPubkey = new (await import("@solana/web3.js")).PublicKey(receiverAddress);
            } catch {
                alert("Invalid receiver address.");
                return;
            }
        }

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey,
                lamports,
            })
        );

        const {
            context: { slot: minContextSlot },
            value: { blockhash, lastValidBlockHeight }
        } = await connection.getLatestBlockhashAndContext();

        const signature = await sendTransaction(transaction, connection, { minContextSlot });

        await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });
        alert(`Transaction sent! Signature: ${signature}`);
    }, [publicKey, sendTransaction, receiverAddress]);

    return (
        <>
            {/* Controlled input for receiver address */}
            <input
                type="text"
                value={receiverAddress}
                onChange={e => setReceiverAddress(e.target.value)}
                placeholder="Add Receiver's Address"
            />
            <button onClick={onClick} disabled={!publicKey}>
                Send SOL
            </button>
        </>
    );
};

export default SignMessage;