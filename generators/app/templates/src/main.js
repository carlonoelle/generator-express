import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.HTTP_PORT || 8080;

app
  .use(helmet())
  .use(compression())
  .use(cors({ origin: '*', optionsSuccessStatus: 200 }))
  .use(bodyParser.json());

app.use(express.static('public'));

app.listen(port, () => console.log(`Server started on port ${port} 🚀`));
