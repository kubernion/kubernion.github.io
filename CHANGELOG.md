# Changelog

All notable changes to the **Kubernion** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2025-12-30
### Added
- **Landing Page:** Implemented portal with clean aesthetic (Dot Grid background, Vignette overlay).
- **Infinite Slider:** Added auto-scrolling tech stack marquee with seamless looping.
- **Randomization:** Implemented Fisher-Yates shuffle algorithm to randomize tech icons on every page load.
- **Smart Welcome:** Added `localStorage` logic to detect returning visitors and switch status from "System Initialization" (Blue) to "System Operational" (Green).
- **Premium UI:**
    - Glassmorphic GitHub button.
    - "AI-Style" rotating gradient border for the Contact button.
- **Privacy Compliance:** Added `PrivacyBanner` component to request consent for Local Storage usage.
- **Documentation:** Added `README.md`, `LICENSE` (MIT), and `PRIVACY.md`.
- **CI/CD:** Configured GitHub Actions workflow (`deploy.yml`) for automated static deployment to GitHub Pages.

### Changed
- **Tech Stack:** Migrated styling engine to **Tailwind CSS v4** for better performance.
- **Fonts:** Switched to Google Fonts (Inter & JetBrains Mono) to resolve local asset build errors.
- **Configuration:** Updated `postcss.config.mjs` to support `@tailwindcss/postcss`.

### Fixed
- **Hydration Error:** Added `suppressHydrationWarning` to `layout.tsx` to prevent crashes caused by browser extensions (e.g., LanguageTool).
- **State Logic:** Fixed `page.tsx` rendering to correctly display "System Operational" immediately after privacy consent is given.

## [0.0.1] - 2025-12-28
### Initialized
- Initial project scaffolding using Next.js 15 (App Router) and TypeScript.
- Configured `next.config.ts` for Static Export (`output: 'export'`).