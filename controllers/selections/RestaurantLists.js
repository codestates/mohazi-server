const axios = require("axios");
const data = "";

const config = {
  method: "get",
  url: "http://openapi.seoul.go.kr:8088/56434e586b686f6f3430704653486e/json/LOCALDATA_072404/1/450/",
  headers: {},
  data: data,
};

module.exports = async (req, res) => {
  console.log(req);
  await axios(config)
    .then(function (response) {
      for (i in response["data"]["LOCALDATA_072404"]["row"]) {
        console.log("***********************");
        console.log("***********************");
        console.log(
          "사업장명 : " +
            response["data"]["LOCALDATA_072404"]["row"][i]["BPLCNM"]
        );
        console.log(
          "상세영업상태명 : " +
            response["data"]["LOCALDATA_072404"]["row"][i]["DTLSTATENM"]
        );
        console.log(
          "전화번호 : " +
            response["data"]["LOCALDATA_072404"]["row"][i]["SITETEL"]
        );
        console.log(
          "도로명주소 : " +
            response["data"]["LOCALDATA_072404"]["row"][i]["RDNWHLADDR"]
        );
        console.log(
          "도로명우편번호 : " +
            response["data"]["LOCALDATA_072404"]["row"][i]["RDNPOSTNO"]
        );
        console.log("***********************");
        console.log("***********************");
      }
    })
    // .then((response) => res.status(200).send(response))
    .catch(function (error) {
      console.log(error);
    });
};
