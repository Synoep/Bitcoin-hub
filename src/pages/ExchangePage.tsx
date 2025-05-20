import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft, Info, AlertCircle } from 'lucide-react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { mockAssets } from '../data/mockData';

const ExchangePage: React.FC = () => {
  const [fromAsset, setFromAsset] = useState(mockAssets[0]);
  const [toAsset, setToAsset] = useState(mockAssets[1]);
  const [amount, setAmount] = useState('');
  
  return (
    <Container size="sm">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Exchange</h1>
        <p className="text-gray-400 mt-1">Swap between Bitcoin assets using exSat's decentralized exchange</p>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">From</h2>
              <div className="text-sm text-gray-400">
                Balance: {fromAsset.amount} {fromAsset.symbol}
              </div>
            </div>
            
            <div className="mt-2 flex space-x-4">
              <div className="flex-1">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-dark-500 border border-dark-400 rounded-lg px-4 py-3 text-xl font-medium focus:outline-none focus:ring-2 focus:ring-bitcoin-500"
                  placeholder="0.00"
                />
              </div>
              
              <button className="flex items-center space-x-2 bg-dark-500 border border-dark-400 rounded-lg px-4 py-3">
                <img src={fromAsset.logo} alt={fromAsset.name} className="w-6 h-6" />
                <span className="font-medium">{fromAsset.symbol}</span>
              </button>
            </div>
          </div>
          
          <div className="flex justify-center my-4">
            <button className="p-2 bg-dark-500 rounded-full hover:bg-dark-400 transition-colors">
              <ArrowRightLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">To</h2>
              <div className="text-sm text-gray-400">
                Balance: {toAsset.amount} {toAsset.symbol}
              </div>
            </div>
            
            <div className="mt-2 flex space-x-4">
              <div className="flex-1">
                <input
                  type="number"
                  value={(parseFloat(amount || '0') * 1.0002).toFixed(8)}
                  className="w-full bg-dark-500 border border-dark-400 rounded-lg px-4 py-3 text-xl font-medium focus:outline-none focus:ring-2 focus:ring-bitcoin-500"
                  placeholder="0.00"
                  disabled
                />
              </div>
              
              <button className="flex items-center space-x-2 bg-dark-500 border border-dark-400 rounded-lg px-4 py-3">
                <img src={toAsset.logo} alt={toAsset.name} className="w-6 h-6" />
                <span className="font-medium">{toAsset.symbol}</span>
              </button>
            </div>
          </div>
          
          <div className="bg-dark-500 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Exchange Rate</span>
              <span>1 {fromAsset.symbol} = 1.0002 {toAsset.symbol}</span>
            </div>
            
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400">Network Fee</span>
              <span>0.0001 BTC</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Slippage Tolerance</span>
              <span>0.5%</span>
            </div>
          </div>
          
          <div className="bg-primary-500/10 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
              <p className="text-sm text-primary-400">
                This exchange is powered by exSat's decentralized protocol, ensuring secure and transparent swaps with minimal slippage.
              </p>
            </div>
          </div>
          
          <Button 
            variant="primary" 
            fullWidth 
            size="lg"
            leftIcon={<ArrowRightLeft className="w-5 h-5" />}
          >
            Swap {fromAsset.symbol} to {toAsset.symbol}
          </Button>
        </Card>
        
        <Card className="mt-6 p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Swaps</h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-dark-400">
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <img src={mockAssets[0].logo} alt="BTC" className="w-6 h-6" />
                  <ArrowRightLeft className="w-4 h-4 mx-2" />
                  <img src={mockAssets[1].logo} alt="sBTC" className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">0.5 BTC → 0.4998 sBTC</p>
                  <p className="text-sm text-gray-400">2 minutes ago</p>
                </div>
              </div>
              <Badge variant="success">Completed</Badge>
            </div>
            
            <div className="flex items-center justify-between py-3 border-b border-dark-400">
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <img src={mockAssets[2].logo} alt="EXST" className="w-6 h-6" />
                  <ArrowRightLeft className="w-4 h-4 mx-2" />
                  <img src={mockAssets[0].logo} alt="BTC" className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-medium">1000 EXST → 0.001 BTC</p>
                  <p className="text-sm text-gray-400">15 minutes ago</p>
                </div>
              </div>
              <Badge variant="success">Completed</Badge>
            </div>
          </div>
        </Card>
      </motion.div>
    </Container>
  );
};

export default ExchangePage;