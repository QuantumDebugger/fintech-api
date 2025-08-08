const FraudScenario = require('../models/FraudScenario');
const UserFraudDecision = require('../models/UserFraudDecision');
const { validationResult } = require('express-validator');


const getFraudScenario = async (req, res) => {
  try {
    const scenario = await FraudScenario.findById(req.params.id).select('-correctChoice');
    if (!scenario) {
      return res.status(404).json({ message: 'Fraud scenario not found' });
    }
    res.json(scenario);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


const submitFraudDecision = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userChoice } = req.body;
  try {
    const scenario = await FraudScenario.findById(req.params.id);
    if (!scenario) {
      return res.status(404).json({ message: 'Fraud scenario not found' });
    }

    const isCorrect = userChoice === scenario.correctChoice;
    

    await UserFraudDecision.create({
      userId: req.user._id,
      scenarioId: scenario._id,
      userChoice,
      isCorrect,
    });

    res.json({ 
      message: 'Decision submitted successfully',
      isCorrect,
      explanation: scenario.explanation
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


const getFraudScore = async (req, res) => {
  try {
    const correctDecisions = await UserFraudDecision.countDocuments({
      userId: req.user._id,
      isCorrect: true,
    });
    const totalDecisions = await UserFraudDecision.countDocuments({
      userId: req.user._id,
    });

    const score = totalDecisions > 0 ? (correctDecisions / totalDecisions) * 100 : 0;
    res.json({ fraudAwarenessScore: score.toFixed(2) });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getFraudScenario, submitFraudDecision, getFraudScore };