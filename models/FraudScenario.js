const mongoose = require('mongoose');

const FraudScenarioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    choices: [String],
    correctChoice: {
      type: String,
      required: true,
    },
    explanation: String,
  },
  {
    timestamps: true,
  }
);

const FraudScenario = mongoose.model('FraudScenario', FraudScenarioSchema);
module.exports = FraudScenario;