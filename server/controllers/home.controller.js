const Home = require('../models/home.model');

class HomeController {
  update(body) {
    if (body.id) {
      return Home.findOneAndUpdate({
        _id: body.id
      }, body, { upsert: true });
    }

    return this.create(body);
  }

  create(body) {
    return new Home(body).save();
  }

  async listAll() {
    return Home.find();
  }
}

module.exports = HomeController;
