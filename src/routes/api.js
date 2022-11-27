import {Router as router} from 'express';
import * as BookController from '../controllers/BookController.js';
import * as AuthorController from '../controllers/AuthorController.js';

const api = router();

api.get('/', (req, res) => {
  res.status(200).json('Hello World');
});

api.get('/book', BookController.index);
api.post('/book', BookController.store);
api.get('/book/:id', BookController.show);
api.put('/book/:id', BookController.update);
api.delete('/book/:id', BookController.destroy);

api.get('/publisher/books', BookController.getByPublisher);

api.get('/author', AuthorController.index);
api.post('/author', AuthorController.store);
api.get('/author/:id', AuthorController.show);
api.put('/author/:id', AuthorController.update);
api.delete('/author/:id', AuthorController.destroy);

export default api;
