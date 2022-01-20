// require express router
const router = require('express').Router();

// import all of the API routes
const apiRoutes = require('./api');

// add prefix of `/api` to all of the api routes
router.use('/api', apiRoutes);

// 404 status error message
router.use((req, res) => {
    res.status(404).json(err);
});

// module exports router
module.exports = router;