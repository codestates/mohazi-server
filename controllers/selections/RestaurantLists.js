const { restaurant } = require("../../models");
const axios = require("axios");

const config = {
  method: "get",
  url: "http://openapi.seoul.go.kr:8088/56434e586b686f6f3430704653486e/json/LOCALDATA_072404/1/800/",
  headers: {
    "Content-Type": "application/json",
  },
};

module.exports = async (req, res) => {
  await axios(config)
    .then((response) => {
      const restaurantLists = response["data"]["LOCALDATA_072404"]["row"];

      for (let i in restaurantLists) {
        i = Math.floor(Math.random() * restaurantLists.length);
        if (restaurantLists[i]["DTLSTATENM"] === "영업") {
          restaurant.findOrCreate({
            where: {
              BPLCNM: restaurantLists[i].BPLCNM,
              DTLSTATENM: restaurantLists[i].DTLSTATENM,
              SITETEL: restaurantLists[i].SITETEL,
              RDNWHLADDR: restaurantLists[i].RDNWHLADDR,
              RDNPOSTNO: restaurantLists[i].RDNPOSTNO,
              UPTAENM: restaurantLists[i].UPTAENM,
            },
          });
          return res.status(200).send({
            response: restaurantLists[i],
            message: "음식점 정보를 조회했습니다.",
          });
        }
      }
    })
    .catch(function (error) {
      res.status(404).send(error);
    });
};
