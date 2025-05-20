
import React from 'react';
import { motion } from 'framer-motion';
import { AreaClosed, LinePath, Bar } from '@visx/shape';
import { curveMonotoneX } from '@visx/curve';
import { scaleTime, scaleLinear } from '@visx/scale';
import { LinearGradient } from '@visx/gradient';
import { max, extent } from 'd3-array';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import { bitcoinPriceData } from '../data/mockData';

const AnalyticsPage: React.FC = () => {
  // Simple chart component for the page
  const Chart = ({ width = 800, height = 400 }) => {
    // Mock data transforming
    const data = bitcoinPriceData.map(d => ({
      date: new Date(d.date),
      value: d.value
    }));
    
    // Margins
    const margin = { top: 40, right: 40, bottom: 40, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    // Accessors
    const getDate = (d: any) => d.date;
    const getValue = (d: any) => d.value;
    
    // Scales
    const dateScale = scaleTime<number>({
      domain: extent(data, getDate) as [Date, Date],
      range: [0, innerWidth],
    });
    
    const valueScale = scaleLinear<number>({
      domain: [0, (max(data, getValue) || 0) * 1.1],
      range: [innerHeight, 0],
      nice: true,
    });
    
    return (
      <svg width={width} height={height}>
        <LinearGradient
          id="area-gradient"
          from="#F7931A"
          to="#F7931A"
          toOpacity={0.1}
          fromOpacity={0.4}
          x2="0"
          y2="1"
        />
        
        <g transform={`translate(${margin.left},${margin.top})`}>
          {/* Y Axis grid lines */}
          {valueScale.ticks(6).map((tick, i) => (
            <g key={`grid-${i}`}>
              <line
                x1={0}
                x2={innerWidth}
                y1={valueScale(tick)}
                y2={valueScale(tick)}
                stroke="#2D2D2D"
                strokeDasharray="2,2"
              />
              <text
                x={-10}
                y={valueScale(tick)}
                dy="0.3em"
                fontSize={12}
                textAnchor="end"
                fill="#9CA3AF"
              >
                ${tick.toLocaleString()}
              </text>
            </g>
          ))}
          
          {/* X Axis */}
          {dateScale.ticks(6).map((tick, i) => (
            <g key={`x-tick-${i}`} transform={`translate(${dateScale(tick)},${innerHeight})`}>
              <line y2={6} stroke="#9CA3AF" />
              <text
                y={20}
                fontSize={12}
                textAnchor="middle"
                fill="#9CA3AF"
              >
                {tick.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
              </text>
            </g>
          ))}
          
          {/* Area chart */}
          <AreaClosed
            data={data}
            x={(d) => dateScale(getDate(d)) ?? 0}
            y={(d) => valueScale(getValue(d)) ?? 0}
            yScale={valueScale}
            curve={curveMonotoneX}
            fill="url(#area-gradient)"
          />
          
          {/* Line on top of area */}
          <LinePath
            data={data}
            x={(d) => dateScale(getDate(d)) ?? 0}
            y={(d) => valueScale(getValue(d)) ?? 0}
            stroke="#F7931A"
            strokeWidth={2}
            curve={curveMonotoneX}
          />
        </g>
      </svg>
    );
  };
  
  // Simplified stats for the analytics page
  const stats = [
    { label: "Market Cap", value: "$1.89T", change: "+3.2%" },
    { label: "24h Volume", value: "$42.8B", change: "-5.1%" },
    { label: "BTC Dominance", value: "52.3%", change: "+0.8%" },
    { label: "Active Addresses", value: "1.12M", change: "+12.6%" },
  ];
  
  return (
    <Container>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Bitcoin Analytics</h1>
        <p className="text-gray-400 mt-1">Powered by Rebar Data</p>
      </div>
      
      {/* Stats Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index} className="p-4">
              <h3 className="text-gray-400 text-sm mb-1">{stat.label}</h3>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold">{stat.value}</p>
                <span className={`text-sm ${stat.change.startsWith('+') ? 'text-success-500' : 'text-error-500'}`}>
                  {stat.change}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
      
      {/* Main Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="mb-8"
      >
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">Bitcoin Price</h2>
              <p className="text-gray-400 text-sm">Past 30 days</p>
            </div>
            
            <div className="flex space-x-2">
              <button className="px-3 py-1 rounded-lg bg-bitcoin-500 text-white text-sm">1D</button>
              <button className="px-3 py-1 rounded-lg bg-dark-400 text-white text-sm hover:bg-dark-300">1W</button>
              <button className="px-3 py-1 rounded-lg bg-dark-400 text-white text-sm hover:bg-dark-300">1M</button>
              <button className="px-3 py-1 rounded-lg bg-dark-400 text-white text-sm hover:bg-dark-300">1Y</button>
              <button className="px-3 py-1 rounded-lg bg-dark-400 text-white text-sm hover:bg-dark-300">All</button>
            </div>
          </div>
          
          <div className="w-full overflow-x-auto">
            <Chart width={800} height={400} />
          </div>
        </Card>
      </motion.div>
      
      {/* Additional Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card className="p-6 h-full">
            <h2 className="text-xl font-semibold mb-4">Network Health</h2>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400 text-sm">Hash Rate</span>
                  <span className="text-sm font-medium">512 EH/s</span>
                </div>
                <div className="w-full bg-dark-400 h-2 rounded-full">
                  <div className="bg-success-500 h-2 rounded-full w-[85%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400 text-sm">Node Count</span>
                  <span className="text-sm font-medium">15,423</span>
                </div>
                <div className="w-full bg-dark-400 h-2 rounded-full">
                  <div className="bg-primary-500 h-2 rounded-full w-[72%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400 text-sm">Mempool Size</span>
                  <span className="text-sm font-medium">12.5 MB</span>
                </div>
                <div className="w-full bg-dark-400 h-2 rounded-full">
                  <div className="bg-warning-500 h-2 rounded-full w-[45%]"></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400 text-sm">Lightning Capacity</span>
                  <span className="text-sm font-medium">5,230 BTC</span>
                </div>
                <div className="w-full bg-dark-400 h-2 rounded-full">
                  <div className="bg-bitcoin-500 h-2 rounded-full w-[60%]"></div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-dark-500 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="text-3xl text-success-500">99.9%</div>
                <div>
                  <h3 className="font-medium">Network Uptime</h3>
                  <p className="text-sm text-gray-400">Bitcoin network has been operational for 99.9% of the time since inception</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card className="p-6 h-full">
            <h2 className="text-xl font-semibold mb-4">On-Chain Activity</h2>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Transaction Volume</h3>
                  <p className="text-2xl font-bold mt-1">$12.5B</p>
                </div>
                <div className="text-success-500 bg-success-500/10 px-2 py-1 rounded text-sm">
                  +18.3%
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Active Addresses</h3>
                  <p className="text-2xl font-bold mt-1">1.12M</p>
                </div>
                <div className="text-success-500 bg-success-500/10 px-2 py-1 rounded text-sm">
                  +12.6%
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Average Fee</h3>
                  <p className="text-2xl font-bold mt-1">$2.45</p>
                </div>
                <div className="text-error-500 bg-error-500/10 px-2 py-1 rounded text-sm">
                  -5.2%
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">New Wallets</h3>
                  <p className="text-2xl font-bold mt-1">32.4K</p>
                </div>
                <div className="text-success-500 bg-success-500/10 px-2 py-1 rounded text-sm">
                  +8.7%
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <button className="w-full py-3 bg-dark-400 hover:bg-dark-300 text-white rounded-lg transition-colors">
                View Detailed Analytics
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </Container>
  );
};

export default AnalyticsPage;