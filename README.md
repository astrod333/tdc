

# Tanzania Developer Community (TDC)

Welcome to the official repository for the Tanzania Developer Community (TDC) website. This project serves as a digital hub for developers in Tanzania, featuring a unique, interactive user interface inspired by desktop environments.

## 🚀 Overview

The TDC website is designed to be more than just a landing page; it's an interactive experience. The core of the current interface is a dynamic "Folder" component that users can interact with, simulating a modern operating system's file explorer. This project showcases modern web development techniques using Next.js and Framer Motion.

## 🛠️ Tech Stack

This project is built with the latest web technologies to ensure performance, scalability, and a premium user experience:

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **UI Components**: Custom components with shadcn/ui integration
-   **Linter & Formatter**: [Biome](https://biomejs.dev/)
-   **Package Manager**: pnpm (recommended) / npm / yarn

## ✨ Features

### Folder UI
A custom-built, animated folder component that expands to reveal content with smooth spring-based transitions.

### Developer Portfolio Page (`/portfolio`)
- Showcases TDC community members with their GitHub profiles and portfolios
- Dark theme with smooth scrolling animations
- Elegant design with horizontal lines and fade effects
- Direct links to member GitHub profiles and personal websites

### WhatsApp Community Rules (`/rules`)
- Comprehensive community guidelines for the TDC WhatsApp group
- 11 well-defined rules with emojis and descriptions
- Direct "Join WhatsApp Group" button
- Consistent dark theme and animations

### Custom 404 Page
- Unique pixelated postcard design featuring Serengeti
- Tanzania-themed error messaging
- Smooth animations and interactive elements

### Additional Features
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Modern Animations**: Smooth, spring-based transitions throughout
- **Dark Theme**: Consistent dark mode across all pages
- **SEO Optimized**: Proper metadata, sitemap, and structured data
- **Accessible**: Proper ARIA labels and semantic HTML

## 🏁 Getting Started

Follow these steps to get the project running on your local machine.

### Prerequisites

Ensure you have Node.js installed. We recommend using `pnpm` for package management.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/astrod333/tdc.git
    cd tdc
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    # or
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**

    ```bash
    pnpm dev
    # or
    npm run dev
    # or
    yarn dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📂 Project Structure

-   `app/`: Main application routes and pages (Next.js App Router)
    -   `portfolio/`: Developer portfolio showcase
    -   `rules/`: WhatsApp community rules
    -   `not-found.tsx`: Custom 404 page
-   `components/`: Reusable UI components
    -   `folder.tsx`: Folder navigation
    -   `portfolio.tsx`: Portfolio page component
    -   `rules.tsx`: Rules page component
    -   `ui/`: UI components including 404 error page
-   `data/`: Data files
    -   `developers.ts`: Community member information
    -   `rules.ts`: WhatsApp community rules
-   `public/`: Static assets (images, icons, backgrounds)

## 🎨 Pages

### Home (`/`)
Folder interface with background imagery showcasing Tanzania.

### Portfolio (`/portfolio`)
Browse through TDC community members, their GitHub profiles, and personal portfolios.

### Rules (`/rules`)
Read the WhatsApp community guidelines and join the group.

### 404 Page
Custom error page with Tanzania-themed design.

## 🤝 Contributing

We welcome contributions from the community! Whether it's fixing bugs, improving the UI, or adding new features, your help is appreciated.

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes (`git commit -m 'Add some amazing feature'`).
4.  Push to the branch (`git push origin feature/amazing-feature`).
5.  Open a Pull Request.

## ⭐ Star the Repository

If you find this project useful or interesting, please consider giving it a star! It helps others discover the project and motivates us to keep improving it.

[![GitHub stars](https://img.shields.io/github/stars/astrod333/tdc?style=social)](https://github.com/astrod333/tdc/stargazers)


## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Astro.
