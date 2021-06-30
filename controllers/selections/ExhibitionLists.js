const { exhibition } = require("../../models");
const axios = require("axios");

const config = {
  method: "get",
  url: "http://openapi.seoul.go.kr:8088/75434f6448686f6f36355149764b6d/json/culturalSpaceInfo/1/500/",
  headers: {
    "Content-Type": "application/json",
  },
};

module.exports = async (req, res) => {
  await axios(config)
    .then((response) => {
      const exhibitionLists = response["data"]["culturalSpaceInfo"]["row"];
      for (let i in exhibitionLists) {
        i = Math.floor(Math.random() * exhibitionLists.length);
        exhibition.findOrCreate({
          where: {
            FAC_NAME: exhibitionLists[i].FAC_NAME,
            SUBJCODE: exhibitionLists[i].SUBJCODE,
            ADDR: exhibitionLists[i].ADDR,
            X_COORD: exhibitionLists[i].X_COORD,
            Y_COORD: exhibitionLists[i].Y_COORD,
            PHNE: exhibitionLists[i].PHNE,
            CLOSEDAY: exhibitionLists[i].CLOSEDAY,
            FAC_DESC: exhibitionLists[i].FAC_DESC,
            ENTRFREE: exhibitionLists[i].ENTRFREE,
            SUBWAY: exhibitionLists[i].SUBWAY,
            BUSSTOP: exhibitionLists[i].BUSSTOP,
            MAIN_IMG: exhibitionLists[i].MAIN_IMG,
          },
        });
        return res.status(200).send({
          response: exhibitionLists[i],
          message: "문화공간 정보를 조회했습니다.",
        });
      }
    })
    .catch(function (error) {
      res.status(404).send(error);
    });
};
