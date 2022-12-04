const HomeController = require('../controllers/home.controller');
const ContatoController = require('../controllers/contato.controller');
const ConvenioController = require('../controllers/convenio.controller');
const QuemSomosController = require('../controllers/quem-somos.controller');
const NoticiaController = require('../controllers/noticia.controller');
const EstatutoController = require('../controllers/estatuto.controller');

class PublicController {
  static async retrieve() {
    try {

      return await Promise.all([
        new HomeController().listAll(),
        new ContatoController().listAll(),
        new ConvenioController().listAll(),
        new QuemSomosController().listAll(),
        new NoticiaController().listAll(),
        new EstatutoController().listAll()
      ]).then(function ([home, contato, convenios, quemSomos, noticias, estatuto]) {
        return {
          home: home[0],
          contato: contato[0],
          convenios,
          quemSomos: quemSomos[0],
          noticias,
          estatuto: estatuto[0]
        }
      });

    } catch (error) {
      throw error;
    }
  }
}

module.exports = PublicController;
