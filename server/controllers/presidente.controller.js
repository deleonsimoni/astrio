const Presidente = require('../models/presidente.model');

class PresidenteController {
  create(body) {
    return new Presidente(body).save();
  }

  listAll() {
    return Presidente.find();
  }

  delete(id) {
    return Presidente.findOneAndRemove({
      _id: id
    });
  }
}

module.exports = PresidenteController;
