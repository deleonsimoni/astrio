const Estatuto = require('../models/estatuto.model');
const AWSUpload = require('../provider/aws-upload.provider');

class EstatutoController {
  async update(id, file) {
    const awsUpload = new AWSUpload()

    try {
      const fileUploaded = await awsUpload.uploadFile(file);
      file = fileUploaded.name;

      if (id) {
        return Estatuto.findOneAndUpdate({
          _id: id
        }, { file }, { upsert: true });
      }

      return this.create({ file });
    } catch (error) {
      console.log(error);
      return "Servidor momentaneamente inoperante. Tente novamente mais tarde.";
    }
  }

  create(body) {
    return new Estatuto(body).save();
  }

  listAll() {
    return Estatuto.find();
  }
}

module.exports = EstatutoController;
