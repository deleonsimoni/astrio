const QuemSomosController = require('../controllers/quem-somos.controller');

class QuemSomosRoutes {
  static async list(_, res) {
    try {
      const data = await new QuemSomosController().listAll();
      res.json(data);
    } catch(error) {
      res.status(500).json(error);
    }
  }

  static async update(req, res) {
    try {
      const data = await new QuemSomosController().update(req.body);
      res.json(data);
    } catch(error) {
      res.status(500).json(error);
    }
  }
}

module.exports = QuemSomosRoutes;
