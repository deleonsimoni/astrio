const QuemSomos = require('../models/quem-somos.model');

class QuemSomosController {
  update(body) {
    if (body.id) {
      return QuemSomos.findOneAndUpdate({
        _id: body.id
      }, body, { upsert: true });
    }

    return this.create(body);
  }

  create(body) {
    return new QuemSomos(body).save();
  }

  async listAll() {
    return QuemSomos.find();
  }
}

module.exports = QuemSomosController;
