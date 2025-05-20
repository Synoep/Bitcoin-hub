import React from 'react';
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react';
import Card from '../ui/Card';
import PriceChart from './PriceChart';
import { ChartData } from '../../types';

interface PriceCardProps {
  assetName: string;
  assetSymbol: string;
  price: number;
  change24h: number;
  chartData: ChartData[];
  logo: string;
  className?: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  assetName,
  assetSymbol,
  price,
  change24h,
  chartData,
  logo,
  className = '',
}) => {
  const isPositive = change24h >= 0;

  return (
    <Card className={`p-4 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <img src={logo} alt={assetName} className="w-8 h-8" />
          <div>
            <h3 className="font-semibold text-white">{assetName}</h3>
            <span className="text-sm text-gray-400">{assetSymbol}</span>
          </div>
        </div>
        <div className={`flex items-center ${isPositive ? 'text-success-500' : 'text-error-500'}`}>
          {isPositive ? (
            <ArrowUpCircle className="w-4 h-4 mr-1" />
          ) : (
            <ArrowDownCircle className="w-4 h-4 mr-1" />
          )}
          <span className="font-medium">{isPositive ? '+' : ''}{change24h.toFixed(2)}%</span>
        </div>
      </div>
      
      <div className="mb-3">
        <span className="text-xs text-gray-400">Current Price</span>
        <h2 className="text-2xl font-bold text-white">${price.toLocaleString()}</h2>
      </div>
      
      <div className="h-24">
        <PriceChart data={chartData} isPositive={isPositive} />
      </div>
    </Card>
  );
};

export default PriceCard;