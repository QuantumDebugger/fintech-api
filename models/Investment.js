const mongoose = require('mongoose');

const InvestmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    whoIsFor: {
      type: String,
      required: true,
    },
    benefits: [String],
    taxAdvantage: String,
    lockInPeriod: String,
  },
  {
    timestamps: true,
  }
);

const Investment = mongoose.model('Investment', InvestmentSchema);
module.exports = Investment;