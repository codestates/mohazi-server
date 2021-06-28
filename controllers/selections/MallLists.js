const axios = require("axios");
const data = "";

const config = {
  method: "get",
  url: "http://openapi.seoul.go.kr:8088/556c467a4a686f6f343773416e7577/json/LOCALDATA_082501/1/936/",
  headers: {},
  data: data,
};

module.exports = async (req, res) => {
  await axios(config)
    .then(function (response) {
      for (i in response["data"]["LOCALDATA_082501"]["row"]) {
        console.log("***********************");
        console.log("***********************");
        console.log(
          "상세영업상태명 : " +
            response["data"]["LOCALDATA_082501"]["row"][i]["DTLSTATENM"]
        );
        console.log(
          "전화번호 : " +
            response["data"]["LOCALDATA_082501"]["row"][i]["SITETEL"]
        );
        console.log(
          "도로명주소 : " +
            response["data"]["LOCALDATA_082501"]["row"][i]["RDNWHLADDR"]
        );
        console.log(
          "도로명 우편번호 : " +
            response["data"]["LOCALDATA_082501"]["row"][i]["RDNPOSTNO"]
        );
        console.log(
          "사업장명 : " +
            response["data"]["LOCALDATA_082501"]["row"][i]["BPLCNM"]
        );
        console.log(
          "업태구분명 : " +
            response["data"]["LOCALDATA_082501"]["row"][i]["UPTAENM"]
        );
        console.log("***********************");
        console.log("***********************");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
