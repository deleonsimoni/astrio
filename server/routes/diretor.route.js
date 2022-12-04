const DiretorController = require("../controllers/diretor.controller");

class DiretorRoutes {
  static async list(_, res) {
    try {
      const data = await new DiretorController().listAll();
      res.json(data);
    } catch(error) {
      res.status(500).json(error);
    }
  }

  static async create(req, res) {
    try {
      const data = await new DiretorController().create(req.body);
      res.json(data);
    } catch(error) {
      res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    const id = req.params.id;

    try {
      const data = await new DiretorController().delete(id);
      res.json(data);
    } catch(error) {
      res.status(500).json(error);
    }
  }
}

module.exports = DiretorRoutes;
