import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Key, Smartphone, Lock, AlertCircle, CheckCircle2, Settings } from 'lucide-react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

const SecurityPage: React.FC = () => {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  
  return (
    <Container>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Security Center</h1>
        <p className="text-gray-400 mt-1">Manage your account security and privacy settings</p>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 bg-success-500/20 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-success-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Security Status</h2>
              <p className="text-gray-400">Your account is well-protected</p>
            </div>
            <Badge variant="success" className="ml-auto">Strong</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-dark-500 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Password Strength</span>
                <CheckCircle2 className="w-5 h-5 text-success-500" />
              </div>
              <div className="w-full h-2 bg-dark-400 rounded-full">
                <div className="w-full h-full bg-success-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-dark-500 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">2FA Status</span>
                {twoFactorEnabled ? (
                  <CheckCircle2 className="w-5 h-5 text-success-500" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-warning-500" />
                )}
              </div>
              <div className="w-full h-2 bg-dark-400 rounded-full">
                <div className={`h-full rounded-full ${twoFactorEnabled ? 'w-full bg-success-500' : 'w-1/3 bg-warning-500'}`}></div>
              </div>
            </div>
            
            <div className="bg-dark-500 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Recovery Setup</span>
                <CheckCircle2 className="w-5 h-5 text-success-500" />
              </div>
              <div className="w-full h-2 bg-dark-400 rounded-full">
                <div className="w-full h-full bg-success-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Security Settings</h2>
            
            <div className="space-y-6">
              <div className="flex items-start justify-between p-4 border border-dark-400 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center mt-1">
                    <Key className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Password</h3>
                    <p className="text-sm text-gray-400 mb-2">Last changed 30 days ago</p>
                    <Button variant="outline" size="sm">
                      Change Password
                    </Button>
                  </div>
                </div>
                <Badge variant="success">Strong</Badge>
              </div>
              
              <div className="flex items-start justify-between p-4 border border-dark-400 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-warning-500/20 rounded-lg flex items-center justify-center mt-1">
                    <Smartphone className="w-5 h-5 text-warning-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-400 mb-2">Enable 2FA for enhanced security</p>
                    <Button 
                      variant={twoFactorEnabled ? "outline" : "primary"} 
                      size="sm"
                      onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                    >
                      {twoFactorEnabled ? "Manage 2FA" : "Enable 2FA"}
                    </Button>
                  </div>
                </div>
                <Badge variant={twoFactorEnabled ? "success" : "warning"}>
                  {twoFactorEnabled ? "Enabled" : "Disabled"}
                </Badge>
              </div>
              
              <div className="flex items-start justify-between p-4 border border-dark-400 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-success-500/20 rounded-lg flex items-center justify-center mt-1">
                    <Lock className="w-5 h-5 text-success-500" />
                  </div>
                  <div>
                    <h3 className="font-medium">Recovery Phrase</h3>
                    <p className="text-sm text-gray-400 mb-2">Backup your wallet recovery phrase</p>
                    <Button variant="outline" size="sm">
                      View Recovery Phrase
                    </Button>
                  </div>
                </div>
                <Badge variant="success">Backed Up</Badge>
              </div>
            </div>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-6">Privacy Settings</h2>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-gray-400" />
                  <span>Hide Balance</span>
                </div>
                <div className="w-12 h-6 bg-dark-400 rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-gray-400" />
                  <span>Activity Status</span>
                </div>
                <div className="w-12 h-6 bg-primary-500 rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Settings className="w-5 h-5 text-gray-400" />
                  <span>Email Notifications</span>
                </div>
                <div className="w-12 h-6 bg-primary-500 rounded-full relative cursor-pointer">
                  <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-dark-500 rounded-lg">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-primary-400 flex-shrink-0 mt-1" />
                <p className="text-sm text-primary-400">
                  Your privacy is protected by Rebar Shield technology, ensuring your transactions remain confidential and secure.
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="mt-6 p-6">
            <h2 className="text-xl font-semibold mb-4">Security Log</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Password Changed</p>
                  <p className="text-sm text-gray-400">March 15, 2025</p>
                </div>
                <Badge variant="success">Success</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New Login</p>
                  <p className="text-sm text-gray-400">March 10, 2025</p>
                </div>
                <Badge variant="warning">New Device</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">2FA Setup</p>
                  <p className="text-sm text-gray-400">March 5, 2025</p>
                </div>
                <Badge variant="success">Success</Badge>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Container>
  );
};

export default SecurityPage;