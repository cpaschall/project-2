const router = require('express').Router();
const userRoutes = require('./userRoute');
const projectRoutes = require('./projectRoutes')
const commentRoutes = require('./comment-route')

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
// router.use('/comments', commentRoutes);

module.exports = router;