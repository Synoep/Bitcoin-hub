import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Download, ArrowUpRight, ArrowDownLeft, RefreshCw } from 'lucide-react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { mockTransactions } from '../data/mockData';

const TransactionsPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  
  const filteredTransactions = selectedType === 'all' 
    ? mockTransactions 
    : mockTransactions.filter(tx => tx.type === selectedType);
  
  const getTransactionIcon = (type: string) => {
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
  
  return (
    <Container>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Transactions</h1>
        <p className="text-gray-400 mt-1">View and manage your transaction history</p>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        
        transition={{ duration: 0.3 }}
      >
        <Card className="p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="w-full bg-dark-500 border border-dark-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-bitcoin-500"
                />
              </div>
            </div>
            
            <div className="flex space-x-4">
              <Button
                variant="outline"
                leftIcon={<Filter className="w-4 h-4" />}
              >
                Filter
              </Button>
              <Button
                variant="outline"
                leftIcon={<Download className="w-4 h-4" />}
              >
                Export
              </Button>
            </div>
          </div>
          
          <div className="flex space-x-4 mb-6">
            <Button
              variant={selectedType === 'all' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedType('all')}
            >
              All
            </Button>
            <Button
              variant={selectedType === 'send' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedType('send')}
            >
              Sent
            </Button>
            <Button
              variant={selectedType === 'receive' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedType('receive')}
            >
              Received
            </Button>
            <Button
              variant={selectedType === 'swap' ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setSelectedType('swap')}
            >
              Swaps
            </Button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-dark-400">
                  <th className="pb-4 font-medium text-gray-400">Type</th>
                  <th className="pb-4 font-medium text-gray-400">Amount</th>
                  <th className="pb-4 font-medium text-gray-400">Address</th>
                  <th className="pb-4 font-medium text-gray-400">Date</th>
                  <th className="pb-4 font-medium text-gray-400">Status</th>
                  <th className="pb-4 font-medium text-gray-400">Fee</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-dark-400">
                    <td className="py-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-dark-500 rounded-full flex items-center justify-center">
                          {getTransactionIcon(tx.type)}
                        </div>
                        <span className="capitalize">{tx.type}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={tx.type === 'receive' ? 'text-success-500' : ''}>
                        {tx.type === 'receive' ? '+' : '-'} {tx.amount.toFixed(8)} BTC
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="font-mono text-sm">{tx.address.substring(0, 8)}...{tx.address.substring(tx.address.length - 8)}</span>
                    </td>
                    <td className="py-4">
                      {new Date(tx.timestamp).toLocaleDateString()}
                    </td>
                    <td className="py-4">
                      <Badge
                        variant={
                          tx.status === 'completed' ? 'success' :
                          tx.status === 'pending' ? 'warning' : 'error'
                        }
                      >
                        {tx.status}
                      </Badge>
                    </td>
                    <td className="py-4">
                      <span className="text-gray-400">{tx.fee?.toFixed(8)} BTC</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-400">
              Showing {filteredTransactions.length} transactions
            </div>
            
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </Card>
      </motion.div>
    </Container>
  );
};

export default TransactionsPage;