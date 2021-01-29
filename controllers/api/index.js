const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
// router.post('/users/login',(req,res)=>console.log("Hello 2"))
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
