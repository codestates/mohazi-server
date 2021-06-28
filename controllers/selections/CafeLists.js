const axios = require("axios");
const data = "";

const config = {
  method: "get",
  url: "http://openapi.seoul.go.kr:8088/6c74416e506a6f30383145686c544d/json/LOCALDATA_072405/1/450/",
  headers: {},
  data: data,
};

module.exports = async (req, res) => {
  console.log(req)
  await axios(config)
    .then(function (response) {
      for (i in response["data"]["LOCALDATA_072405"]["row"]) {
        console.log("***********************");
        console.log("***********************");
        console.log(
          "사업장명 : " +
            response["data"]["LOCALDATA_072405"]["row"][i]["BPLCNM"]
        );
        console.log(
          "상세영업상태명 : " +
            response["data"]["LOCALDATA_072405"]["row"][i]["DTLSTATENM"]
        );
        console.log(
          "전화번호 : " +
            response["data"]["LOCALDATA_072405"]["row"][i]["SITETEL"]
        );
        console.log(
          "도로명주소 : " +
            response["data"]["LOCALDATA_072405"]["row"][i]["RDNWHLADDR"]
        );
        console.log(
          "도로명우편번호 : " +
            response["data"]["LOCALDATA_072405"]["row"][i]["RDNPOSTNO"]
        );
        console.log(
          "업태구분명 : " +
            response["data"]["LOCALDATA_072405"]["row"][i]["UPTAENM"]
        );
        console.log("***********************");
        console.log("***********************");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
