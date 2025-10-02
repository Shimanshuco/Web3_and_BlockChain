import React from "react"
import {useConnection, useWallet} from "@solana/wallet-adapter-react"
import { Connection } from "@solana/web3.js";
const Airdrop = () => {
    const wallet = useWallet();
    const { connection } = useConnection();
    async function sendAirDropToUser(e){
        e.preventDefault();
        await connection.requestAirdrop(wallet.publicKey, 10);
        alert("10 lamports airdropped to your account");
    }
    return(
        <form className="airdrop-form" onSubmit={sendAirDropToUser}>
          <input type="text" placeholder="Amount" className="airdrop-input" />
          <button type="submit" className="airdrop-btn">Send Airdrop</button>
        </form>
    )
}

export default Airdrop;