import 'reflect-metadata'
import express from 'express';
import './database'
import { router } from './routes';
import dotenv from 'dotenv'
dotenv.config();

const app = express();

app.use(express.json());
app.use(router)

export { app }