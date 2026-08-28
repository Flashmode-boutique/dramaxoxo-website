import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-brand-border/60 last:border-0 py-4">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-2 text-base md:text-lg font-semibold text-white hover:text-brand-red transition-colors group focus-visible:outline-none"
        aria-expanded={isOpen}
      >
        <span className="pr-4">{title}</span>
        <ChevronDown
          className={`w-5 h-5 text-brand-textSecondary group-hover:text-brand-red transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180 text-brand-red' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pt-3 pb-2 text-sm md:text-base text-brand-textSecondary leading-relaxed animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

export const Accordion: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`glass-card rounded-2xl p-6 md:p-8 divide-y divide-brand-border/60 ${className}`}>
      {children}
    </div>
  );
};
