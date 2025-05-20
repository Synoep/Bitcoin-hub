import React, { useState } from 'react';
import { Bell, ChevronDown, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Notification } from '../../types';

interface HeaderProps {
  notifications: Notification[];
  userName: string;
  userAvatar?: string;
}

const Header: React.FC<HeaderProps> = ({
  notifications,
  userName,
  userAvatar,
}) => {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="h-16 bg-dark-600/80 backdrop-blur-md border-b border-dark-500 fixed top-0 right-0 left-64 z-10">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center bg-dark-500 rounded-lg px-3 py-2 w-64">
          <Search className="w-4 h-4 text-gray-400 mr-2" />
          <input 
            type="text" 
            className="bg-transparent border-none outline-none text-sm text-white placeholder-gray-400 w-full"
            placeholder="Search..." 
          />
        </div>
        
        <div className="flex items-center space-x-5">
          <div className="relative">
            <button 
              className="relative p-2 rounded-full hover:bg-dark-500 transition-colors"
              onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            >
              <Bell className="w-5 h-5 text-gray-400" />
              
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-error-500 rounded-full text-xs flex items-center justify-center text-white">
                  {unreadCount}
                </span>
              )}
            </button>
            
            <AnimatePresence>
              {isNotificationsOpen && (
                <motion.div 
                  className="absolute top-12 right-0 w-80 bg-dark-600 border border-dark-500 rounded-lg shadow-lg z-30"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 border-b border-dark-500 flex items-center justify-between">
                    <h3 className="font-medium text-white">Notifications</h3>
                    {unreadCount > 0 && (
                      <button className="text-xs text-primary-400 hover:text-primary-300">
                        Mark all as read
                      </button>
                    )}
                  </div>
                  
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="p-6 text-center text-gray-400">
                        No notifications yet
                      </div>
                    ) : (
                      notifications.map(notification => (
                        <div 
                          key={notification.id} 
                          className={`p-3 border-b border-dark-500 last:border-b-0 ${notification.read ? '' : 'bg-dark-500'}`}
                        >
                          <div className="flex items-start">
                            <div className={`w-2 h-2 rounded-full mt-1.5 mr-2 ${
                              notification.type === 'info' ? 'bg-primary-500' :
                              notification.type === 'success' ? 'bg-success-500' :
                              notification.type === 'warning' ? 'bg-warning-500' : 'bg-error-500'
                            }`}></div>
                            <div>
                              <h4 className="text-sm font-medium text-white mb-1">{notification.title}</h4>
                              <p className="text-xs text-gray-400 mb-1">{notification.message}</p>
                              <span className="text-xs text-gray-500">
                                {new Date(notification.timestamp).toLocaleTimeString()} · {new Date(notification.timestamp).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  
                  <div className="p-3 border-t border-dark-500">
                    <button className="text-sm text-center w-full text-primary-400 hover:text-primary-300">
                      View all notifications
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="flex items-center space-x-3 cursor-pointer hover:bg-dark-500 py-1.5 px-2 rounded-lg">
            <div className="h-8 w-8 rounded-full overflow-hidden bg-bitcoin-500 flex items-center justify-center text-white font-medium">
              {userAvatar ? (
                <img src={userAvatar} alt={userName} className="h-full w-full object-cover" />
              ) : (
                userName.charAt(0).toUpperCase()
              )}
            </div>
            
            <div>
              <p className="text-sm font-medium text-white">{userName}</p>
              <p className="text-xs text-gray-400">Verified</p>
            </div>
            
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;