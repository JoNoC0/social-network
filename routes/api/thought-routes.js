// require express router
const router = require('express').Router();

// set thought controller requirement
const {
    getAllThoughts, 
    getThoughtById, 
    createThought, 
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
    
} = require('../../controllers/thought-controller')

// GET /api/thoughts
router.route('/')
    .get(getAllThoughts)
    .post(createThought);

// GET, PUT, DELETE /api/thought/:id
router.route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);


// POST /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(deleteReaction);

    

// export module router
module.exports = router;
