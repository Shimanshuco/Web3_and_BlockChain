import React, { useMemo } from 'react';
import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import './App.css';

import Airdrop from './components/Airdrop';
import SignTransaction from './components/SignTransaction'
import ShowBalance from './components/ShowBalanace';

import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint="https://api.devnet.solana.com">
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">

            {/* Wallet Buttons */}
            <div className="flex flex-row justify-center gap-4 mb-6">
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-mono text-center mb-10">
              Wallet Adapter
            </h1>

            {/* Airdrop Component */}
            <Airdrop />

            {/* Balance Section */}
            <h2 className="text-5xl font-mono text-center mt-16 mb-6">
              Show Balance
            </h2>
            <ShowBalance />
            <h2 className="text-5xl font-mono text-center mt-16 mb-6">
              Sign Transaction
            </h2>
            <SignTransaction />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
