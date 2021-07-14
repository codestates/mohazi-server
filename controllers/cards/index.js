const s3Upload = require("./s3Upload");

module.exports = {
  CreateCard: require("./CreateCard"),
  DailyCardDelete: require("./DailyCardDelete"),
  DailyCardUpdate: require("./DailyCardUpdate"),
  DailyCardInfo: require("./DailyCardInfo"),
  s3Upload: require("./s3Upload"),
  s3Delete: require("./s3Delete"),
  SearchTaggedCards: require("./SearchTaggedCards"),
};
