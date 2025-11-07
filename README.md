# NoteCode

A full-stack application with TypeScript frontend and Node.js + Express.js backend.

## Project Structure

```
NoteCode/
├── frontend/          # React + TypeScript + Vite
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Node.js + Express.js + TypeScript
│   ├── src/
│   └── package.json
└── README.md
```

## Tech Stack

### Frontend

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Axios** - HTTP client

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **TypeScript** - Type safety
- **CORS** - Cross-origin resource sharing

## Quick Start

### 1. Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Configure Environment

Create a `.env` file in the backend directory:

```env
PORT=3000
NODE_ENV=development
```

### 3. Start Development Servers

```bash
# Terminal 1 - Start backend (from backend directory)
cd backend
npm run dev

# Terminal 2 - Start frontend (from frontend directory)
cd frontend
npm run dev
```

- Backend runs at: `http://localhost:3000`
- Frontend runs at: `http://localhost:5173`

## Development

- Frontend automatically proxies API requests to the backend
- Both servers support hot reload during development
- TypeScript provides type checking for both frontend and backend

## Production Build

```bash
# Build backend
cd backend
npm run build
npm start

# Build frontend
cd frontend
npm run build
npm run preview
```

## API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Backend health check

## Documentation

- [Frontend Documentation](./frontend/README.md)
- [Backend Documentation](./backend/README.md)

## License

See [LICENSE](./LICENSE) file for details.
