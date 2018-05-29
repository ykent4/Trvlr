const model = require('./model.js');

module.exports = {

  user: {

    get: function (req, res) {
      model.user.get(req.params.username, function (err, result) {
        if (err) {
          res.sendStatus(500);
          return;
        } else {
          res.json(result);
        }
      });
    },

    signUpUser: function (req, res) {

      const user = {
        username: req.body.user,
        bucket_list: [],
        memories: [],
        blog_posts: [{
          title: '',
          destination: '',
          text: ''
        }]
      }

      model.user.signUpUser(user, function (err, result) {
        if (err) {
          console.log('controller user signup error ::', err)
        } else {
          res.json(result);
        }
      });
    },


    postBlogEntries: function (req, res) {
      model.user.postBlogEntires(req.body.user, function (err, result) {
        if (err) {
          console.log('controller user post blog entries error ::', err)
        } else {
          res.end();
        }
      });
    },

    deleteBlogEntries: function (req, res) {
      model.user.postBlogEntires(req.body.user, function (err, result) {
        if (err) {
          console.log('controller user post blog entries error ::', err)
        } else {
          res.end();
        }
      });
    }
  },

  lists: {

    putBucketList: function (req, res) {
      model.user.putBucketList(req.body.username, req.body.destination, function (err, result) {
        if (err) {
          console.log('controller user put bucket_list error ::', err)
        } else {
          if (req.body.usage === 'user') {
            res.json(result);
          }
        }
      });

      model.destination.putBucketList(req.body.destination, function (err, result) {
        if (err) {
          console.log('controller user put bucket_list error ::', err)
        } else {
          if (req.body.usage === 'destination') {
            res.json(result);
          }
        }
      });
    },

    deleteBucketList: function (req, res) {
      model.user.deleteBucketList(req.body.username, req.body.destination, function (err, result) {
        if (err) {
          console.log('controller user delete bucket_list error ::', err)
        } else {
          if (req.body.usage === 'user') {
            res.json(result);
          }
        }
      });

      model.destination.deleteBucketList(req.body.destination, function (err, result) {
        if (err) {
          console.log('controller user put bucket_list error ::', err)
        } else {
          if (req.body.usage === 'destination') {
            res.json(result);
          }
        }
      });
    },

    putMemories: function (req, res) {
      model.user.putMemories(req.body.user, req.body.destination, function (err, result) {
        if (err) {
          console.log('controller user put memories error ::', err)
        } else {
          if (req.body.usage === 'user') {
            res.json(result);
          }
        }
      });

      model.destination.putMemories(req.body.destination, function (err, result) {
        if (err) {
          console.log('controller user put memories error destination::', err)
        } else {
          if (req.body.usage === 'destination') {
            res.json(result);
          } 
        }
      });
    },

    deleteMemories: function (req, res) {
      model.user.deleteMemories(req.body.username, req.body.destination, function (err, result) {
        if (err) {
          console.log('controller user post memories error ::', err)
        } else {
          if (req.body.usage === 'user') {
            res.json(result);
          } 
        }
      });

      model.destination.deleteMemories(req.body.destination, function (err, result) {
        if (err) {
          console.log('controller user put memories error ::', err)
        } else {
          if (req.body.usage === 'destination') {
            res.json(result);
          } 
        }
      });
    }

  },

  destination: {

    get: function (req, res) {
      model.destination.get(function (err, result) {
        if (err) {
          console.log('controller destination get error ', err);
          res.sendStatus(500);
          return;
        } else {
          res.json(result);
        }
      });
    },
  },
};
