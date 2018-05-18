const model = require('./model.js');

module.exports = {

  user: {

    get: function (req, res) {
      model.user.get(req.params.username, function(err, result) {
        if(err) {
          res.sendStatus(500);
          return;
        } else {
          console.log('GET USER RESULT:: ', result);
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

      model.user.signUpUser(user, function(err, result) {
        if(err) {
          console.log('controller user signup error ::', err)
        } else {
          res.sendStatus(201);
        }
      });
    },

    putBucketList: function (req, res) {
      model.user.putBucketList(req.body.user, function(err, result) {
        if(err) {
          console.log('controller user put bucket_list error ::', err)
        } else {
          res.sendStatus(201);
        }
      });
    },

    removeBucketList: function (req, res) {
      model.user.removeBucketList(req.body.user, function(err, result) {
        if(err) {
          console.log('controller user remove bucket_list error ::', err)
        } else {
          res.sendStatus(202);
        }
      });
    },

    putMemories: function (req, res) {
      model.user.putMemories(req.body.user, function(err, result) {
        if(err) {
          console.log('controller user put memories error ::', err)
        } else {
          res.sendStatus(201);
        }
      });
    },

    removeMemories: function (req, res) {
      model.user.postMemories(req.body.user, function(err, result) {
        if(err) {
          console.log('controller user post memories error ::', err)
        } else {
          res.sendStatus(202);
        }
      });
    },

    postBlogEntries: function (req, res) {
      model.user.postBlogEntires(req.body.user, function(err, result) {
        if(err) {
          console.log('controller user post blog entries error ::', err)
        } else {
          res.sendStatus(201);
        }
      });
    },

    removeBlogEntries: function (req, res) {
      model.user.postBlogEntires(req.body.user, function(err, result) {
        if(err) {
          console.log('controller user post blog entries error ::', err)
        } else {
          res.sendStatus(202);
        }
      });
    }

  },

  destination: {

    get: function (req, res) {
      model.destination.get(function(err, result) {
        if(err) {
          console.log('controller destination get error ', err);
          res.sendStatus(500);          
          return;
        } else {
          res.send(result);
        }      
      });
    },

    putBucketList: function (req, res) {
      model.destination.putBucketList(function(err, result) {
        if(err) {
          console.log('controller user put bucket_list error ::', err)
        } else {
          res.sendStatus(201);
        }
      });
    },

    putMemories: function (req, res) {
      model.destination.putMemories(function(err, result) {
        if(err) {
          console.log('controller user put memories error ::', err)
        } else {
          res.sendStatus(201);
        }
      });
    },

  },
};
  