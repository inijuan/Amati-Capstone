const userService = require('../services/userService');

// Handler for creating a new user
exports.createUser = async (req, res) => {
  try {
    const result = await userService.createUser(req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for retrieving a user by username
exports.getUserByUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const user = await userService.getUserByUsername(username);
    if (!user) {
      res.status(404).send('User not found');
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for updating a user by username
exports.updateUserByUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const updatedUser = await userService.updateUserByUsername(username, req.body);
    if (!updatedUser) {
      res.status(404).send('User not found');
    } else {
      res.status(200).send(updatedUser);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Handler for deleting a user by username
exports.deleteUserByUsername = async (req, res) => {
  try {
    const username = req.params.username;
    const deletedUser = await userService.deleteUserByUsername(username);
    if (!deletedUser) {
      res.status(404).send('User not found');
    } else {
      res.status(200).send('User deleted successfully');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
