const ContatoController = require('../controllers/contato.controller');

class ContatoRoutes {
  static async list(_, res) {
    try {
      const data = await new ContatoController().listAll();
      res.json(data);
    } catch(error) {
      res.json(error);
    }
  }

  static async update(req, res) {
    try {
      const data = await new ContatoController().update(req.body);
      res.json(data);
    } catch(error) {
      res.json(error);
    }
  }
}

module.exports = ContatoRoutes;
