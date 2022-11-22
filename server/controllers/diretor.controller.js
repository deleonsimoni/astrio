const Diretor = require('../models/diretor.model');

class DiretorController {
  create(body) {
    return new Diretor(body).save();
  }

  listAll() {
    return Diretor.find();
  }

  delete(id) {
    return Diretor.findOneAndRemove({
      _id: id
    });
  }
}

module.exports = DiretorController;
