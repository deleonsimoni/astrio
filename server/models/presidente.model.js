const mongoose = require('mongoose');

const PresidenteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    period: {
      type: String,
      required: true,
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

module.exports = mongoose.model('Presidente', PresidenteSchema);
