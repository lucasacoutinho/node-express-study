import express from 'express';
import DB from './src/config/database.js';
import api from './src/routes/api.js';

DB.on('error', console.log.bind(console, 'Failed to connect to the database.'));

DB.once('open', () => {
  console.log('Database connection established sucessfully');
});

const server = express();
server.use(express.json());
server.use(api);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
