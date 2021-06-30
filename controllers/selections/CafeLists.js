const { cafe } = require("../../models");
const axios = require("axios");

const config = {
  method: "get",
  url: "http://openapi.seoul.go.kr:8088/6c74416e506a6f30383145686c544d/json/LOCALDATA_072405/1/800/",
  headers: {
    "Content-Type": "application/json",
  },
};

module.exports = async (req, res) => {
  await axios(config)
    .then((response) => {
      const cafeLists = response["data"]["LOCALDATA_072405"]["row"];

      for (let i in cafeLists) {
        i = Math.floor(Math.random() * cafeLists.length);
        if (
          cafeLists[i]["UPTAENM"] === "커피숍" &&
          cafeLists[i]["DTLSTATENM"] === "영업"
        ) {
          cafe.findOrCreate({
            where: {
              BPLCNM: cafeLists[i].BPLCNM,
              DTLSTATENM: cafeLists[i].DTLSTATENM,
              SITETEL: cafeLists[i].SITETEL,
              RDNWHLADDR: cafeLists[i].RDNWHLADDR,
              RDNPOSTNO: cafeLists[i].RDNPOSTNO,
              UPTAENM: cafeLists[i].UPTAENM,
            },
          });
          return res.status(200).send({
            response: cafeLists[i],
            message: "카페 정보를 조회했습니다.",
          });
        }
      }
    })
    .catch((error) => {
      res.status(404).send(error);
    });
};
