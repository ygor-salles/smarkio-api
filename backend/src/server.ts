import 'reflect-metadata';
import express from 'express';
import './database';
import cors from 'cors';
import routes from './routes';
import 'dotenv/config';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.API_PORT, () => console.log(`Server is running ${process.env.API_PORT}`));