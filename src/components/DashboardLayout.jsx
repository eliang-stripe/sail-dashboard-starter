import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from '../icons/SailIcons';

const DiamondAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z" fill="#2B105F" />
    <circle cx="8" cy="8" r="6" fill="#655DF6" />
    <path d="M8 3.75732L12.2426 7.99996L8 12.2426L3.75736 7.99996L8 3.75732Z" fill="#C1B6F6" />
  </svg>
);

const BoatAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z" fill="#063667" />
    <path d="M13.918 13.6923C13.5306 14.0802 12.8892 14.0802 12.5018 13.6923C12.3147 13.505 12.0207 13.505 11.8337 13.6923C11.6466 13.8796 11.3794 13.9866 11.1255 13.9866C11.0587 13.9866 10.9919 13.9866 10.9385 13.9733H10.9251C10.7381 13.9332 10.5644 13.8395 10.4308 13.7191L10.4175 13.7058C10.2304 13.5185 9.93645 13.5185 9.74939 13.7058L9.73606 13.7191C9.34863 14.0937 8.73395 14.0937 8.34652 13.7191L8.33319 13.7058C8.14614 13.5185 7.85218 13.5185 7.66512 13.7058L7.65179 13.7191C7.46473 13.9064 7.22418 14.0001 6.95697 14.0001C6.68977 14.0001 6.44921 13.893 6.26215 13.7191L6.24882 13.7058C6.0751 13.5318 5.75447 13.5318 5.58075 13.7058L5.56742 13.7191C5.43377 13.8395 5.28678 13.9197 5.11316 13.9733H5.08641H5.07308H5.05975C4.99293 13.9866 4.9261 13.9866 4.8727 13.9866C4.60549 13.9866 4.3516 13.8796 4.16454 13.6923C3.99081 13.5184 3.67019 13.5184 3.49647 13.6923C3.10903 14.0802 2.46761 14.0802 2.08018 13.6923C1.97327 13.5853 1.97327 13.4248 2.08018 13.3178C2.18708 13.2107 2.34738 13.2107 2.4543 13.3178C2.64135 13.505 2.93531 13.505 3.12237 13.3178C3.30943 13.1305 3.5633 13.0234 3.83053 13.0234C3.89735 13.0234 3.96418 13.0368 4.03091 13.0502C4.21797 13.0903 4.39169 13.184 4.53867 13.3178C4.63225 13.4114 4.75248 13.4516 4.87271 13.4516C4.89946 13.4516 4.93953 13.4516 4.96628 13.4382C4.99303 13.4382 5.00636 13.4249 5.03311 13.4249C5.04644 13.4249 5.05986 13.4115 5.05986 13.4115C5.05986 13.4115 5.07319 13.4115 5.07319 13.3982C4.07069 12.4884 3.48279 11.1907 3.44271 9.78593L7.71837 7.40466V11.8996C7.71837 12.0468 7.8386 12.1672 7.98558 12.1672C8.13255 12.1672 8.25278 12.0468 8.25278 11.8996V7.40466L12.5284 9.78593C12.4884 11.1906 11.9138 12.5016 10.9117 13.4113C10.925 13.4113 10.9384 13.4247 10.9517 13.4247C10.9651 13.4247 10.9651 13.4247 10.9785 13.438C10.9918 13.438 11.0186 13.4514 11.0319 13.4514C11.1922 13.4782 11.3392 13.438 11.4595 13.3176C11.6065 13.1704 11.7802 13.0768 11.9673 13.05C12.288 12.9831 12.6353 13.0768 12.8892 13.3176C13.0763 13.5048 13.3702 13.5048 13.5573 13.3176C13.6642 13.2105 13.8245 13.2105 13.9314 13.3176C14.025 13.4247 14.0249 13.5853 13.918 13.6923Z" fill="#39C9E9" />
    <path d="M7.86546 6.70906C7.87879 6.70906 7.89221 6.69571 7.90554 6.69571H7.91887C7.94562 6.69571 7.95895 6.68237 7.98569 6.68237C8.01244 6.68237 8.02577 6.68237 8.05252 6.69571H8.06585C8.07918 6.69571 8.0926 6.70906 8.10593 6.70906H8.11925L11.0588 8.34116L11.0589 5.74585H4.9126V8.35454L7.86546 6.70906Z" fill="#39C9E9" />
    <path d="M8.25287 3.20396H7.71846V2.26753C7.71846 2.12037 7.83869 2 7.98566 2C8.13264 2 8.25287 2.12038 8.25287 2.26753V3.20396ZM9.98988 3.73913H5.98145V5.21074H9.98988V3.73913Z" fill="#39C9E9" />
  </svg>
);

const ZapAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 4C0 1.79086 1.79086 0 4 0H12C14.2091 0 16 1.79086 16 4V12C16 14.2091 14.2091 16 12 16H4C1.79086 16 0 14.2091 0 12V4Z" fill="black" />
    <path d="M6.6829 5.08161L2.05439 12.41C1.85552 12.7249 2.24428 13.0793 2.53946 12.8522L7.4499 9.07471C7.59216 8.96528 7.79551 8.98812 7.90994 9.12639L9.43532 10.9695C9.58483 11.1501 9.86919 11.124 9.98331 10.9192L13.9318 3.8316C14.1119 3.50821 13.7095 3.17603 13.4261 3.41419L9.22676 6.94324C9.08507 7.06231 8.87351 7.04316 8.75551 6.90058L7.22152 5.04708C7.07696 4.87241 6.80397 4.88991 6.6829 5.08161Z" fill="#FFE500" />
  </svg>
);

export const NavItem = ({ icon, label, active, highlighted, to }) => {
  const isHighlighted = active || highlighted;
  const content = (
    <div className="flex items-center space-x-2 h-[30px] px-1 rounded-md cursor-pointer hover:bg-offset">
      {icon && (
        <div className={`w-6 h-6 flex items-center justify-center ${isHighlighted ? 'text-brand' : 'text-icon-subdued'}`}>
          {icon}
        </div>
      )}
      <span className={`text-sm flex-1 ${isHighlighted ? 'text-brand font-medium' : 'text-default'}`}>{label}</span>
    </div>
  );

  if (to) {
    return <Link to={to} className="block">{content}</Link>;
  }
  return content;
};

export const SubNavItem = ({ label, active, highlighted, onClick, to }) => {
  const content = (
    <div
      className={`flex items-center space-x-2 h-[30px] px-1 rounded-md cursor-pointer hover:bg-offset`}
      onClick={!to ? onClick : undefined}
    >
      {/* Empty spacer to match icon width */}
      <div className="w-6 h-6 flex-shrink-0" />
      <span className={`text-sm ${highlighted ? 'text-brand font-medium' : 'text-default'}`}>{label}</span>
    </div>
  );

  if (to) {
    return <Link to={to} className="block">{content}</Link>;
  }
  return content;
};

export const SectionHeading = ({ label }) => (
  <div className="h-[26px] px-1 flex items-center">
    <span className="text-xs text-subdued">
      {label}
    </span>
  </div>
);

