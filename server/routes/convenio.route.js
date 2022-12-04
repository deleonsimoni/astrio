const ConvenioController = require("../controllers/convenio.controller");

class ConvenioRoutes {
  static async list(_, res) {
    try {
      const data = await new ConvenioController().listAll();
      res.json(data);
    } catch(error) {
      res.status(500).json(error);
    }
  }

  static async create(req, res) {
    const body = JSON.parse(req.body.data);
    const file = req.files.file;

    try {
      const data = await new ConvenioController().create(body, file);
      res.json(data);
    } catch(error) {
      res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    const id = req.params.id;

    try {
      const data = await new ConvenioController().delete(id);
      res.json(data);
    } catch(error) {
      res.status(500).json(error);
    }
  }
}

module.exports = ConvenioRoutes;
