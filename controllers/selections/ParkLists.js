const { park } = require("../../models");
const axios = require("axios");

const config = {
  method: "get",
  url: "http://openapi.seoul.go.kr:8088/56434e586b686f6f3430704653486e/json/SearchParkInfoService/1/300/",
  headers: {
    "Content-Type": "application/json",
  },
};

module.exports = async (req, res) => {
  await axios(config)
    .then((response) => {
      const parkLists = response["data"]["SearchParkInfoService"]["row"];

      for (let i in parkLists) {
        i = Math.floor(Math.random() * parkLists.length);
        park.findOrCreate({
          where: {
            P_PARK: parkLists[i].P_PARK,
            VISIT_ROAD: parkLists[i].VISIT_ROAD,
            P_ADMINTEL: parkLists[i].P_ADMINTEL,
            P_ADDR: parkLists[i].P_ADDR,
            USE_REFER: parkLists[i].USE_REFER,
            P_IMG: parkLists[i].P_IMG,
          },
        });
        return res.status(200).send({
          response: parkLists[i],
          message: "공원 정보를 조회했습니다.",
        });
      }
    })
    .catch(function (error) {
      res.status(404).send(error);
    });
};
