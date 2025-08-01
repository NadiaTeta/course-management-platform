const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: ['id', 'username', 'email', 'role'] });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email.' });
    }

    // Create new user
    const user = await User.create({ username, email, password, role });

    // Exclude password from response
    const { password: _, ...userWithoutPassword } = user.toJSON();

    res.status(201).json(userWithoutPassword);
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ message: 'Server error while creating user.' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, { attributes: ['id', 'username', 'email', 'role'] });
    if (user) res.json(user);
    else res.status(404).json({ message: 'User not found' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateUserRole = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { role } = req.body;
    user.role = role;
    await user.save();
    res.json({ message: 'User role updated', user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({ where: { id: req.params.id } });
    if (deleted) res.json({ message: 'User deleted' });
    else res.status(404).json({ message: 'User not found' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
