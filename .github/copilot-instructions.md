# Copilot Instructions for imersao-mulheres-saudaveis

## Project Overview
- This is a single-page React application bootstrapped with Create React App.
- UI components are located in `src/components/` and use a mix of Bootstrap and Tailwind CSS utility classes for styling.
- The main entry point is `src/index.js`, which loads `App.jsx`.
- Static assets (images, icons, manifest) are in `public/`.

## Key Workflows
- **Start development server:** `npm start` (runs on http://localhost:3000)
- **Run tests:** `npm test` (Jest, see `src/App.test.js`)
- **Build for production:** `npm run build` (outputs to `build/`)

## Component Patterns
- Components are functional and use props/state minimally; most data is hardcoded (see `Palestrantes.jsx` for example).
- Layout is managed with Bootstrap grid classes (e.g., `row`, `col-md-4`) and utility classes (e.g., `py-5`, `mb-4`, `shadow-sm`, `rounded`).
- Images are placeholders; update `src` attributes in components for real assets.
- Tailwind config is in `tailwind.config.js` and `postcss.config.js`.

## Styling Conventions
- Use Bootstrap classes for layout and card styling, and Tailwind for spacing and colors.
- For border radius, use Bootstrap's `rounded` classes (e.g., `rounded`, `rounded-3`).
- Avoid inline styles; prefer utility classes for consistency.

## Testing
- Tests are in `src/App.test.js` and use Jest/React Testing Library.
- Run tests interactively with `npm test`.

## External Dependencies
- React, Bootstrap, Tailwind CSS (see `package.json` for full list).
- No backend/API integration; all data is local/static.

## Example: Card Component Pattern
```jsx
<div className="card h-100 shadow-sm rounded">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body text-center">
    <h5 className="card-title">...</h5>
    <p className="card-text">...</p>
  </div>
</div>
```

## Directory References
- `src/components/`: All main UI components
- `public/`: Static assets
- `src/App.jsx`: Main app structure

## Notes
- No custom hooks, context, or advanced React patterns are used.
- No environment variables or deployment scripts are present.
- Follow existing utility class patterns for new UI features.
