/* eslint camelcase: 0 */ // --> OFF
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/travelboard');

mongoose.connection.on('connected', () => console.log('Mongo Connected'));
mongoose.connection.on('error', (err) => console.log('Mongo Connection failed with - ', err));

const destinationSchema = new mongoose.Schema({
  name: String,
  description: String,
  picture: String,
  bucket_list: Number,
  memories: Number
},{
  usePushEach: true
});

const userSchema = new mongoose.Schema({
  username: String,
  bucket_list: [String],
  memories: [String],
  blog_posts: [{
    title: String,
    destination: String,
    text: String
  }]
},{
  usePushEach: true
});

module.exports.Destination = mongoose.model('Destination', destinationSchema);
module.exports.User = mongoose.model('User', userSchema);