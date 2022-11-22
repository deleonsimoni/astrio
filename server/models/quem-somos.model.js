const mongoose = require('mongoose');

const QuemSomosSchema = new mongoose.Schema(
  {
    mission: {
      type: String
    },
    vision: {
      type: String
    },
    aboutUs: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('QuemSomos', QuemSomosSchema);
