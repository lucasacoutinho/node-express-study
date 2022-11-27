import mongoose from 'mongoose';

mongoose.connect('mongodb://mongodb:27017/master?readPreference=primary&ssl=false&directConnection=true');

export default mongoose.connection;
