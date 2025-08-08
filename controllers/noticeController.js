const PressRelease = require('../models/PressRelease');


const getPressReleases = async (req, res) => {
  try {
    const notices = await PressRelease.find().sort({ publishedDate: -1 });
    res.json(notices);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


const getPressReleaseById = async (req, res) => {
  try {
    const notice = await PressRelease.findById(req.params.id);
    if (!notice) {
      return res.status(404).json({ message: 'Notice not found' });
    }
    res.json(notice);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getPressReleases, getPressReleaseById };