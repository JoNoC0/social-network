// require express router
const router = require('express').Router();

// set thought controller requirement
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// GET /api/thoughts
router.route('/')
    .get(getAllThought);

// GET, PUT, DELETE /api/thought/:id
router.route('/')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// POST /api/thoughts/:userId
router.route('/:userId')
    .post(createThought);

// POST /api/thoughts/:thoughtId/addReaction
router.route('/:thoughtId/reactions')
    .post(addReaction);

// DELETE
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

// export module router
module.exports = router;
