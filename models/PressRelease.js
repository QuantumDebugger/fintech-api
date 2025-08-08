const mongoose = require('mongoose');

const PressReleaseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    publishedDate: {
      type: Date,
      required: true,
    },
    pdfUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PressRelease = mongoose.model('PressRelease', PressReleaseSchema);
module.exports = PressRelease;