import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen, Trophy } from 'lucide-react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import EducationCard from '../components/dashboard/EducationCard';
import { mockEducationalContent } from '../data/mockData';

const LearnPage: React.FC = () => {
  return (
    <Container>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Learn & Earn</h1>
        <p className="text-gray-400 mt-1">Master Bitcoin concepts and earn rewards</p>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search tutorials..."
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
              <select className="bg-dark-500 border border-dark-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-bitcoin-500">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockEducationalContent.map((lesson) => (
              <EducationCard key={lesson.id} lesson={lesson} />
            ))}
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
            <h2 className="text-xl font-semibold mb-4">Learning Paths</h2>
            
            <div className="space-y-4">
              <div className="border border-dark-400 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-bitcoin-500/20 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-bitcoin-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Bitcoin Basics</h3>
                      <p className="text-sm text-gray-400">Foundation course for beginners</p>
                    </div>
                  </div>
                  <Badge variant="success">60% Complete</Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-success-500 mr-3"></div>
                    <span className="text-success-500">Introduction to Bitcoin</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-success-500 mr-3"></div>
                    <span className="text-success-500">Wallet Setup & Security</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-dark-400 mr-3"></div>
                    <span className="text-gray-400">Advanced Transaction Types</span>
                  </div>
                </div>
                
                <Button variant="outline" fullWidth className="mt-4">
                  Continue Learning
                </Button>
              </div>
              
              <div className="border border-dark-400 rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">DeFi Mastery</h3>
                      <p className="text-sm text-gray-400">Advanced DeFi concepts and strategies</p>
                    </div>
                  </div>
                  <Badge variant="primary">New</Badge>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-dark-400 mr-3"></div>
                    <span className="text-gray-400">Understanding exSat Protocol</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-dark-400 mr-3"></div>
                    <span className="text-gray-400">sBTC Integration Guide</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-dark-400 mr-3"></div>
                    <span className="text-gray-400">Advanced Trading Strategies</span>
                  </div>
                </div>
                
                <Button variant="outline" fullWidth className="mt-4">
                  Start Learning
                </Button>
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
            <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
            
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Overall Progress</span>
                <span className="font-medium">65%</span>
              </div>
              <div className="w-full h-2 bg-dark-400 rounded-full">
                <div className="w-[65%] h-full bg-bitcoin-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success-500/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-success-500" />
                </div>
                <div>
                  <h3 className="font-medium">Achievements</h3>
                  <p className="text-sm text-gray-400">12 badges earned</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-warning-500/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-warning-500" />
                </div>
                <div>
                  <h3 className="font-medium">Courses Completed</h3>
                  <p className="text-sm text-gray-400">4 of 10</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-medium">Rewards Earned</h3>
                  <p className="text-sm text-gray-400">1,250 sats</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-dark-500 rounded-lg">
              <h3 className="font-medium mb-2">Next Achievement</h3>
              <p className="text-sm text-gray-400 mb-3">Complete 3 more lessons to earn the "DeFi Explorer" badge</p>
              <div className="w-full h-2 bg-dark-400 rounded-full">
                <div className="w-[70%] h-full bg-primary-500 rounded-full"></div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Container>
  );
};

export default LearnPage;