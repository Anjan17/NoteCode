# NoteCode Backend

Backend API built with Node.js, Express.js, and TypeScript.

## Features

- ✅ TypeScript for type safety
- ✅ Express.js for RESTful API
- ✅ CORS enabled
- ✅ Environment variables support
- ✅ Error handling middleware
- ✅ Health check endpoint

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

```bash
# Install dependencies
npm install
```

## Configuration

Create a `.env` file in the backend directory:

```env
PORT=3000
NODE_ENV=development
```

## Development

```bash
# Run in development mode with hot reload
npm run dev
```

The server will start at `http://localhost:3000`

## Production

```bash
# Build TypeScript to JavaScript
npm run build

# Start production server
npm start
```

## API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check endpoint

## Project Structure

```
backend/
├── src/
│   ├── index.ts              # Entry point
│   ├── routes/
│   │   ├── index.ts          # Route aggregator
│   │   └── health.ts         # Health check routes
│   └── middleware/
│       └── errorHandler.ts   # Global error handler
├── package.json
├── tsconfig.json
└── nodemon.json
```
