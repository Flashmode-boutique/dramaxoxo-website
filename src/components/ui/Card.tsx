import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
}) => {
  return (
    <div
      className={`glass-card rounded-2xl p-6 transition-all duration-300 ${
        hoverEffect ? 'hover:translate-y-[-4px] hover:shadow-card' : ''
      } ${glow ? 'hover:shadow-red-glow' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
