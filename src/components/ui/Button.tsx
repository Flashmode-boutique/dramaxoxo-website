import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  to,
  isExternal = false,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 focus-visible:ring-offset-brand-bg";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-xs font-semibold tracking-wider",
    md: "px-6 py-3 text-sm font-semibold tracking-wide",
    lg: "px-8 py-4 text-base font-bold tracking-wide",
  };

  const variantStyles = {
    primary: "bg-brand-red hover:bg-brand-redHover text-white shadow-lg shadow-brand-red/20 active:scale-[0.98]",
    glow: "bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white shadow-red-glow hover:shadow-red-glow-lg active:scale-[0.98]",
    secondary: "bg-brand-surface hover:bg-brand-card text-white border border-brand-border hover:border-brand-borderLight active:scale-[0.98]",
    outline: "bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40 active:scale-[0.98]",
    ghost: "bg-transparent hover:bg-white/5 text-brand-textSecondary hover:text-white",
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "";

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a 
        href={href} 
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={combinedStyles}
      >
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedStyles} disabled={disabled} {...props}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};
