const Contato = require('../models/contato.model');

class ContatoController {
  update(body) {
    if (body.id) {
      return Contato.findOneAndUpdate({
        _id: body.id
      }, body, { upsert: true });
    }

    return this.create(body);
  }

  create(body) {
    return new Contato(body).save();
  }

  async listAll() {
    return Contato.find();
  }
}

module.exports = ContatoController;
