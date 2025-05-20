import React from 'react';
import { AreaClosed, LinePath, Bar } from '@visx/shape';
import { curveMonotoneX } from '@visx/curve';
import { scaleTime, scaleLinear } from '@visx/scale';
import { LinearGradient } from '@visx/gradient';
import { max, extent } from 'd3-array';
import { ChartData } from '../../types';

interface PriceChartProps {
  data: ChartData[];
  isPositive: boolean;
  width?: number;
  height?: number;
}

const PriceChart: React.FC<PriceChartProps> = ({
  data,
  isPositive,
  width = 300,
  height = 100,
}) => {
  // Margins
  const margin = { top: 0, right: 0, bottom: 0, left: 0 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Accessors
  const getDate = (d: ChartData) => new Date(d.date);
  const getValue = (d: ChartData) => d.value;

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

  // Determine colors based on trend
  const gradientColors = isPositive 
    ? ['#22C55E', 'rgba(34, 197, 94, 0)'] 
    : ['#EF4444', 'rgba(239, 68, 68, 0)'];
  
  const strokeColor = isPositive ? '#22C55E' : '#EF4444';

  if (data.length === 0) return null;

  return (
    <svg width={width} height={height}>
      <LinearGradient
        id={`area-gradient-${isPositive ? 'positive' : 'negative'}`}
        from={gradientColors[0]}
        to={gradientColors[1]}
        toOpacity={0.2}
        fromOpacity={0.4}
        x2="0"
        y2="1"
      />

      <AreaClosed
        data={data}
        x={(d) => dateScale(getDate(d)) ?? 0}
        y={(d) => valueScale(getValue(d)) ?? 0}
        yScale={valueScale}
        curve={curveMonotoneX}
        fill={`url(#area-gradient-${isPositive ? 'positive' : 'negative'})`}
      />

      <LinePath
        data={data}
        x={(d) => dateScale(getDate(d)) ?? 0}
        y={(d) => valueScale(getValue(d)) ?? 0}
        stroke={strokeColor}
        strokeWidth={2}
        curve={curveMonotoneX}
      />
    </svg>
  );
};

export default PriceChart;