const mongoose = require('mongoose');

const UserProgressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    lessonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson',
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    score: {
      type: Number,
      default: 0,
    },
    quizCompleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const UserProgress = mongoose.model('UserProgress', UserProgressSchema);
module.exports = UserProgress;