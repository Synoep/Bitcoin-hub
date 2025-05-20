import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-bitcoin-500 hover:bg-bitcoin-600 text-white shadow-button focus:ring-bitcoin-500 focus:ring-offset-dark-500',
    secondary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-sm focus:ring-primary-500 focus:ring-offset-dark-500',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white shadow-sm focus:ring-accent-500 focus:ring-offset-dark-500',
    outline: 'border border-bitcoin-500 text-bitcoin-500 hover:bg-bitcoin-500/10 focus:ring-bitcoin-500 focus:ring-offset-dark-500',
    ghost: 'text-white hover:bg-white/10 focus:ring-white focus:ring-offset-dark-500',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5 space-x-1.5',
    md: 'text-base px-4 py-2 space-x-2',
    lg: 'text-lg px-6 py-3 space-x-3',
  };

  const loadingStyles = isLoading ? 'cursor-not-allowed opacity-70' : '';
  const disabledStyles = disabled ? 'cursor-not-allowed opacity-50' : '';
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.02 }}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${loadingStyles} ${disabledStyles} ${widthStyles} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {!isLoading && leftIcon && <span>{leftIcon}</span>}
      <span>{children}</span>
      {!isLoading && rightIcon && <span>{rightIcon}</span>}
    </motion.button>
  );
};

export default Button;