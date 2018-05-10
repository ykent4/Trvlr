const controller = require('./controller.js');
const router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/user/login', controller.user.get);

router.post('/user/signup', controller.user.signUpUser);

router.put('/user/put_bucket_list', controller.user.putBucketList);

router.delete('/user/remove_bucket_list', controller.user.removeBucketList);

router.put('/user/put_memories', controller.user.putMemories);

router.delete('/user/remove_memories', controller.user.removeMemories);

router.post('/user/post_blog_entries', controller.user.postBlogEntries);

router.delete('/user/remove_blog_entries', controller.user.removeBlogEntries);

router.get('/destination', controller.destination.get);

router.put('/destination/bucket_list', controller.destination.putBucketList);

router.put('/destination/memories', controller.destination.putMemories);


module.exports = router;

