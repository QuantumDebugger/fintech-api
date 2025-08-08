const Quiz = require('../models/Quiz');
const UserProgress = require('../models/UserProgress');
const { validationResult } = require('express-validator');


const getQuizByLesson = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({ lessonId: req.params.lessonId })
    .select('-questions.options.isCorrect');
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


const submitQuizAnswers = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { userId } = req.user._id;
    const { lessonId } = req.params;
    const { answers } = req.body;

    const quiz = await Quiz.findOne({ lessonId });
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }

    let score = 0;
    answers.forEach((submittedAnswer) => {
      const question = quiz.questions
      .find((q) => q._id.toString() === submittedAnswer.questionId);
      if (question) {
        const correctAnswer = question.options.find((opt) => opt.isCorrect);
        if (correctAnswer && submittedAnswer.answerId === correctAnswer._id.toString()) {
          score++;
        }
      }
    });

    const progress = await UserProgress.findOneAndUpdate(
      { userId, lessonId },
      { score, quizCompleted: true },
      { new: true, upsert: true }
    );

    res.json({ message: 'Quiz submitted successfully', score, progress });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getStreak = async (req, res) => {
  try {
    const streakCount = Math.floor(Math.random() * 30);
    res.json({ userId: req.user._id, streak: streakCount, message: `You are on a ${streakCount} day streak!` });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getQuizByLesson, submitQuizAnswers, getStreak };
