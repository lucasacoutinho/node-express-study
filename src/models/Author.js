import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    nationality: { type: String},
}, {
  versionKey: false
});

export default mongoose.model('authors', schema);
