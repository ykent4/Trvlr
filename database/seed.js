
const db = require ('./index.js');
const mongoose = require('mongoose');
const faker = require ('faker');


var destinationArr = [];
function createDestinationData () {
  for(let i = 0; i < 50; i++) {
    destinationArr.push({
      name: faker.address.streetName(),
      description: faker.lorem.sentence(),
      picture: `https://s3-us-west-1.amazonaws.com/hrsf93-fec-pictures/Living+Room/livingroomimage${i+1}.jpg`,
      bucket_list: Math.floor(Math.random() * Math.floor(10)),
      memories: Math.floor(Math.random() * Math.floor(10)),
    })
  }
};

var userArr = [];
function createUserData () {
  for(let j = 0; j < 10; j++) {
    userArr.push({
      username: faker.internet.userName(),
      bucket_list: [],
      memories: [],
      blog_posts: [{
        title: faker.random.words(),
        destination: faker.address.streetName(),
        text: faker.lorem.sentences(),
      }]
    })
  }
};

createDestinationData();
createUserData();

db.Destination.insertMany(destinationArr)
  .then(()=> mongoose.disconnect());
db.User.insertMany(userArr)
  .then(() => mongoose.disconnect());
