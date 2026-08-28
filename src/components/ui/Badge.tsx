import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'red' | 'gold' | 'dark' | 'outline';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'red',
  className = '' 
}) => {
  const variantStyles = {
    red: "bg-brand-red/15 text-brand-red border border-brand-red/30",
    gold: "bg-amber-500/15 text-amber-300 border border-amber-500/30",
    dark: "bg-brand-card text-brand-textSecondary border border-brand-border",
    outline: "bg-transparent text-white/80 border border-white/20",
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
