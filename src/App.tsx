import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import WalletPage from './pages/WalletPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ExchangePage from './pages/ExchangePage';
import LearnPage from './pages/LearnPage';
import SecurityPage from './pages/SecurityPage';
import TransactionsPage from './pages/TransactionsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/exchange" element={<ExchangePage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/transactions" element={<TransactionsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;