// Expandable nav item with sub-items (controlled via expandedSection prop)
const ExpandableNavItem = ({ icon, label, children, sectionId, expandedSection, onToggle }) => {
  const isExpanded = expandedSection === sectionId;

  return (
    <div>
      <div
        className="flex items-center space-x-2 h-[30px] px-1 rounded-md hover:bg-offset cursor-pointer relative"
        onClick={() => onToggle(isExpanded ? null : sectionId)}
      >
        {icon && (
          <div className="w-6 h-6 flex items-center justify-center text-icon-subdued">
            {icon}
          </div>
        )}
        <span className="text-sm text-default flex-1">{label}</span>
        <div className="w-6 h-6 flex items-center justify-center">
          <Icon name="chevronDown" size="xxsmall" fill="currentColor" className={`size-[8px] transition-transform text-icon-default ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
      </div>
      <div
        className={`grid transition-[grid-template-rows] duration-200 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="pb-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Sidebar = ({ sandboxMode = false }) => {
  const location = useLocation();
  const [expandedSection, setExpandedSection] = React.useState('connect');

  // Helper to check if current path matches
  const isActive = (path) => location.pathname === path;

  return (
    <div className={`fixed left-0 w-sidebar-width bg-surface border-r border-border flex flex-col z-10 shrink-0 ${sandboxMode ? 'rounded-tl-xl overflow-hidden' : ''}`} style={{ top: sandboxMode ? SANDBOX_HEIGHT : 0, height: sandboxMode ? `calc(100vh - ${SANDBOX_HEIGHT}px)` : '100vh' }}>

      {/* Navigation */}
      <div className="flex-1 px-4 py-4 space-y-7">

        {/* Account Section - Rocket Rides branding */}
        <div className="p-1.5 -mx-0.5 rounded-lg flex items-center border-border hover:bg-offset gap-2 duration-100">
          <img src="/rocketrides.svg" alt="Rocket Rides" className="size-[24px] rounded" />
          <span className="font-semibold text-default text-sm">
            Rocket Rides
          </span>
        </div>

        {/* Main Navigation */}
        <div className="">
          <NavItem icon={<Icon name="home" size="small" fill="currentColor" />} label="Home" to="/" active={isActive('/')} />
          <NavItem icon={<Icon name="balance" size="small" fill="currentColor" />} label="Balances" to="/balances" active={isActive('/balances')} />
          <NavItem icon={<Icon name="arrowsLoop" size="small" fill="currentColor" />} label="Transactions" to="/transactions" active={isActive('/transactions')} />
          <NavItem icon={<Icon name="person" size="small" fill="currentColor" />} label="Directory" to="/directory" active={isActive('/directory')} />
          <NavItem icon={<Icon name="product" size="small" fill="currentColor" />} label="Product catalog" to="/product-catalog" active={isActive('/product-catalog')} />
        </div>

        {/* Products */}
        <div className="space-y-2">
          <SectionHeading label="Products" />
          <div className="">
            <ExpandableNavItem
              icon={<Icon name="platform" size="small" fill="currentColor" />}
              label="Connect"
              sectionId="connect"
              expandedSection={expandedSection}
              onToggle={setExpandedSection}
            >
              <SubNavItem
                label="Overview"
                to="/connect"
                highlighted={isActive('/connect')}
              />
              <SubNavItem
                label="Connected accounts"
                to="/connect/accounts"
                highlighted={isActive('/connect/accounts')}
              />
              <SubNavItem label="Accounts to review" />
              <SubNavItem
                label="Embedded finance"
                to="/embedded-finance"
                highlighted={isActive('/embedded-finance')}
              />
              <SubNavItem label="Capital" />
            </ExpandableNavItem>
            <ExpandableNavItem
              icon={<Icon name="wallet" size="small" fill="currentColor" />}
              label="Payments"
              sectionId="payments"
              expandedSection={expandedSection}
              onToggle={setExpandedSection}
            >
              <SubNavItem label="Analytics" />
              <SubNavItem label="Disputes" />
              <SubNavItem label="Radar" />
              <SubNavItem label="Payment Links" />
              <SubNavItem label="Terminal" />
            </ExpandableNavItem>
            <ExpandableNavItem
              icon={<Icon name="invoice" size="small" fill="currentColor" />}
              label="Billing"
              sectionId="billing"
              expandedSection={expandedSection}
              onToggle={setExpandedSection}
            >
              <SubNavItem label="Overview" />
              <SubNavItem label="Subscriptions" />
              <SubNavItem label="Invoices" />
              <SubNavItem label="Usage-based" />
              <SubNavItem label="Revenue recovery" />
            </ExpandableNavItem>
            <ExpandableNavItem
              icon={<Icon name="barChart" size="small" fill="currentColor" />}
              label="Reporting"
              sectionId="reporting"
              expandedSection={expandedSection}
              onToggle={setExpandedSection}
            >
              <SubNavItem label="Reports" />
              <SubNavItem label="Sigma" />
              <SubNavItem label="Revenue Recognition" />
              <SubNavItem label="Data management" />
            </ExpandableNavItem>
            <NavItem icon={<Icon name="more" size="small" fill="currentColor" />} label="More" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SANDBOX_HEIGHT = 44;

export const SandboxBanner = () => (
  <>
    <div
      className="fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-5 bg-[#0E3359] text-white"
      style={{ height: SANDBOX_HEIGHT }}
    >
      <span className="text-sm font-medium">Sandbox</span>
      <span className="absolute left-1/2 -translate-x-1/2 text-sm text-white/80">
        You're testing in a sandbox. Changes you make here don't affect your live account.
      </span>
    </div>
    {/* Filler strip behind content for rounded corner reveal */}
    <div
      className="fixed left-0 right-0 bg-[#0E3359] z-[5]"
      style={{ top: SANDBOX_HEIGHT, height: 16 }}
    />
  </>
);

export { SANDBOX_HEIGHT };

export const Header = ({ sandboxMode = false }) => {
  const HeaderButton = ({ children, className = '', ...props }) => (
    <button
      className={`size-8 rounded-full flex items-center justify-center hover:bg-offset transition-colors cursor-pointer text-icon-default ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <div className={`fixed left-sidebar-width right-0 h-[60px] bg-surface border-border z-10 ${sandboxMode ? 'rounded-tr-xl overflow-hidden' : ''}`} style={{ top: sandboxMode ? SANDBOX_HEIGHT : 0 }}>
      <div className="max-w-[1280px] w-full h-full mx-auto px-8 flex items-center justify-between">
        {/* Search */}
        <div className="w-[360px] focus-within:w-[500px] transition-[width] duration-100 ease-in-out">
          <div className="flex items-center space-x-2 px-3 py-2 bg-offset rounded-lg">
            <Icon name="search" size="small" fill="currentColor" className="text-icon-default flex-shrink-0" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-sm text-default placeholder:text-subdued outline-none w-full"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* App Dock */}
          <div className="flex items-center gap-0.5 px-px py-px border border-border rounded-full">
            <HeaderButton>
              <DiamondAppIcon />
            </HeaderButton>
            <HeaderButton>
              <BoatAppIcon />
            </HeaderButton>
            <HeaderButton>
              <ZapAppIcon />
            </HeaderButton>
            <HeaderButton className="text-icon-default">
              <Icon name="apps" size="small" fill="currentColor" />
            </HeaderButton>
          </div>

          <div className="flex items-center space-x-1.5">
            <HeaderButton>
              <Icon name="help" size="small" fill="currentColor" />
            </HeaderButton>
            <HeaderButton>
              <Icon name="notifications" size="small" fill="currentColor" />
            </HeaderButton>
            <HeaderButton>
              <Icon name="settings" size="small" fill="currentColor" />
            </HeaderButton>
            <HeaderButton>
              <Icon name="addCircleFilled" size="medium" fill="currentColor" />
            </HeaderButton>
          </div>
        </div>
      </div>
    </div>
  );
};
