import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import './App.css'
import Airdrop from './components/Airdrop';
import SignMessage from './components/SignMessage';
import ShowBalance from './components/ShowBalanace';

// Default styles that can be overridden by our app
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {


  const wallets = useMemo(() => [
    new UnsafeBurnerWalletAdapter(),
  ], []);

  return (

        <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <div className="wallet-buttons">
                <WalletMultiButton />
                <WalletDisconnectButton />
              </div>
              <h1 className="title">Wallet Adaptor</h1>
              <Airdrop />
              <SignMessage />
              <ShowBalance />
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
  )
}

export default App
