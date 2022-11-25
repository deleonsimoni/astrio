const Noticia = require('../models/noticia.model');
const AWSUpload = require('../provider/aws-upload.provider');

class NoticiaController {
  async create(body, file) {
    const awsUpload = new AWSUpload()

    try {
      const fileUploaded = await awsUpload.uploadBase64(file);
      body.logo = fileUploaded.name;

      return new Noticia(body).save();
    } catch (error) {
      console.log(error);
      return "Servidor momentaneamente inoperante. Tente novamente mais tarde.";
    }

  }

  listAll() {
    return Noticia.find();
  }

  delete(id) {
    return Noticia.findOneAndRemove({
      _id: id
    });
  }
}

module.exports = NoticiaController;
