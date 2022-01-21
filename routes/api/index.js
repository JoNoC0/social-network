// set express requirement
const router = require('express').Router();

// set user and thought routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// add `/user` to created routes
router.use('/users', userRoutes);

// add `/thought` to created routes
router.use('/thoughts', thoughtRoutes);

// export module router
module.exports = router;