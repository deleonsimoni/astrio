const Diretor = require('../models/diretor.model');

class DiretorController {
  create(body) {
    return new Diretor(body).save();
  }

  async listAll() {
    const diretores = await Diretor.find();

    return this.orderByOffice(diretores);
  }

  delete(id) {
    return Diretor.findOneAndRemove({
      _id: id
    });
  }

  orderByOffice(diretores) {
    let priority = [
      "Presidência",
      "Vice-Presidência",
      "Diretoria Financeira/Administrativa",
      "Diretoria Sócio-Cultural e de Comunicações",
      "Diretoria Jurídica e de Benefícios",
      "Diretoria de Esportes"
    ]

    return diretores.sort((a, b) => {
      return priority.indexOf(a.title) - priority.indexOf(b.title);
    })
  }
}

module.exports = DiretorController;
