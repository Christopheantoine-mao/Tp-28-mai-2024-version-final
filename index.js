import express from 'express';
import barsRoute from './routes/bars.js';
import beersRoute from './routes/beers.js';
import ordersRoute from './routes/orders.js';
import dotenv from 'dotenv';
import cors from 'cors';
import db from './models/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/bars', barsRoute);
app.use('/beers', beersRoute);
app.use('/orders', ordersRoute);

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
