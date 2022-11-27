import mongoose, { Mongoose } from 'mongoose';

const schema = new mongoose.Schema({
    id: { type: String },
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'authors', required: true },
    publisher: { type: String, required: true },
    page_quantity: { type: Number }
});

export default mongoose.model('books', schema);
