const Presidente = require('../models/presidente.model');

class PresidenteController {
  create(body) {
    return new Presidente(body).save();
  }

  listAll() {
    return Presidente.find().sort({
      period: -1
    });
  }

  delete(id) {
    return Presidente.findOneAndRemove({
      _id: id
    });
  }
}

module.exports = PresidenteController;
