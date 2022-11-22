const Convenio = require('../models/convenio.model');
const AWSUpload = require('../provider/aws-upload.provider');

class ConvenioController {
  async create(body, file) {
    const awsUpload = new AWSUpload()

    try {
      const fileUploaded = await awsUpload.uploadBase64(file);
      body.logo = fileUploaded.name;

      return new Convenio(body).save();
    } catch (error) {
      console.log(error);
      return "Servidor momentaneamente inoperante. Tente novamente mais tarde.";
    }

  }

  listAll() {
    return Convenio.find();
  }

  delete(id) {
    return Convenio.findOneAndRemove({
      _id: id
    });
  }
}

module.exports = ConvenioController;
