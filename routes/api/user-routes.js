// require express router
const router = require('express').Router();

//  set requirements from user-controller
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// GET, POST to /api/users
router.route('/')
    .get(getAllUser)
    .post(createUser);

// GET, PUT, DELETE /api/users/:id
router.route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// POST, DELETE /api/users/:userID/friends/:friendId
router.route('/:id/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

// module export router
module.exports = router;
