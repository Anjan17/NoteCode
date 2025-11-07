import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { apiRouter } from './routes';
import { errorHandler } from './middleware/errorHandler';
import { notecodeRouter } from './routes/notecode';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
// express (server)
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to NoteCode API' });
});

app.use('/api', apiRouter);
app.use('/api/notecode', notecodeRouter);

// Error handling middleware
app.use(errorHandler);


mongoose.connect(process.env.MONGO_URI as string, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
}).then(() => {
    app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
}).catch((e) => {
    console.log('Error while setting up mongo db', e)
  })

export default app;

