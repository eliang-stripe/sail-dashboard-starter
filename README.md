# Stripe Dashboard Template

A React dashboard template for prototypes. Built with React 19, Vite 7, and Tailwind CSS 4.

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see the dashboard.

## Features

- **Sidebar + header layout** — Fixed sidebar (250px), fixed header (60px), scrollable content (max-width 1280px)
- **Component library** — Badge, Breadcrumb, Button, Dialog, Input, Select, Checkbox, Radio, Switch, Table, Tabs, Toggle, Tooltip
- **Semantic color tokens** — `bg-surface`, `bg-offset`, `text-default`, `text-subdued`, `border-border`, etc.
- **Custom typography system** — `text-heading-large`, `text-body-small`, `text-label-medium-emphasized`, etc.
- **Dark mode** — Toggle via prototype control panel, all tokens adapt automatically
- **Sandbox mode** — Test banner with layout adjustments
- **Routing** — React Router 7 with nested routes and dynamic params

## Project Structure

```
src/
├── components/
│   ├── DashboardLayout.jsx   # Sidebar, Header, NavItem, SubNavItem, SandboxBanner
│   ├── ControlPanel.jsx      # Floating prototype controls (dark mode, sandbox)
│   ├── Badge.jsx             # Status badges (default/success/warning/danger/info)
│   ├── Breadcrumb.jsx        # Breadcrumb navigation
│   ├── Button.jsx            # Buttons (primary/secondary/danger, sm/md/lg)
│   ├── Dialog.jsx            # Modal dialogs (small/medium/large/xlarge/full)
│   ├── Input.jsx             # Input, Select, Textarea, Checkbox, Radio
│   ├── KeyValuePair.jsx      # Key-value display
│   ├── Switch.jsx            # Toggle switches
│   ├── Table.jsx             # Data tables with sorting and row clicks
│   ├── Tabs.jsx              # Tabbed interfaces (sm/md/lg)
│   ├── Toggle.jsx            # Card-style selectors with ToggleGroup
│   └── Tooltip.jsx           # Hover tooltips (top/bottom/left/right)
├── icons/
│   └── SailIcons.jsx         # SVG icon system
├── data/
│   └── connectedAccounts.js  # Mock data for connected accounts
├── pages/
│   ├── Home.jsx
│   ├── Balances.jsx
│   ├── Transactions.jsx
│   ├── Directory.jsx
│   ├── ProductCatalog.jsx
│   ├── ConnectOverview.jsx
│   ├── ConnectedAccounts.jsx
│   └── ConnectedAccountDetail.jsx
├── App.jsx                    # Main layout + routes
├── main.jsx                   # Entry point
└── index.css                  # Tailwind theme, color tokens, typography utilities
```

## Typography

Use the custom `@utility` text styles defined in `src/index.css` instead of default Tailwind classes like `text-sm` or `text-base`.

| Category | Utilities |
|----------|-----------|
| Display | `text-display-xlarge`, `-large`, `-medium`, `-small` (+ `-subdued` variants) |
| Heading | `text-heading-xlarge`, `-large`, `-medium`, `-small`, `-xsmall` (+ `-subdued` variants) |
| Body | `text-body-large`, `-medium`, `-small` (+ `-emphasized` variants) |
| Label | `text-label-large`, `-medium`, `-small` (+ `-emphasized` variants) |

```jsx
<h1 className="text-heading-xlarge text-default">Page Title</h1>
<p className="text-body-small text-subdued">Description text</p>
<span className="text-label-medium-emphasized text-brand">Active label</span>
```

## Color Tokens

All colors are defined as CSS custom properties in `src/index.css` with automatic dark mode overrides.

| Token | Usage |
|-------|-------|
| `bg-surface` | Page background |
| `bg-offset` | Offset sections, hover states |
| `text-default` | Primary text |
| `text-subdued` | Secondary text |
| `text-brand` | Brand purple text |
| `border-border` | Standard borders |

## Icons

```jsx
import { Icon } from './icons/SailIcons';

<Icon name="home" size="small" fill="currentColor" />
```

Sizes: `xxsmall` (8px), `xsmall` (12px), `small` (16px), `medium` (20px), `large` (32px)

## Adding New Pages

1. Create a file in `src/pages/`:

```jsx
export default function MyPage() {
  return (
    <div className="p-8">
      <h1 className="text-heading-large text-default">My Page</h1>
    </div>
  );
}
```

2. Add route in `src/App.jsx`:

```jsx
import MyPage from './pages/MyPage';

<Route path="/my-page" element={<MyPage />} />
```

3. Add nav item in `src/components/DashboardLayout.jsx`:

```jsx
<NavItem
  icon={<Icon name="product" size="small" fill="currentColor" />}
  label="My Page"
  to="/my-page"
  active={isActive('/my-page')}
/>
```

## Scripts

```bash
npm run dev      # Start development server at localhost:5173
npm run build    # Production build to dist/
npm run preview  # Preview production build
npm run lint     # Run ESLint
```
