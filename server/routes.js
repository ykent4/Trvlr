const controller = require('./controller.js');
const router = require('express').Router();

router.get('/destination', controller.destination.get);

router.put('/lists/put_bucket_list', controller.lists.putBucketList);

router.delete('/lists/remove_bucket_list', controller.lists.deleteBucketList);

router.put('/lists/put_memories', controller.lists.putMemories);

router.delete('/lists/remove_memories', controller.lists.deleteMemories);

router.get('/user/login/:username', controller.user.get);

router.post('/user/signup', controller.user.signUpUser);

router.post('/user/post_blog_entries', controller.user.postBlogEntries);

router.delete('/user/remove_blog_entries', controller.user.deleteBlogEntries);


module.exports = router;

