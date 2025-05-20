import React from 'react';
import { ArrowRightCircle, TrendingUp, Wallet } from 'lucide-react';
import { motion } from 'framer-motion';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import PriceCard from '../components/dashboard/PriceCard';
import TransactionsList from '../components/dashboard/TransactionsList';
import EducationCard from '../components/dashboard/EducationCard';
import Button from '../components/ui/Button';
import { 
  mockAssets, 
  mockTransactions, 
  bitcoinPriceData,
  sbtcPriceData,
  exsatPriceData,
  mockStakingPools,
  mockEducationalContent 
} from '../data/mockData';

const Dashboard: React.FC = () => {
  // Calculate total portfolio value
  const totalValue = mockAssets.reduce((sum, asset) => sum + asset.value, 0);
  
  // Filter latest transactions
  const recentTransactions = mockTransactions.slice(0, 3);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Container>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Welcome Section */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, Alex</h1>
              <p className="text-gray-400 mt-1">Here's what's happening with your portfolio today.</p>
            </div>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                leftIcon={<Wallet className="w-4 h-4" />}
              >
                Deposit
              </Button>
              <Button 
                leftIcon={<ArrowRightCircle className="w-4 h-4" />}
              >
                Send Bitcoin
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Portfolio Summary */}
        <motion.div variants={itemVariants} className="mb-8">
          <Card className="p-6">
            <div className="flex flex-wrap items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-1">Portfolio Balance</h2>
                <p className="text-3xl font-bold">${totalValue.toLocaleString()}</p>
                <div className="flex items-center mt-2 text-success-500">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  <span className="font-medium">+8.34%</span>
                  <span className="text-gray-400 ml-2 text-sm">Past 24h</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-4 sm:mt-0">
                {mockAssets.map(asset => (
                  <div key={asset.id} className="flex items-center space-x-3 bg-dark-500 rounded-lg p-3">
                    <img src={asset.logo} alt={asset.name} className="w-8 h-8" />
                    <div>
                      <p className="font-medium">{asset.amount.toFixed(asset.symbol === 'BTC' || asset.symbol === 'sBTC' ? 4 : 0)} {asset.symbol}</p>
                      <p className="text-sm text-gray-400">${asset.value.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Price Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <PriceCard 
            assetName="Bitcoin"
            assetSymbol="BTC"
            price={100000}
            change24h={5.23}
            chartData={bitcoinPriceData}
            logo="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022"
          />
          
          <PriceCard 
            assetName="sBTC"
            assetSymbol="sBTC"
            price={100000}
            change24h={5.1}
            chartData={sbtcPriceData}
            logo="https://assets.coingecko.com/coins/images/12900/standard/stacks_logo.png"
          />
          
          <PriceCard 
            assetName="exSat"
            assetSymbol="EXST"
            price={1}
            change24h={12.5}
            chartData={exsatPriceData}
            logo="https://exsat.network/logo.png"
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <TransactionsList transactions={recentTransactions} />
            
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Staking Opportunities</h2>
                <Button variant="ghost" size="sm" rightIcon={<ArrowRightCircle className="w-4 h-4" />}>
                  View All
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mockStakingPools.slice(0, 2).map(pool => (
                  <Card key={pool.id} className="p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <img src={pool.logo} alt={pool.name} className="w-8 h-8" />
                      <div>
                        <h3 className="font-semibold">{pool.name}</h3>
                        <p className="text-sm text-gray-400">{pool.asset}</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <p className="text-sm text-gray-400">APY</p>
                        <p className="text-xl font-bold text-success-500">{pool.apy}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Lock Period</p>
                        <p className="text-lg font-medium">{pool.lockPeriod} days</p>
                      </div>
                    </div>
                    
                    <Button variant="outline" fullWidth>
                      {pool.userStaked && pool.userStaked > 0 ? 'Manage Stake' : 'Start Staking'}
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Right Column */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="p-4">
              <h2 className="text-xl font-semibold mb-4">Bitcoin Integration</h2>
              
              <div className="space-y-4">
                <div className="bg-dark-500 p-3 rounded-lg flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <img src="https://exsat.network/logo.png" alt="exSat" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">exSat Integration</h3>
                    <p className="text-sm text-gray-400">Extended metadata consensus</p>
                  </div>
                  <div className="w-12 h-6 bg-primary-500 rounded-full flex items-center ml-auto">
                    <div className="w-5 h-5 bg-white rounded-full translate-x-7"></div>
                  </div>
                </div>
                
                <div className="bg-dark-500 p-3 rounded-lg flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <img src="https://assets.coingecko.com/coins/images/12900/standard/stacks_logo.png" alt="sBTC" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">sBTC Integration</h3>
                    <p className="text-sm text-gray-400">Programmable Bitcoin</p>
                  </div>
                  <div className="w-12 h-6 bg-primary-500 rounded-full flex items-center ml-auto">
                    <div className="w-5 h-5 bg-white rounded-full translate-x-7"></div>
                  </div>
                </div>
                
                <div className="bg-dark-500 p-3 rounded-lg flex items-center space-x-3">
                  <div className="h-10 w-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <img src="https://rebarlabs.io/favicon.ico" alt="Rebar Shield" className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Rebar Shield</h3>
                    <p className="text-sm text-gray-400">Private transactions</p>
                  </div>
                  <div className="w-12 h-6 bg-dark-400 rounded-full flex items-center ml-auto">
                    <div className="w-5 h-5 bg-white rounded-full translate-x-1"></div>
                  </div>
                </div>
              </div>
              
              <Button className="w-full mt-4">Configure Integrations</Button>
            </Card>
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Learn & Earn</h2>
                <Button variant="ghost" size="sm" rightIcon={<ArrowRightCircle className="w-4 h-4" />}>
                  Browse All
                </Button>
              </div>
              
              <div className="space-y-4">
                {mockEducationalContent.slice(0, 2).map(lesson => (
                  <EducationCard key={lesson.id} lesson={lesson} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Dashboard;