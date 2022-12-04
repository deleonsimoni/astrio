const EstatutoController = require("../controllers/estatuto.controller");

class EstatutoRoutes {
  static async list(_, res) {
    try {
      const data = await new EstatutoController().listAll();
      res.json(data);
    } catch(error) {
      res.status(500).json(error);
    }
  }

  static async update(req, res) {
    const body = JSON.parse(req.body.data);
    const file = req.files.file;

    try {
      const data = await new EstatutoController().update(body.id, file);
      res.json(data);
    } catch(error) {
      res.status(500).json(error);
    }
  }
}

module.exports = EstatutoRoutes;
