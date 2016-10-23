module.exports = {
    db: process.env.MONGODB || process.env.MONGOLAB_URI 
    || 'mongodb://localhost:27017/test'
};
