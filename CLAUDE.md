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

### CSS Variables

All theming uses CSS custom properties in `src/index.css`. Variables include `--bg`, `--border`, `--text-primary`, `--badge-*-bg/text`, etc. Dark mode activates via `.dark-mode` class on any parent element.

### Adding New Pages

1. Create page file in `src/pages/`
2. Add route in `src/App.jsx`
3. Add NavItem/SubNavItem in `src/components/PlatformLayout.jsx` with `to` prop and `isActive()` check

### Tech Stack

- React 19 with React Router 7
- Vite 7 (requires `postcss.config.js` with `@tailwindcss/postcss` plugin)
- Tailwind CSS 4 with container queries (`@container`)
