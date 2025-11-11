import React, { useState } from "react";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

const Airdrop = () => {
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const [amount, setAmount] = useState("");

  const sendAirDropToUser = async (e) => {
    e.preventDefault();
    if (!publicKey) {
      alert("Please connect your wallet first.");
      return;
    }

    const lamports = parseFloat(amount) * LAMPORTS_PER_SOL;
    if (isNaN(lamports) || lamports <= 0) {
      alert("Enter a valid amount in SOL.");
      return;
    }

    try {
      const sig = await connection.requestAirdrop(publicKey, lamports);
      await connection.confirmTransaction(sig);
      alert(`${amount} SOL airdropped to your wallet!`);
      setAmount(""); // Clear input
    } catch (err) {
      console.error("Airdrop failed:", err);
      alert("Airdrop failed. Try again later.");
    }
  };

  return (
    <form
      onSubmit={sendAirDropToUser}
      className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10"
    >
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount in SOL"
        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-60 text-center font-mono"
      />
      <button
        type="submit"
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-mono"
      >
        Send Airdrop
      </button>
    </form>
  );
};

export default Airdrop;
