# Stripe Dashboard Template

A React dashboard template to use for prototypes. Built with React, Vite, and Tailwind CSS.

## Getting Started

Click the **"Use this template"** button at the top of this repository to create your own copy. Then clone your new repo and install dependencies:

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see the dashboard with component examples.

## Features

- **Stripe-style layout** - 250px sidebar + 60px header + scrollable content area
- **Pre-built components** - Badge, Button, Input, Select, Table, Toggle, Tooltip, and more
- **Routing ready** - React Router setup with individual page files

## Project Structure

```
src/
├── components/
│   ├── PlatformLayout.jsx   # Sidebar, Header, NavItem, SubNavItem
│   ├── Badge.jsx            # Status badges
│   ├── Button.jsx           # Primary, secondary, danger buttons
│   ├── Input.jsx            # Input, Select, Textarea
│   ├── Table.jsx            # Responsive table with mobile view
│   ├── Toggle.jsx           # Switch toggle
│   ├── ToggleCard.jsx       # Selectable cards
│   └── Tooltip.jsx          # Hover tooltips
├── icons/
│   └── SailIcons.jsx        # SVG icon system
├── pages/                   # One file per route
│   ├── Home.jsx
│   ├── Balances.jsx
│   ├── Transactions.jsx
│   └── ...
├── App.jsx                  # Main layout + routes
├── main.jsx                 # Entry point
└── index.css                # Tailwind + CSS variables
```

### Icons

```jsx
import { Icon } from './icons/SailIcons';

<Icon name="home" size="small" fill="currentColor" />
<Icon name="settings" size="medium" fill="#6366f1" />
```

Sizes: `xxsmall` (8px), `xsmall` (12px), `small` (16px), `medium` (20px), `large` (32px)

## Theming

All colors are defined as Tailwind theme variables in `src/index.css`. This lets you use them as standard utility classes:

```css
@theme {
  /* Colors - use as bg-primary, text-primary, border-border, etc. */
  --color-primary: #635BFF;
  --color-bg: #ffffff;
  --color-bg-hover: #f9fafb;
  --color-text-primary: #010101;
  --color-text-secondary: #4b5563;
  --color-border: #D8DEE4;

  /* Badge variants */
  --color-badge-success-bg: #EAFCDD;
  --color-badge-success-text: #217005;
  /* ... and more */
}
```

### Usage

```jsx
{/* Use theme colors as Tailwind utilities */}
<div className="bg-primary text-white">Primary button</div>
<div className="border border-border">Bordered element</div>
<div className="text-text-secondary">Secondary text</div>
<div className="hover:bg-bg-hover">Hoverable row</div>
```

## Adding New Pages

1. Create a new file in `src/pages/`:

```jsx
// src/pages/MyPage.jsx
export default function MyPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">My Page</h1>
    </div>
  );
}
```

2. Add route in `src/App.jsx`:

```jsx
import MyPage from './pages/MyPage';

<Route path="/my-page" element={<MyPage />} />
```

3. Add navigation item in `src/components/PlatformLayout.jsx`:

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
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```