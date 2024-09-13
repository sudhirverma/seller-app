const mongoose = require('mongoose');

mongoose.connect('mongodb://root:beckn@123@localhost:3010/beckn?authSource=admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 90000
}).then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));
