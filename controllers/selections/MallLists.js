const { mall } = require("../../models");
const axios = require("axios");

const config = {
  method: "get",
  url: "http://openapi.seoul.go.kr:8088/556c467a4a686f6f343773416e7577/json/LOCALDATA_082501/1/800/",
  headers: {
    "Content-Type": "application/json",
  },
};

module.exports = async (req, res) => {
  await axios(config)
    .then((response) => {
      const mallLists = response["data"]["LOCALDATA_082501"]["row"];
      for (let i in mallLists) {
        i = Math.floor(Math.random() * mallLists.length);
        if (
          (mallLists[i]["UPTAENM"] === "쇼핑센터" &&
            mallLists[i]["DTLSTATENM"] === "정상영업") ||
          (mallLists[i]["UPTAENM"] === "백화점" &&
            mallLists[i]["DTLSTATENM"] === "정상영업") ||
          (mallLists[i]["UPTAENM"] === "전문점" &&
            mallLists[i]["DTLSTATENM"] === "정상영업")
        ) {
          mall.findOrCreate({
            where: {
              BPLCNM: mallLists[i].BPLCNM,
              DTLSTATENM: mallLists[i].DTLSTATENM,
              SITETEL: mallLists[i].SITETEL,
              RDNWHLADDR: mallLists[i].RDNWHLADDR,
              RDNPOSTNO: mallLists[i].RDNPOSTNO,
              UPTAENM: mallLists[i].UPTAENM,
            },
          });
          return res.status(200).send({
            response: mallLists[i],
            message: "백화점 정보를 조회했습니다.",
          });
        }
      }
    })
    .catch(function (error) {
      res.status(404).send(error);
    });
};
