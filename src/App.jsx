import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar, Header, SandboxBanner, SANDBOX_HEIGHT } from './components/DashboardLayout';
import ControlPanel from './components/ControlPanel';

// Pages
import Home from './pages/Home';
import Balances from './pages/Balances';
import Transactions from './pages/Transactions';
import Directory from './pages/Directory';
import ProductCatalog from './pages/ProductCatalog';
import ConnectOverview from './pages/ConnectOverview';
import ConnectedAccounts from './pages/ConnectedAccounts';
import ConnectedAccountDetail from './pages/ConnectedAccountDetail';
import EmbeddedFinance from './pages/EmbeddedFinance';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sandboxMode, setSandboxMode] = useState(false);

  return (
    <div className={`min-h-screen bg-surface ${darkMode ? 'dark' : ''}`}>
      <ControlPanel
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        sandboxMode={sandboxMode}
        onToggleSandboxMode={() => setSandboxMode(!sandboxMode)}
      />

      <div className="flex flex-col min-h-screen">
        <div className="flex flex-row flex-1 bg-surface">
          {/* Sandbox Banner */}
          {sandboxMode && <SandboxBanner />}

          {/* Sidebar */}
          <Sidebar sandboxMode={sandboxMode} />

          {/* Header - fixed */}
          <Header sandboxMode={sandboxMode} />

          {/* Main Content Area - offset for fixed sidebar and header */}
          <div className="ml-sidebar-width flex flex-col min-w-0 flex-1 relative scrollbar-auto" style={{ paddingTop: 60 + (sandboxMode ? SANDBOX_HEIGHT : 0) }}>
            <div className="max-w-[1280px] w-full mx-auto">

              {/* Content */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/balances" element={<Balances />} />
                <Route path="/transactions" element={<Transactions />} />
                <Route path="/directory" element={<Directory />} />
                <Route path="/product-catalog" element={<ProductCatalog />} />
                <Route path="/connect" element={<ConnectOverview />} />
                <Route path="/connect/accounts" element={<ConnectedAccounts />} />
                <Route path="/connect/accounts/:accountId" element={<ConnectedAccountDetail />} />
                <Route path="/connect/accounts/:accountId/:tab" element={<ConnectedAccountDetail />} />
                <Route path="/embedded-finance" element={<EmbeddedFinance />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
