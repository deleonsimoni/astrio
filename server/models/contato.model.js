const mongoose = require('mongoose');

const ContatoSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String
    },
    fax: {
      type: String
    },    createdAt: {
      type: Date,
      default: Date.now,
    }
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model('Contato', ContatoSchema);
