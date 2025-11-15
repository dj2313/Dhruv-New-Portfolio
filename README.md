# Portfolio Website

A modern, cyberpunk-themed portfolio website built with React, TypeScript, Tailwind CSS v4, and Framer Motion. Features a futuristic design with neon cyan and fuchsia accents, dark backgrounds, and smooth animations.

## Features

- ✨ Beautiful animated UI with Framer Motion
- 🎨 Cyberpunk theme with neon cyan/fuchsia accents
- 🌙 Dark mode support with tech-inspired design
- 📱 Fully responsive
- ⚡ Built with Vite for fast development
- 🎯 TypeScript for type safety
- 🎭 3D animated stars background using React Three Fiber
- 🌍 Revolving tech globe avatar with grid pattern
- 💫 Neon glow effects and shadows
- 📧 Working email and phone contact links

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **React Three Fiber** - 3D graphics
- **Lucide React** - Icons
- **Radix UI** - Accessible components
- **Class Variance Authority** - Component variants

## Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## Project Structure

```
portfolio-testing/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── button.tsx       # Reusable button component
│   │   ├── Stars.tsx            # 3D stars background component
│   │   └── AnimatedTextCycle.tsx # Animated text cycling component
│   ├── lib/
│   │   └── utils.ts             # Utility functions
│   ├── App.tsx                  # Main portfolio component
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Tailwind CSS styles
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript configuration
├── vite.config.ts               # Vite configuration
└── postcss.config.js            # PostCSS configuration
```

## Components

### App.tsx
The main portfolio component showcasing:
- Hero section with animated text
- About section
- Skills & Technologies
- Featured Projects
- Client Testimonials
- Contact form

### Stars.tsx
3D animated stars background using React Three Fiber and Drei.

### AnimatedTextCycle.tsx
Animated text component that cycles through words with smooth transitions.

### Button (ui/button.tsx)
Reusable button component with multiple variants and sizes using Class Variance Authority.

## Customization

### Colors
Edit the CSS variables in `src/index.css` to customize the color scheme.

### Content
Update the data arrays in `App.tsx`:
- `projects` - Your portfolio projects
- `testimonials` - Client testimonials
- `languagesFrameworks` - Your skills
- `databases` - Database technologies

### Contact Information
Update the contact information in the contact section of `App.tsx`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

