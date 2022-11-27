import Author from '../models/Author.js';

export const index = async (req, res) => {
  const authors = await Author.find();
  res.status(200).json({ data: authors });
};

export const show = async (req, res) => {
  const { id } = req.params;
  try {
    const author = await Author.findById(id);
    res.status(200).json({ data: author.toJSON() });
  } catch (err) {
    res.status(500).json({ message: `${err.message}` });
  }
};

export const store = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json({ data: author.toJSON() });
  } catch (err) {
    res.status(500).json({ message: `${err.message}` });
  }
};

export const update = async (req, res) => {
  const { id } = req.params;
  try {
    await Author.findByIdAndUpdate(id, { $set: req.body });
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: `${err.message}` });
  }
};

export const destroy = async (req, res) => {
  const { id } = req.params;
  try {
    await Author.findByIdAndDelete(id);
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ message: `${err.message}` });
  }
};
