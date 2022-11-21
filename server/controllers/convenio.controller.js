const Convenio = require('../models/convenio.model');

class ConvenioController {
  create(body) {
    return new Convenio(body).save();
  }

  listAll() {
    return Convenio.find();
  }

  delete(id) {
    return Convenio.findOneAndRemove({
      _id: id
    });
  }
}

module.exports = ConvenioController;
