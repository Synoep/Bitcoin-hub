export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
};

export type Transaction = {
  id: string;
  amount: number;
  type: 'send' | 'receive' | 'swap';
  status: 'pending' | 'completed' | 'failed';
  timestamp: string;
  address: string;
  fee?: number;
  notes?: string;
};

export type Asset = {
  id: string;
  name: string;
  symbol: string;
  amount: number;
  value: number;
  change24h: number;
  logo: string;
};

export type ChartData = {
  date: string;
  value: number;
};

export type Notification = {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  timestamp: string;
};

export type StakingPool = {
  id: string;
  name: string;
  asset: string;
  apy: number;
  totalStaked: number;
  userStaked?: number;
  lockPeriod: number; // in days
  logo: string;
};

export type EducationalContent = {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  completed?: boolean;
  progress?: number;
  image: string;
};

export type WalletType = {
  id: string;
  balance: number;
  address: string;
  transactions: Transaction[];
};