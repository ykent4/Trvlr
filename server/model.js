const db = require('../database/index.js');

module.exports = {

  //REFACTOR SERVER AS ALL THE POSTS AND DELETES ARE VERY SIMILAR

  user: {
    //gets all the locations saved and traveled for the user
    get: function (user, cb) {
      db.User.findOne({ "username": user })
        .exec(cb);
    },

    signUpUser: function (user, cb) {
      let newUser = new db.User(user);
      newUser.save((err, newUser) => {
        if (err) {
          console.log('sign up user save error ', err);
        } else {
          cb(null, newUser);
        }
      })
    },

    putBucketList: function (user, location, cb) {
      db.User.findOne({ name: user })
        .then((user) => {
          if (user.bucket_list.includes(location)) {
            console.log('already put to bucket_list');
            return;
          } else {
            user.bucket_list.push(location);
          }

          user.save((err, updatedUser) => {
            if (err) {
              console.log('user putBucketList save err :: ', err);
            } else {
              cb(null, updatedUser);
            }
          });
        })
        .catch((err) => console.log('user model putBucketList err :: ', err))
    },

    deleteBucketList: function (user, location, cb) {
      db.User.findOne({ name: user })
        .then((user) => {
          if (user.bucket_list.includes(location)) {
            user.bucket_list.splice(user.bucket_list.indexOf(location))            
            // for (let i = 0; i < user.bucket_list.length; i++) {
            //   if (user.bucket_list[i] === location) {
            //     user.bucket_list.splice(i, 1);
            //   }
            // }
          } else {
            console.log('already deleted');
            return;
          }

          user.save((err, updatedUser) => {
            if (err) {
              console.log('user deleteBucketList save err :: ', err);
            } else {
              cb(null, updatedUser);
            }
          });
        })
        .catch((err) => console.log('user model deleteBucketList err :: ', err));
    },

    putMemories: function (user, location, cb) {
      db.User.findOne({ name: user })
        .then((user) => {
          if (user.memories.includes(location)) {
            console.log('already put to memories');
            return;
          } else {
            user.memories.push(location);
          }

          user.save((err, updatedUser) => {
            if (err) {
              console.log('user putMemories save err :: ', err);
            } else {
              cb(null, updatedUser)
            }
          });
        })
        .catch((err) => console.log('user model putMemories err :: ', err))
    },

    deleteMemories: function (user, location, cb) {
      db.User.findOne({ name: user })
        .then((user) => {
          if (user.memories.includes(location)) {
            user.memories.splice(user.memories.indexOf(location))
          } else {
            console.log('already deleted');
            return;
          }

          user.save((err) => {
            if (err, updatedUser) {
              console.log('user deleteMemories save err :: ', err);
            } else {
              cb(null, updatedUser);
            }
          });
        })
        .catch((err) => console.log('user model deleteMemories err :: ', err))
        .exec(cb);
    },

    postBlogEntries: function (user, blogPost, cb) {
      db.User.findOne({ name: user })
        .then((user) => {
          if (user.blog_posts.includes(location)) {
            console.log('already posted to blog_posts');
            return;
          } else {
            user.blog_posts.push(blogPost);
          }

          user.save((err, updatedUser) => {
            if (err) {
              console.log('user postBlog save err :: ', err);
            } else {
              cb(null, updatedUser)
            }
          });
        })
        .catch((err) => console.log('user model postBlog err :: ', err))
    },

    deleteBlogEntries: function (user, blogPost, cb) {
      db.User.findOne({ name: user })
        .then((user) => {
          if (user.blog_posts.includes(location)) {
            user.blog_posts.splice(user.blog_posts.indexOf(location))            
            // for (let i = 0; i < user.blog_posts.length; i++) {
            //   if (user.blog_posts[i] === location) {
            //     user.blog_posts.splice(i, 1);
            //   }
            // }
          } else {
            console.log('already deleted');
            return;
          }

          user.save(((err, updatedUser) => {
            if (err) {
              console.log('user deleteBlogEntries save err :: ', err);
            } else {
              cb(null, updatedUser);
            }
          }
          ));
        })
        .catch((err) => console.log('user model deleteBlogEntries err :: ', err))
        .exec(cb);

    },

  },

  destination: {
    //get the traveled list of the user
    get: function (cb) {
      console.log('get destination happening');
      db.Destination.find()
        .exec(cb);
    },
    //add to number of times destination has been on bucket list
    putBucketList: function (destination, cb) {
      db.Destination.findOneAndUpdate({ name: destination }, { $inc: { bucket_list: 1 } }, {new: true}, function(err, result){
        if(err) {
          console.log('destination model put bucket list err :: ', err);
        } else {
          cb(null, result);
        }
      })
    },

    deleteBucketList: function (destination, cb) {
      db.Destination.findOneAndUpdate({ name: destination }, { $inc: { bucket_list: -1 } })
        .catch((err) => console.log('destination model delete bucket list err :: ', err))
        .exec(cb);
    },

    putMemories: function (destination, cb) {
      db.Destination.findOneAndUpdate({ name: destination }, { $inc: { memories: 1 } }, {new: true}, function(err, result){
        if(err) {
          console.log('destination model memories err :: ', err);
        } else {
          cb(null, result);
        }
      })
    },

    deleteMemories: function (destination, cb) {
      db.Destination.findOneAndUpdate({ name: destination }, { $inc: { memories: -1 } })
        .catch((err) => console.log('destination model delete bucket list err :: ', err))
        .exec(cb);
    },

  }

};