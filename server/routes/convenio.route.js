const ConvenioController = require("../controllers/convenio.controller");

class ConvenioRoutes {
  static async list(_, res) {
    try {
      const data = await new ConvenioController().listAll();
      res.json(data);
    } catch(error) {
      res.json(error);
    }
  }

  static async create(req, res) {
    try {
      const data = await new ConvenioController().create(req.body);
      res.json(data);
    } catch(error) {
      res.json(error);
    }
  }

  static async delete(req, res) {
    const id = req.params.id;

    try {
      const data = await new ConvenioController().delete(id);
      res.json(data);
    } catch(error) {
      res.json(error);
    }
  }
}

module.exports = ConvenioRoutes;
