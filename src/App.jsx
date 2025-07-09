
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {HomePage} from './pages/HomePage'; 
import { DashBoard } from './pages/DashBoard';
import { Airdrop } from './pages/Airdrop';
import { SendToken } from './pages/SendToken';

function App() {

  return (
    <ConnectionProvider endpoint={"https://ultra-frosty-brook.solana-devnet.quiknode.pro/0b79e99ea3785ed33e3117d8c81aeb341665e147/"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>

          <BrowserRouter>
          <Routes>
            <Route path="/" element = {<HomePage />} />
            <Route path="/dashboard" element = {<DashBoard />} />
            <Route path="/airdrop" element = {<Airdrop />} />
            <Route path="/send" element = {<SendToken />} />
          </Routes>
          </BrowserRouter>        
      
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
