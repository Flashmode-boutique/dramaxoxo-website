import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import { PageLayout } from './components/layout/PageLayout';
import { HomePage } from './pages/HomePage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { CreatorAgreementPage } from './pages/CreatorAgreementPage';
import { ContentGuidelinesPage } from './pages/ContentGuidelinesPage';
import { CopyrightPage } from './pages/CopyrightPage';
import { SupportPage } from './pages/SupportPage';
import { DeleteAccountPage } from './pages/DeleteAccountPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/creator-agreement" element={<CreatorAgreementPage />} />
            <Route path="/content-guidelines" element={<ContentGuidelinesPage />} />
            <Route path="/copyright" element={<CopyrightPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/delete-account" element={<DeleteAccountPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
