import express from 'express';
import cors from 'cors';
import { loadEnv } from './config/env';
import { setupRoutes } from './routes';
import { errorHandler } from './middleware/errorHandler';

// Load environment variables
loadEnv();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
setupRoutes(app);

// Error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});