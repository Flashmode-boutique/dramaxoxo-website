import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { DiscoverSection } from '../components/home/DiscoverSection';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { CreatorSection } from '../components/home/CreatorSection';
import { AppDownloadSection } from '../components/home/AppDownloadSection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <HeroSection />
      <DiscoverSection />
      <HowItWorksSection />
      <CreatorSection />
      <AppDownloadSection />
    </div>
  );
};
