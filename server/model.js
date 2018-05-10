const db = require('../database/index.js');

module.exports = {

  //REFACTOR SERVER AS ALL THE POSTS AND DELETES ARE VERY SIMILAR

  user: {
    //gets all the locations saved and traveled for the user
    get: function (user, cb) {
      db.User.findOne({ name: user })
        .exec(cb);
    },

    signUpUser: function (user, cb) {

      let newUser = new User(user);

      user.save((err) => {
        if (err) {
          console.log('sign up user save error ', err);
        }
      });

    },

    //add and remove from db
    putBucketList: function (user, location, cb) {
      db.User.findOne({ name: user })
        .then((user) => {
          if (user.bucket_list.includes(location)) {
            console.log('already put to bucket_list');
            return;
          } else {
            user.bucket_list.push(location);
          }

          user.save((err) => {
            if (err) {
              console.log('user putBucketList save err :: ', err);
            }
          });
        })
        .catch((err) => console.log('user model putBucketList err :: ', err))
        .exec(cb);
    },

    removeBucketList: function (user, location, cb) {
      db.User.findOne({ name: user })
        .then((user) => {
          if (user.bucket_list.includes(location)) {
            for (let i = 0; i < user.bucket_list.length; i++) {
              if (user.bucket_list[i] === location) {
                user.bucket_list.splice(i, 1);
              }
            }
          } else {
            console.log('already removed');
            return;
          }

          user.save(((err) => {
            if (err) {
              console.log('user removeBucketList save err :: ', err);
            }
          }
          ));
        })
        .catch((err) => console.log('user model removeBucketList err :: ', err))
        .exec(cb);
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

          user.save(((err) => {
            if (err) {
              console.log('user putMemories save err :: ', err);
            }
          }
          ));
        })
        .catch((err) => console.log('user model putMemories err :: ', err))
        .exec(cb);
    },

    removeMemories: function (user, location, cb) {
      db.User.findOne({ name: user })
        .then((user) => {
          if (user.memories.includes(location)) {
            for (let i = 0; i < user.memories.length; i++) {
              if (user.memories[i] === location) {
                user.memories.splice(i, 1);
              }
            }
          } else {
            console.log('already removed');
            return;
          }

          user.save(((err) => {
            if (err) {
              console.log('user removeMemories save err :: ', err);
            }
          }
          ));
        })
        .catch((err) => console.log('user model removeMemories err :: ', err))
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

          user.save(((err) => {
            if (err) {
              console.log('user postBlog save err :: ', err);
            }
          }
          ));
        })
        .catch((err) => console.log('user model postBlog err :: ', err))
        .exec(cb);
    },

    removeBlogEntries: function (user, blogPost, cb) {
      db.User.findOne({ name: user })
        .then((user) => {
          if (user.blog_posts.includes(location)) {
            for (let i = 0; i < user.blog_posts.length; i++) {
              if (user.blog_posts[i] === location) {
                user.blog_posts.splice(i, 1);
              }
            }
          } else {
            console.log('already removed');
            return;
          }

          user.save(((err) => {
            if (err) {
              console.log('user removeBlogEntries save err :: ', err);
            }
          }
          ));
        })
        .catch((err) => console.log('user model removeBlogEntries err :: ', err))
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
    putBucketList: function (destination, location, cb) {
      db.Destination.findOneAndUpdate({ name: destination }, { $inc: { bucket_list: 1 } })
        .catch((err) => console.log('destination model put bucket list err :: ', err))
        .exec(cb);
    },

    putMemories: function (destination, location, cb) {
      db.Destination.findOneAndUpdate({ name: destination }, { $inc: { memories: 1 } })
        .catch((err) => console.log('destination model put bucket list err :: ', err))
        .exec(cb);
    },

  }

};