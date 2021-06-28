const axios = require("axios");
const data = "";

const config = {
  method: "get",
  url: "http://openapi.seoul.go.kr:8088/75434f6448686f6f36355149764b6d/json/culturalSpaceInfo/1/930/",
  headers: {},
  data: data,
};

module.exports = async (req, res) => {
  await axios(config)
    .then(function (response) {
      for (i in response["data"]["culturalSpaceInfo"]["row"]) {
        console.log("***********************");
        console.log("***********************");
        console.log(
          "주제분류 : " +
            response["data"]["culturalSpaceInfo"]["row"][i]["SUBJCODE"]
        );
        console.log(
          "문화시설명 : " +
            response["data"]["culturalSpaceInfo"]["row"][i]["FAC_NAME"]
        );
        console.log(
          "주소 : " + response["data"]["culturalSpaceInfo"]["row"][i]["ADDR"]
        );
        console.log(
          "X 좌표 : " +
            response["data"]["culturalSpaceInfo"]["row"][i]["X_COORD"]
        );
        console.log(
          "Y 좌표 : " +
            response["data"]["culturalSpaceInfo"]["row"][i]["Y_COORD"]
        );
        console.log(
          "전화번호 : " +
            response["data"]["culturalSpaceInfo"]["row"][i]["PHNE"]
        );
        console.log(
          "휴관일 : " +
            response["data"]["culturalSpaceInfo"]["row"][i]["CLOSEDAY"]
        );
        console.log(
          "대표이미지 : " +
            response["data"]["culturalSpaceInfo"]["row"][i]["MAIN_IMG"]
        );
        console.log(
          "시설소개 : " +
            response["data"]["culturalSpaceInfo"]["row"][i]["FAC_DESC"]
        );
        console.log(
          "무료구분 : " +
            response["data"]["culturalSpaceInfo"]["row"][i]["ENTRFREE"]
        );
        console.log(
          "지하철 : " +
            response["data"]["culturalSpaceInfo"]["row"][i]["SUBWAY"]
        );
        console.log(
          "버스정거장 : " +
            response["data"]["culturalSpaceInfo"]["row"][i]["BUSSTOP"]
        );
        console.log("***********************");
        console.log("***********************");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};
