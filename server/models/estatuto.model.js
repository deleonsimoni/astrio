const mongoose = require('mongoose');

const EstatutoSchema = new mongoose.Schema(
  {
    file: {
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

module.exports = mongoose.model('Estatuto', EstatutoSchema);
