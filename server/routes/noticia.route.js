const NoticiaController = require("../controllers/noticia.controller");

class NoticiaRoutes {
  static async list(_, res) {
    try {
      const data = await new NoticiaController().listAll();
      res.json(data);
    } catch(error) {
      res.json(error);
    }
  }

  static async create(req, res) {
    const body = JSON.parse(req.body.data);
    const file = req.files.file;

    try {
      const data = await new NoticiaController().create(body, file);
      res.json(data);
    } catch(error) {
      res.json(error);
    }
  }

  static async delete(req, res) {
    const id = req.params.id;

    try {
      const data = await new NoticiaController().delete(id);
      res.json(data);
    } catch(error) {
      res.json(error);
    }
  }
}

module.exports = NoticiaRoutes;
