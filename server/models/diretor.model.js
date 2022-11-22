const mongoose = require('mongoose');

const DiretorSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    name: {
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

module.exports = mongoose.model('Diretor', DiretorSchema);
