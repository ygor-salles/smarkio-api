import 'dotenv/config';
import 'reflect-metadata';
import './database';
import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.API_PORT, () => console.log(`Server is running ${process.env.API_PORT}`));