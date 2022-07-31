//  import types
import type { Express, Request, Response } from 'express';

// import node_modules
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

// import custom modules
import { sendSMS } from './aws';

// import .env variables
dotenv.config();

// Setup the app
const app: Express = express();
const port = process.env.PORT;

// Add middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup route
app.post('/', (req: Request, res: Response) => {
  sendSMS(req.body.message);
});

// Start app
app.listen(port, () => {
  console.log(`⚡️[server]: SNS Server is running at http://localhost:${port}`);
});
