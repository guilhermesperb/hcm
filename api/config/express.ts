import express from 'express';
import setupRoutes from './routes';
import cors from 'cors'
import { corsHeaders } from './cors-headers';

const app = express();

app.use(cors({
    origin: ['*', 'http://localhost:8000', 'http://localhost:8000/', 'https://hcm.guilhermesperb.com.br/']
}));
app.use(corsHeaders);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupRoutes(app);

export default app;
