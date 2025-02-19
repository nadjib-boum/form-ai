import express, { type Application } from 'express';
import dotenv from 'dotenv';
import router from './controllers';
import errorHandler from './handlers/error';

dotenv.config();

import './config/db';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(`/api`, router);
app.use(errorHandler);


const PORT: number = +(process.env.PORT!) || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});