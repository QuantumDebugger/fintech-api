const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    voiceUrl: {
      type: String,
      required: false, // OptionalURL
    },
    moduleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Module', // Reference
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Lesson = mongoose.model('Lesson', LessonSchema);
module.exports = Lesson;