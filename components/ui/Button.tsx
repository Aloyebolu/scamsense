'use client'
// components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    className = '', 
    disabled,
    isLoading,
    ...props 
  }, ref) => {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-primary text-on-brand hover:bg-primary-hover active:scale-[0.98]',
      secondary: 'bg-secondary text-on-brand hover:bg-secondary/80 active:scale-[0.98]',
      danger: 'bg-error text-on-brand hover:bg-error/80 active:scale-[0.98]',
      success: 'bg-success text-on-brand hover:bg-success/80 active:scale-[0.98]',
      outline: 'bg-transparent border border-border text-foreground hover:bg-background2 active:scale-[0.98]',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5',
      lg: 'px-6 py-3.5 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            Loading...
          </div>
        ) : children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;