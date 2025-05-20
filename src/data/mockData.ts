import { Transaction, Asset, ChartData, StakingPool, EducationalContent } from '../types';

// Helper to generate random price chart data
const generateChartData = (days: number, startPrice: number, volatility: number, trend: number): ChartData[] => {
  const data: ChartData[] = [];
  let currentPrice = startPrice;
  
  const today = new Date();
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    
    // Add some randomness with a trend bias
    const change = (Math.random() - 0.5) * volatility + trend;
    currentPrice = Math.max(0, currentPrice * (1 + change / 100));
    
    data.push({
      date: date.toISOString().split('T')[0],
      value: currentPrice,
    });
  }
  
  return data;
};

// Mock Transactions
export const mockTransactions: Transaction[] = [
  {
    id: 't1',
    amount: 0.25,
    type: 'receive',
    status: 'completed',
    timestamp: '2025-04-15T14:30:00Z',
    address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    fee: 0.00004,
  },
  {
    id: 't2',
    amount: 0.15,
    type: 'send',
    status: 'completed',
    timestamp: '2025-04-14T09:45:00Z',
    address: 'bc1qeujtlxvyx7mad92v2saq25e3m9wzq9qsayytkm',
    fee: 0.00003,
    notes: 'Payment for laptop',
  },
  {
    id: 't3',
    amount: 0.05,
    type: 'swap',
    status: 'completed',
    timestamp: '2025-04-13T18:20:00Z',
    address: 'bc1qp8h84vhfsdctg8ehvwu6va4qj5uvvck75n62f0',
    fee: 0.00002,
  },
  {
    id: 't4',
    amount: 0.1,
    type: 'send',
    status: 'pending',
    timestamp: '2025-04-15T16:10:00Z',
    address: 'bc1q34aq5drpuwy3wgl9uj6l7g4hft8qha42tgxp6m',
    fee: 0.00004,
  },
];

// Mock Assets
export const mockAssets: Asset[] = [
  {
    id: 'btc',
    name: 'Bitcoin',
    symbol: 'BTC',
    amount: 1.45,
    value: 145000,
    change24h: 5.23,
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022',
  },
  {
    id: 'sbtc',
    name: 'sBTC',
    symbol: 'sBTC',
    amount: 0.75,
    value: 75000,
    change24h: 5.1,
    logo: 'https://assets.coingecko.com/coins/images/12900/standard/stacks_logo.png',
  },
  {
    id: 'exsat',
    name: 'exSat',
    symbol: 'EXST',
    amount: 2500,
    value: 2500,
    change24h: 12.5,
    logo: 'https://exsat.network/logo.png',
  },
];

// Mock Chart Data
export const bitcoinPriceData = generateChartData(30, 80000, 3, 0.2);
export const sbtcPriceData = generateChartData(30, 80000, 2.8, 0.18);
export const exsatPriceData = generateChartData(30, 0.8, 6, 0.6);

// Mock Staking Pools
export const mockStakingPools: StakingPool[] = [
  {
    id: 'p1',
    name: 'exSat Yield Pool',
    asset: 'EXST',
    apy: 8.5,
    totalStaked: 1250000,
    userStaked: 1000,
    lockPeriod: 30,
    logo: 'https://exsat.network/logo.png',
  },
  {
    id: 'p2',
    name: 'sBTC Liquidity Pool',
    asset: 'sBTC',
    apy: 5.2,
    totalStaked: 120,
    userStaked: 0.1,
    lockPeriod: 0,
    logo: 'https://assets.coingecko.com/coins/images/12900/standard/stacks_logo.png',
  },
  {
    id: 'p3',
    name: 'Bitcoin Lightning Node',
    asset: 'BTC',
    apy: 3.1,
    totalStaked: 25,
    userStaked: 0,
    lockPeriod: 90,
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=022',
  },
];

// Mock Educational Content
export const mockEducationalContent: EducationalContent[] = [
  {
    id: 'e1',
    title: 'Understanding exSat Metadata Consensus',
    description: 'Learn how exSat extends Bitcoin\'s metadata consensus with a hybrid mechanism combining PoW and PoS.',
    difficulty: 'intermediate',
    duration: '20 min',
    completed: true,
    progress: 100,
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
  },
  {
    id: 'e2',
    title: 'sBTC: Bitcoin on Stacks Simplified',
    description: 'Explore how sBTC brings Bitcoin\'s security to the programmable world of Stacks blockchain.',
    difficulty: 'beginner',
    duration: '15 min',
    completed: false,
    progress: 60,
    image: 'https://images.pexels.com/photos/5980743/pexels-photo-5980743.jpeg',
  },
  {
    id: 'e3',
    title: 'Rebar Shield: Private Bitcoin Transactions',
    description: 'Discover how Rebar Shield allows Bitcoin transactions to bypass the public mempool for enhanced privacy.',
    difficulty: 'intermediate',
    duration: '25 min',
    completed: false,
    progress: 0,
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
  },
  {
    id: 'e4',
    title: 'BIP300: P2P Sidechains Explained',
    description: 'Deep dive into Bitcoin Improvement Proposal 300 and how it enables trustless sidechains.',
    difficulty: 'advanced',
    duration: '40 min',
    completed: false,
    progress: 0,
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
  },
];