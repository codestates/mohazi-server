const AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.update({
  region: process.env.AWS_CONFIG_REGION,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: process.env.AWS_CONFIG_IDENTITYPOOLID,
  }),
});

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: "ap-northeast-2",
});

module.exports = s3;
