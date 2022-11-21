const HomeController = require('../controllers/home.controller');
const ContatoController = require('../controllers/contato.controller');
const ConvenioController = require('../controllers/convenio.controller');

class PublicController {
  static async retrieve() {
    try {

      return await Promise.all([
        new HomeController().listAll(),
        new ContatoController().listAll(),
        new ConvenioController().listAll()
      ]).then(function ([home, contato, convenio]) {
        return {
          home: home[0],
          contato: contato[0],
          convenios: convenio
        }
      });

    } catch (error) {
      console.log(error)
      return error;
    }
  }
}

module.exports = PublicController;
