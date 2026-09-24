# Hussein Haidar, portfolio

Live site: https://husseinhaidar-portfolio.web.app

I built this site with React 18 and Vite. It has no UI library, and I deploy it to Firebase Hosting.

## What you'll find

Experience, projects, skills, education and contact on one page. Press Ctrl K (⌘K on a Mac) to jump to a section, copy my email or download my CV.

## Decisions

- My CV (`public/Hussein_Haidar_CV.pdf`) is the source of truth. I update the CV first and copy its figures and titles into the site.
- I describe client platforms by what they do and leave out product and client names, since that work falls under client confidentiality.
- `src/App.css` holds the design tokens: one teal accent, a four-step type scale and two corner radii. Dark mode is the default; light mode follows your OS setting.
- I checked every text colour pair against WCAG AA in both themes. The Ctrl K menu keeps focus inside while open, Escape closes it, and the closed mobile menu has no reachable links.
- The hero fades in once. Turn on reduced motion and it appears instantly.

## Structure

```
src/
  App.jsx             section order
  Nav.jsx             top bar and mobile menu
  Hero.jsx
  Experience.jsx
  Projects.jsx
  Skills.jsx
  Education.jsx
  Contact.jsx         email copy button with a keyboard fallback
  Footer.jsx
  CommandPalette.jsx  Ctrl K menu
  App.css             tokens and all styles
public/               CV, photo, favicon, link-preview image
```

## Run it

```bash
npm install
npm run dev      # local server
npm run lint
npm run deploy   # build, then deploy to Firebase Hosting
```
