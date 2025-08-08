const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema(
  {
    lessonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lesson', // Reference
      required: true,
    },
    questions: [
      {
        questionText: {
          type: String,
          required: true,
        },
        options: [
          {
            optionText: {
              type: String,
              required: true,
            },
            isCorrect: {
              type: Boolean,
              required: true,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Quiz = mongoose.model('Quiz', QuizSchema);
module.exports = Quiz;