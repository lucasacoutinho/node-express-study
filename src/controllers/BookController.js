import Book from '../models/Book.js';

export const index = async (req, res) => {
  const books = await Book.find().populate('author', 'name').exec();
  res.status(200).json({ data: books });
};

export const show = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id).populate('author', 'name').exec();
    res.status(200).json({ data: book });
  } catch (err) {
    res.status(500).json({ message: `${err.message}` });
  }
};

export const store = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ data: book.toJSON() });
  } catch (err) {
    res.status(500).json({ message: `${err.message}` });
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  try {
    await Book.findByIdAndUpdate(id, { $set: req.body });
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: `${err.message}` });
  }
};

export const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    await Book.findByIdAndDelete(id);
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: `${err.message}` });
  }
};

export const getByPublisher = async (req, res) => {
  const { publisher } = req.query;
  try {
    const books = await Book.find({publisher: publisher});
    res.status(200).json({data: books});
  } catch (err) {
    res.status(500).json({ message: `${err.message}` });
  }
};
