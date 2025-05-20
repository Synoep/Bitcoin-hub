import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, QrCode, Download, ArrowUpRight, ArrowDownLeft, EyeOff, Eye } from 'lucide-react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import TransactionsList from '../components/dashboard/TransactionsList';
import { mockTransactions, mockAssets } from '../data/mockData';

const WalletPage: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState('transactions');
  
  // Placeholder wallet data
  const walletAddress = 'bc1q39r48qx04szrqs4qpnjhpx9ft9qwndh44rsjgf';
  
  const totalBalance = mockAssets.reduce((total, asset) => {
    return total + asset.value;
  }, 0);
  
  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    // In a real app, you would show a toast notification here
  };
  
  return (
    <Container>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Bitcoin Wallet</h1>
        <p className="text-gray-400 mt-1">Manage your Bitcoin and send/receive transactions</p>
      </div>
      
      {/* Wallet Balance Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h2 className="text-xl font-semibold">Total Balance</h2>
                <button onClick={() => setShowBalance(!showBalance)}>
                  {showBalance ? (
                    <EyeOff className="w-4 h-4 text-gray-400" />
                  ) : (
                    <Eye className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
              
              <div className="mb-4">
                {showBalance ? (
                  <h3 className="text-3xl font-bold">${totalBalance.toLocaleString()}</h3>
                ) : (
                  <h3 className="text-3xl font-bold">••••••</h3>
                )}
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button 
                  variant="primary" 
                  leftIcon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Send
                </Button>
                <Button 
                  variant="outline" 
                  leftIcon={<ArrowDownLeft className="w-4 h-4" />}
                >
                  Receive
                </Button>
                <Button 
                  variant="ghost" 
                  leftIcon={<QrCode className="w-4 h-4" />}
                >
                  QR Code
                </Button>
              </div>
            </div>
            
            <div className="mt-6 md:mt-0">
              <div className="bg-dark-500 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <p className="text-sm text-gray-400">Wallet Address</p>
                  <div className="flex space-x-2">
                    <button 
                      onClick={handleCopyAddress}
                      className="text-primary-400 hover:text-primary-300"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                    <button className="text-primary-400 hover:text-primary-300">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <p className="font-mono text-sm break-all">{walletAddress}</p>
                <div className="mt-3">
                  <Badge variant="primary" size="sm">Legacy Segwit</Badge>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
      
      {/* Assets List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="mb-8"
      >
        <h2 className="text-xl font-semibold mb-4">Your Assets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockAssets.map(asset => (
            <Card key={asset.id} className="p-4">
              <div className="flex items-center space-x-3">
                <img src={asset.logo} alt={asset.name} className="w-10 h-10" />
                <div>
                  <h3 className="font-semibold">{asset.name}</h3>
                  <p className="text-sm text-gray-400">{asset.symbol}</p>
                </div>
              </div>
              
              <div className="mt-4">
                {showBalance ? (
                  <>
                    <p className="text-2xl font-bold">
                      {asset.amount.toFixed(asset.symbol === 'BTC' || asset.symbol === 'sBTC' ? 8 : 2)} {asset.symbol}
                    </p>
                    <p className="text-gray-400">${asset.value.toLocaleString()}</p>
                  </>
                ) : (
                  <>
                    <p className="text-2xl font-bold">••••••</p>
                    <p className="text-gray-400">••••••</p>
                  </>
                )}
              </div>
              
              <div className="mt-4 flex space-x-2">
                <Button variant="outline" size="sm" fullWidth>Send</Button>
                <Button variant="ghost" size="sm" fullWidth>Receive</Button>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
      
      {/* Transactions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className="border-b border-dark-400 mb-6">
          <div className="flex space-x-8">
            <button
              className={`py-3 relative ${activeTab === 'transactions' 
                ? 'text-white font-medium' 
                : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('transactions')}
            >
              Transactions
              {activeTab === 'transactions' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-bitcoin-500"
                />
              )}
            </button>
            
            <button
              className={`py-3 relative ${activeTab === 'staking' 
                ? 'text-white font-medium' 
                : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('staking')}
            >
              Staking
              {activeTab === 'staking' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-bitcoin-500"
                />
              )}
            </button>
            
            <button
              className={`py-3 relative ${activeTab === 'history' 
                ? 'text-white font-medium' 
                : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('history')}
            >
              History
              {activeTab === 'history' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-bitcoin-500"
                />
              )}
            </button>
          </div>
        </div>
        
        {activeTab === 'transactions' && (
          <TransactionsList transactions={mockTransactions} />
        )}
        
        {activeTab === 'staking' && (
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Staking Opportunities</h3>
            <p className="text-gray-400">Stake your Bitcoin assets to earn passive income through various protocols.</p>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-dark-400 rounded-lg p-4">
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">exSat Staking</h4>
                    <Badge variant="primary">8.5% APY</Badge>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Help secure the exSat network and earn rewards</p>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" fullWidth>Start Staking</Button>
                </div>
              </div>
              
              <div className="border border-dark-400 rounded-lg p-4">
                <div className="mb-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">sBTC Yield</h4>
                    <Badge variant="primary">5.2% APY</Badge>
                  </div>
                  <p className="text-sm text-gray-400 mt-1">Provide liquidity to the sBTC ecosystem</p>
                </div>
                
                <div className="mt-6">
                  <Button variant="outline" fullWidth>Start Staking</Button>
                </div>
              </div>
            </div>
          </Card>
        )}
        
        {activeTab === 'history' && (
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Transaction History</h3>
            <p className="text-gray-400 mb-6">View your complete transaction history across all assets.</p>
            
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">All</Button>
                <Button variant="ghost" size="sm">Send</Button>
                <Button variant="ghost" size="sm">Receive</Button>
                <Button variant="ghost" size="sm">Swap</Button>
              </div>
              
              <div>
                <Button variant="outline" size="sm" leftIcon={<Download className="w-4 h-4" />}>
                  Export
                </Button>
              </div>
            </div>
            
            <TransactionsList transactions={mockTransactions} />
          </Card>
        )}
      </motion.div>
    </Container>
  );
};

export default WalletPage;