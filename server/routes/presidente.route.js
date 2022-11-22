const PresidenteController = require("../controllers/presidente.controller");

class PresidenteRoutes {
  static async list(_, res) {
    try {
      const data = await new PresidenteController().listAll();
      res.json(data);
    } catch(error) {
      res.json(error);
    }
  }

  static async create(req, res) {
    try {
      const data = await new PresidenteController().create(req.body);
      res.json(data);
    } catch(error) {
      res.json(error);
    }
  }

  static async delete(req, res) {
    const id = req.params.id;

    try {
      const data = await new PresidenteController().delete(id);
      res.json(data);
    } catch(error) {
      res.json(error);
    }
  }
}

module.exports = PresidenteRoutes;
