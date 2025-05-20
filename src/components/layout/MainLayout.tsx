import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { Notification } from '../../types';

// Mock notifications
const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Transaction Confirmed',
    message: 'Your BTC transaction of 0.05 BTC has been confirmed.',
    type: 'success',
    read: false,
    timestamp: '2025-04-15T14:30:00Z',
  },
  {
    id: '2',
    title: 'Price Alert',
    message: 'Bitcoin price reached your target of $100,000!',
    type: 'info',
    read: false,
    timestamp: '2025-04-15T10:15:00Z',
  },
  {
    id: '3',
    title: 'Security Alert',
    message: 'New login detected from San Francisco, USA.',
    type: 'warning',
    read: true,
    timestamp: '2025-04-14T23:45:00Z',
  },
];

const MainLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-dark-500 text-white">
      <Sidebar />
      
      <div className="ml-64 flex-1">
        <Header 
          notifications={mockNotifications} 
          userName="Shivam Tiwari"
        />
        
        <main className="mt-16 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;