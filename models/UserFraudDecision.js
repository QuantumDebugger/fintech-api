const mongoose = require('mongoose');

const UserFraudDecisionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    scenarioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FraudScenario',
      required: true,
    },
    userChoice: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserFraudDecision = mongoose.model('UserFraudDecision', UserFraudDecisionSchema);
module.exports = UserFraudDecision;