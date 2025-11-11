import React, { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Connection } from "@solana/web3.js";
import '../index.css'

const ShowBalance = () => {
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const connection = new Connection("https://api.devnet.solana.com");
    const fetchBalance = async () => {
      if (publicKey) {
        const lamports = await connection.getBalance(publicKey);
        setBalance(lamports / 1e9); // Convert lamports to SOL
      }
    };
    fetchBalance();
  }, [publicKey]);

  return (
    <div className="flex flex-row justify-center py-10 font-mono text-3xl">
      {publicKey ? (
        <p className="text-center">Balance: {balance !== null ? `${balance} SOL` : "Loading..."}</p>
      ) : (
        <p className="text-center">Connect your wallet to see balance.</p>
      )}
    </div>
  );
};

export default ShowBalance;
