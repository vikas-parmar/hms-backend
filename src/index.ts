// src/index.js
import 'module-alias/register';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import databaseConnection from './config/db';

dotenv.config({ path: './.env.development.local' });

const app: Express = express();
const port = process.env.PORT;

databaseConnection(process.env.ATLAS_URL, process.env.LOCAL_URL);

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
