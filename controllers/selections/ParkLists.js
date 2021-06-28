const axios = require("axios");
const data = "";

const config = {
  method: "get",
  url: "http://openapi.seoul.go.kr:8088/56434e586b686f6f3430704653486e/json/SearchParkInfoService/1/132/",
  headers: {},
  data: data,
};

module.exports = async (req, res) => {
  console.log(req);
  await axios(config)
    .then(function (response) {
      for (i in response["data"]["SearchParkInfoService"]["row"]) {
        console.log("***********************");
        console.log("***********************");
        console.log(
          "공원명 : " +
            response["data"]["SearchParkInfoService"]["row"][i]["P_PARK"]
        );
        console.log(
          "공원이용시 참고사항 : " +
            response["data"]["SearchParkInfoService"]["row"][i]["USE_REFER"]
        );
        console.log(
          "공원이미지 : " +
            response["data"]["SearchParkInfoService"]["row"][i]["P_IMG"]
        );
        console.log(
          "공원주소 : " +
            response["data"]["SearchParkInfoService"]["row"][i]["P_ADDR"]
        );
        console.log(
          "공원전화번호 : " +
            response["data"]["SearchParkInfoService"]["row"][i]["P_ADMINTEL"]
        );
        console.log("-----------------------");
        console.log(
          "공원오는길 : " +
            response["data"]["SearchParkInfoService"]["row"][i]["VISIT_ROAD"]
        );
        console.log("-----------------------");
        console.log("***********************");
        console.log("***********************");
      }
    })
    // .then((response) => res.status(200).send(response))
    .catch(function (error) {
      console.log(error);
    });
};
