const Module = require('../models/Module');
const Lesson = require('../models/Lesson');
const UserProgress = require('../models/UserProgress');



const getModules = async (req, res) => {
  try {
    const modules = await Module.find();
    res.json(modules);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


const getLessonsByModule = async (req, res) => {
  try {
    const lessons = await Lesson.find({ moduleId: req.params.moduleId });
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


const getLessonById = async (req, res) => {
  try {
    const lesson = await Lesson.findById(req.params.lessonId);
    if (!lesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};



const trackLessonProgress = async (req, res) => {
  try {
    const { userId } = req.user._id;
    const { lessonId } = req.params;

    let progress = await UserProgress.findOneAndUpdate(
      { userId, lessonId },
      { isCompleted: true },
      { new: true, upsert: true } 
    );

    res.json({ message: 'Lesson progress tracked', progress });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getModules, getLessonsByModule, getLessonById, trackLessonProgress };