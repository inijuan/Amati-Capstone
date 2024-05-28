const express = require('express');
const router = express.Router();
const userHandler = require('../handlers/userHandler');

// Route for creating a new user
router.post('/users', userHandler.createUser);

// Route for getting a user by username
router.get('/users/:username', userHandler.getUserByUsername);

// Route for updating a user by username
router.put('/users/:username', userHandler.updateUserByUsername);

// Route for deleting a user by username
router.delete('/users/:username', userHandler.deleteUserByUsername);

module.exports = router;
