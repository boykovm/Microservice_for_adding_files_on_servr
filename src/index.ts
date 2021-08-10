import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { config } from 'dotenv';

import routes from './index.routes';
import { Constants } from './shared/constants';
import { connection } from './shared/tsgoose';

config({ path: './.env' });

const app: Express = express();
const uri: string = process.env.URI || '';

app.use(bodyParser.json());
app.use(routes);

app.route('*')
  .all((req: Request, res: Response) => {
    res.sendStatus(404);
  });

// @ts-ignore
app.listen(process.env.PORT, process.env.HOST, async () => {
  console.log(`Server was running at http://${Constants.HOSTNAME}:${Constants.PORT}/`);

  connection(uri);
});


