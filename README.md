# Portfolio Uno

A modern, responsive portfolio website showcasing the work of Sengphachanh Chanthavong (tyecode), a passionate Front-end Developer. Built with Next.js 14 and featuring a unique Matrix-style animated background, dark theme, and smooth section transitions.

## ✨ Features

- **Matrix Background Animation**: Custom Canvas-based Matrix rain effect
- **Responsive Design**: Optimized for all device sizes with mobile-first approach
- **Dark Theme**: Sleek dark interface with custom color scheme
- **Section Navigation**: Smooth transitions between About, Experience, and Projects sections
- **Social Media Integration**: Direct links to GitHub, LinkedIn, Facebook, and email
- **SEO Optimized**: Complete meta tags, Open Graph, and sitemap
- **Testing**: Unit tests with Jest and React Testing Library
- **Code Quality**: ESLint and Prettier for consistent code formatting

## 🛠️ Tech Stack

### Core Framework

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and developer experience
- **[React 18](https://reactjs.org/)** - UI library with latest features

### Styling & UI

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[NextUI](https://nextui.org/)** - Modern React UI library
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[FontAwesome](https://fontawesome.com/)** - Icon library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible UI primitives

### State Management & Utilities

- **[Zustand](https://github.com/pmndrs/zustand)** - Lightweight state management
- **[clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Conditional className utilities
- **[class-variance-authority](https://github.com/joe-bell/cva)** - Component variant API

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/react)** - Testing framework

## 📁 Project Structure

```
portfolio-uno/
├── app/                          # Next.js App Router
│   ├── (root)/                   # Route group
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # App layout
│   └── providers.tsx            # NextUI provider
├── components/                   # React components
│   ├── cards/                   # Card components
│   ├── sections/                # Page sections
│   ├── ui/                      # UI components
│   ├── header.tsx               # Main header
│   ├── footer.tsx               # Footer component
│   ├── matrix-background.tsx    # Matrix animation
│   └── navigation-bar.tsx       # Navigation
├── constants/                    # Configuration & data
│   ├── config.ts                # Site configuration
│   ├── experience.ts            # Work experience data
│   ├── nav-links.ts             # Navigation links
│   └── projects.ts              # Projects data
├── lib/                         # Utilities
│   └── utils.ts                 # Helper functions
├── stores/                      # Zustand stores
│   └── use-section-store.ts     # Section state management
└── __tests__/                   # Test files
    └── header.test.tsx          # Component tests
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and pnpm (recommended) or npm

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/tyecode/portfolio-uno.git
cd portfolio-uno
```

**2. Install dependencies**

```bash
# Using pnpm (recommended)
pnpm install

# Using npm
npm install
```

**3. Run the development server**

```bash
# Using pnpm
pnpm dev

# Using npm
npm run dev
```

**4. Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

- **`dev`** - Start development server
- **`build`** - Build for production
- **`start`** - Start production server
- **`lint`** - Run ESLint and Prettier checks
- **`lint:eslint`** - Run ESLint only
- **`lint:prettier`** - Run Prettier check only
- **`fix`** - Auto-fix ESLint and Prettier issues
- **`fix:eslint`** - Auto-fix ESLint issues only
- **`fix:prettier`** - Auto-fix Prettier formatting

## 🎨 Customization

### Site Configuration

Update personal information in `constants/config.ts`:

```typescript
export const CONFIG = {
  url: 'https://your-domain.com/',
  name: 'Your Name',
  skill: 'Your Title',
  description: 'Your description...',
}
```

### Theme Colors

Modify colors in `tailwind.config.ts` under the NextUI theme configuration.

### Content Updates

- **About Section**: Update `components/sections/about-section.tsx`
- **Projects**: Modify `constants/projects.ts`
- **Experience**: Update `constants/experience.ts`
- **Social Links**: Edit the `SocialMedia` array in `components/header.tsx`

## 🚀 Deployment

This project is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tyecode/portfolio-uno)

### Other Platforms

The application can be deployed on any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

Licensed under the [MIT License](https://github.com/tyecode/portfolio-uno/blob/main/LICENSE).

## 👨‍💻 Author

**Sengphachanh Chanthavong (tyecode)**

- Website: [tyecode.dev](https://tyecode.dev/)
- GitHub: [@tyecode](https://github.com/tyecode)
- LinkedIn: [tyecode](https://www.linkedin.com/in/tyecode)
- Email: [sengphachanh.dev@gmail.com](mailto:sengphachanh.dev@gmail.com)
