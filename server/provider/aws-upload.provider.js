const AWS = require('aws-sdk');
const config = require('../config/config');

class AWSUpload {

  s3 = new AWS.S3({
    accessKeyId: config.AWS_ACCESS_KEY,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY
  });

  uploadFile(key, file) {
    let s3Config = {
      Bucket: 'leped',
      Key: key,
      Body: file
    };

    return save(s3Config);
  }

  uploadBase64(file) {
    let s3Config = {
      Bucket: 'leped',
      Key: "images/" + file.name,
      Body: file.data,
      ACL: "public-read",
      ContentEncoding: 'base64',
      ContentType: 'image/jpeg'
    };

    return this.save(s3Config);
  }

  save(s3Config) {
    return new Promise((resolve, reject) => {
      this.s3.putObject(s3Config, (err, resp) => {
        if (err) {
          reject({
            success: false,
            data: err,
            name: s3Config.Key
          });
        }

        resolve({
          sucess: true,
          data: resp,
          name: s3Config.Key
        });
      })
    });
  }

}

module.exports = AWSUpload;
