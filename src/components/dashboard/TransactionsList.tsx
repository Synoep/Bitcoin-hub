import React from 'react';
import { ArrowDownLeft, ArrowUpRight, RefreshCw } from 'lucide-react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { Transaction } from '../../types';

interface TransactionsListProps {
  transactions: Transaction[];
  className?: string;
}

const TransactionsList: React.FC<TransactionsListProps> = ({
  transactions,
  className = '',
}) => {
  const getTransactionIcon = (type: Transaction['type']) => {
    switch (type) {
      case 'receive':
        return <ArrowDownLeft className="w-5 h-5 text-success-500" />;
      case 'send':
        return <ArrowUpRight className="w-5 h-5 text-error-500" />;
      case 'swap':
        return <RefreshCw className="w-5 h-5 text-primary-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: Transaction['status']) => {
    switch (status) {
      case 'completed':
        return <Badge variant="success" size="sm">Completed</Badge>;
      case 'pending':
        return <Badge variant="warning" size="sm">Pending</Badge>;
      case 'failed':
        return <Badge variant="error" size="sm">Failed</Badge>;
      default:
        return null;
    }
  };

  const formatAddress = (address: string) => {
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <Card className={`p-4 ${className}`}>
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      
      <div className="space-y-4">
        {transactions.length === 0 ? (
          <p className="text-center text-gray-400 py-4">No transactions yet</p>
        ) : (
          transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between py-2 border-b border-dark-400 last:border-0">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-dark-400 rounded-full">
                  {getTransactionIcon(tx.type)}
                </div>
                
                <div>
                  <div className="font-medium text-white">
                    {tx.type === 'receive' ? 'Received' : tx.type === 'send' ? 'Sent' : 'Swapped'} Bitcoin
                  </div>
                  <div className="text-sm text-gray-400">
                    {formatAddress(tx.address)} • {new Date(tx.timestamp).toLocaleDateString()}
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                <div className={`font-medium ${tx.type === 'receive' ? 'text-success-500' : 'text-white'}`}>
                  {tx.type === 'receive' ? '+' : tx.type === 'send' ? '-' : ''} {tx.amount.toFixed(8)} BTC
                </div>
                <div className="mt-1">
                  {getStatusBadge(tx.status)}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      
      {transactions.length > 0 && (
        <button className="w-full mt-4 py-2 text-sm text-primary-400 hover:text-primary-300 transition-colors">
          View All Transactions
        </button>
      )}
    </Card>
  );
};

export default TransactionsList;