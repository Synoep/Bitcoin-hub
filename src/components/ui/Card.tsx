import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  interactive?: boolean;
  variant?: 'default' | 'bordered' | 'gradient';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  interactive = false,
  variant = 'default',
}) => {
  const baseStyles = 'rounded-xl overflow-hidden';
  
  const variantStyles = {
    default: 'bg-dark-600 shadow-card',
    bordered: 'bg-dark-600 border border-dark-300/20 shadow-card',
    gradient: 'bg-gradient-to-br from-dark-500 via-dark-600 to-dark-500 shadow-card',
  };

  const interactiveStyles = interactive
    ? 'cursor-pointer transition-transform duration-300 hover:translate-y-[-4px]'
    : '';

  return (
    <motion.div
      className={`${baseStyles} ${variantStyles[variant]} ${interactiveStyles} ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;