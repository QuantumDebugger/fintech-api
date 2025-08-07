const User = require('../models/User');

const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      language: user.language,
      notifications: user.notifications,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const updateUserSettings = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.language = req.body.language || user.language;
    user.notifications = req.body.notifications !== undefined ? req.body.notifications : user.notifications;

    const updatedUser = await user.save();
    res.json({
      message: 'User settings updated successfully',
      _id: updatedUser._id,
      language: updatedUser.language,
      notifications: updatedUser.notifications,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = { getUserProfile, updateUserSettings };