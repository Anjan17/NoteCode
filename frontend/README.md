# NoteCode Frontend

Modern frontend application built with React, TypeScript, and Vite.

## Features

- ⚛️ React 18
- 📘 TypeScript for type safety
- ⚡ Vite for fast development
- 🎨 Modern CSS styling
- 🔌 Axios for API calls
- 🔥 Hot Module Replacement (HMR)

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

```bash
# Install dependencies
npm install
```

## Development

```bash
# Run development server
npm run dev
```

The application will start at `http://localhost:5173`

## Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
frontend/
├── src/
│   ├── main.tsx        # Entry point
│   ├── App.tsx         # Main App component
│   ├── App.css         # App styles
│   └── index.css       # Global styles
├── public/
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## API Integration

The frontend is configured to proxy API requests to the backend server:

- Development: `http://localhost:3000`
- Requests to `/api/*` are automatically proxied

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build
