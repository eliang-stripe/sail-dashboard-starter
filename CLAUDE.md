# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:5173
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
npm run lint     # ESLint check
```

## Architecture

This is a reusable Stripe-style dashboard shell built with React 19, Vite 7, and Tailwind CSS 4. It provides a sidebar + header layout for quickly bootstrapping admin panels and internal tools.

### Layout Structure

The main layout in `App.jsx` uses a two-container pattern for proper scrollbar positioning:
- Outer div: handles scroll with `overflow-auto` and `scrollbar-auto` (hover-visible scrollbar)
- Inner div: constrains content width with `max-w-[1280px]`

This separation keeps the scrollbar on the right edge of the viewport while centering content.

### Key Components

**`src/components/PlatformLayout.jsx`**: Contains Sidebar (250px fixed), Header (60px sticky), NavItem, SubNavItem, SectionHeading, and ExpandableNavItem. Navigation items support React Router via the `to` prop.

**`src/icons/SailIcons.jsx`**: SVG icon system with 15 icons. Icons use `forwardRef` and accept `size` (xxsmall/xsmall/small/medium/large) and `fill` props.

### Theming & Custom Colors

All theming uses Tailwind CSS 4's `@theme` block in `src/index.css`. **Always prefer these semantic color tokens over hardcoded values like `gray-500` or `#ccc`.**

**Text colors** (use with `text-*`):
- `text-default` - Primary text (#353A44)
- `text-subdued` - Secondary/muted text (#596171)
- `text-brand` - Brand purple (#533AFD)
- `text-info`, `text-success`, `text-attention`, `text-critical` - Status text

**Background colors** (use with `bg-*`):
- `bg-bg` - Page background (#ffffff)
- `bg-bg-offset` - Offset sections (#F5F6F8)
- `bg-bg-hover` - Hover states (#f9fafb)
- `bg-blurple` - Brand purple (#635BFF)

**Border & UI colors**:
- `border-border` - Standard borders (#D8DEE4)
- `border-blurple` - Brand accent borders

**Button colors** (complete sets):
- `bg-button-primary-bg`, `text-button-primary-text`, `border-button-primary-border`
- `bg-button-secondary-bg`, `text-button-secondary-text`, `border-button-secondary-border`

**Badge variants** (bg, border, text for each):
- `badge-default-*`, `badge-success-*`, `badge-warning-*`, `badge-danger-*`, `badge-info-*`

**Focus states**: Use `focus:outline-blurple/50` for consistent focus rings.

**Icon colors**: `text-icon-default`, `text-icon-subdued`, `text-icon-brand`, etc.

### Adding New Pages

1. Create page file in `src/pages/`
2. Add route in `src/App.jsx`
3. Add NavItem/SubNavItem in `src/components/PlatformLayout.jsx` with `to` prop and `isActive()` check

### Tech Stack

- React 19 with React Router 7
- Vite 7 (requires `postcss.config.js` with `@tailwindcss/postcss` plugin)
- Tailwind CSS 4 with container queries (`@container`)
