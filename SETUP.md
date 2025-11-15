# Setup Instructions

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## Important Notes

### Tailwind CSS v4

This project uses **Tailwind CSS v4 alpha**. If you encounter issues:

1. **Option 1: Use Tailwind v3 (Recommended for stability)**
   ```bash
   npm install -D tailwindcss@^3 postcss autoprefixer
   ```
   
   Then update `src/index.css` to use Tailwind v3 syntax:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
   
   And create `tailwind.config.js`:
   ```js
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

2. **Option 2: Keep Tailwind v4 alpha**
   - Make sure you're using the latest alpha version
   - Some features might not work as expected
   - Check [Tailwind CSS v4 documentation](https://tailwindcss.com/docs) for updates

### Dependencies

All required dependencies are listed in `package.json`. The main packages include:

- **framer-motion** - Animations
- **@react-three/fiber** - 3D rendering
- **@react-three/drei** - Three.js helpers
- **maath** - Math utilities for 3D
- **@radix-ui/react-slot** - Component composition
- **class-variance-authority** - Component variants
- **lucide-react** - Icons

### Project Structure

The project follows a clean component structure:

- `src/components/` - Reusable components
- `src/components/ui/` - UI primitives (Button, etc.)
- `src/lib/` - Utility functions
- `src/App.tsx` - Main portfolio component

### Customization

1. **Update content**: Edit the data arrays in `src/App.tsx`
2. **Change colors**: Modify CSS variables in `src/index.css`
3. **Add sections**: Extend `PortfolioWebsite` component in `src/App.tsx`

### Building for Production

```bash
npm run build
```

The output will be in the `dist/` directory.

### Troubleshooting

**Issue: Tailwind styles not applying**
- Check that `src/index.css` is imported in `src/main.tsx`
- Verify PostCSS configuration
- Try clearing node_modules and reinstalling

**Issue: 3D stars not showing**
- Ensure `@react-three/fiber` and `@react-three/drei` are installed
- Check browser console for WebGL errors

**Issue: TypeScript errors**
- Run `npm install` to ensure all types are installed
- Check `tsconfig.json` configuration

