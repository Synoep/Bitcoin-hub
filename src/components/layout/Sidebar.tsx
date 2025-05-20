import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Wallet, 
  BarChart3, 
  ArrowRightLeft, 
  FileText, 
  Settings, 
  BookOpen, 
  Shield, 
  LogOut 
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  
  const navItems = [
    { 
      title: 'Dashboard', 
      icon: <LayoutDashboard className="w-5 h-5" />, 
      path: '/' 
    },
    { 
      title: 'Wallet', 
      icon: <Wallet className="w-5 h-5" />, 
      path: '/wallet' 
    },
    { 
      title: 'Exchange', 
      icon: <ArrowRightLeft className="w-5 h-5" />, 
      path: '/exchange' 
    },
    { 
      title: 'Analytics', 
      icon: <BarChart3 className="w-5 h-5" />, 
      path: '/analytics' 
    },
    { 
      title: 'Learn', 
      icon: <BookOpen className="w-5 h-5" />, 
      path: '/learn' 
    },
    { 
      title: 'Security', 
      icon: <Shield className="w-5 h-5" />, 
      path: '/security' 
    },
    { 
      title: 'Transactions', 
      icon: <FileText className="w-5 h-5" />, 
      path: '/transactions' 
    },
  ];

  const bottomNavItems = [
    { 
      title: 'Settings', 
      icon: <Settings className="w-5 h-5" />, 
      path: '/settings' 
    },
    { 
      title: 'Logout', 
      icon: <LogOut className="w-5 h-5" />, 
      path: '/logout' 
    },
  ];

  const activeNavStyles = 'bg-bitcoin-500 text-white';
  const inactiveNavStyles = 'text-gray-400 hover:text-white hover:bg-dark-400';

  return (
    <div className="w-64 h-screen bg-dark-700 fixed left-0 top-0 flex flex-col border-r border-dark-500">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-bitcoin-500 rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11.767 19.089c4.924.868 9.593-2.535 10.461-7.603.868-5.069-2.489-9.839-7.413-10.707-4.924-.868-9.593 2.535-10.461 7.603-.868 5.069 2.489 9.839 7.413 10.707z"/>
              <path d="M15 8.5c.685.488 1 1.312 1 2.5s-.315 2.012-1 2.5M11 7v10M9 9h4M9 13h4"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-white">Bitcoin Hub</h1>
        </div>
      </div>
      
      <nav className="flex-1 px-4 py-2">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>
                <motion.div
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                    pathname === item.path ? activeNavStyles : inactiveNavStyles
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.title}</span>
                  
                  {pathname === item.path && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="w-1.5 h-1.5 rounded-full bg-white ml-auto"
                    />
                  )}
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-auto px-4 py-6">
        <div className="bg-dark-600 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary-500/20 rounded-full flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary-400" />
            </div>
            <div className="ml-3">
              <h4 className="text-sm font-medium text-white">Secure Mode</h4>
              <p className="text-xs text-gray-400">Enable extra protection</p>
            </div>
            
            <div className="ml-auto">
              <div className="w-10 h-5 bg-dark-400 rounded-full relative">
                <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5"></div>
              </div>
            </div>
          </div>
        </div>
        
        <ul className="space-y-1">
          {bottomNavItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>
                <motion.div
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                    pathname === item.path ? activeNavStyles : inactiveNavStyles
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.title}</span>
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;