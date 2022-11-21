const HomeController = require('../controllers/home.controller');

class HomeRoutes {
  static async list(_, res) {
    try {
      const data = await new HomeController().listAll();
      res.json(data);
    } catch(error) {
      console.log(error)
      res.json(error);
    }
  }

  static async update(req, res) {
    try {
      const data = await new HomeController().update(req.body);
      res.json(data);
    } catch(error) {
      console.error("error: ", error)
      res.json(error);
    }
  }
}

module.exports = HomeRoutes;
