# 🐙 Kubernion

> **Coding Beyond Boundaries.**
> Architecting the next generation of open web solutions.

![Build Status](https://github.com/kubernion/kubernion.github.io/actions/workflows/deploy.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Tailwind](https://img.shields.io/badge/Tailwind-v4-cyan)

## 🌐 Live on GitHub
**Access:** [https://kubernion.github.io](https://kubernion.github.io)

---

## 🚀 About The Project
Kubernion is a forward-thinking software development initiative focused on breaking the traditional boundaries of web architecture. This repository hosts the public-facing portal.

### Key Features
* **Zero-Latency Deployment:** Hosted on GitHub Pages via automated CI/CD pipelines.
* **Smart Personalization:** Uses Local Storage to detect returning visitors and adapt the UI.
* **Infinite Tech Slider:** A seamless marquee showcasing our core stack.
* **Dark Mode Aesthetic:** Dot-grid backgrounds, vignettes, and glassmorphic UI elements using Tailwind CSS v4.

---

## 🛠️ Tech Stack
* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Icons:** React Icons (FontAwesome, SimpleIcons, Material)
* **Deployment:** GitHub Actions (Static Export)

---

## ⚡ Local Development
To clone and run this system locally:

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/kubernion/kubernion.github.io.git](https://github.com/kubernion/kubernion.github.io.git)
    cd kubernion.github.io
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Initialize Development Server**
    ```bash
    npm run dev
    ```
    Access the portal at `http://localhost:3000`.

---

## 📂 Project Structure
```text
├── .github/workflows   # CI/CD Pipeline Configuration
├── src/app
│   ├── fonts/          # Local font assets (optional)
│   ├── globals.css     # Global styles & Tailwind directives
│   ├── layout.tsx      # Root layout & Metadata
│   └── page.tsx        # Main Landing Page Logic
├── next.config.ts      # Static Export Configuration
└── postcss.config.mjs  # Tailwind v4 Connector