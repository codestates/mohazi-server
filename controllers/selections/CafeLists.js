// const { cafe } = require("../../models");
// const request = require("request");
const axios = require("axios");
const cafeAPI = `http://openapi.seoul.go.kr:8088/6c74416e506a6f30383145686c544d/json/LOCALDATA_072405/1/450/`;

module.exports = {
  get: async (req, res) => {
    console.log(req);
    // await axios({
    //   method: 'get',
    //   url: cafeAPI,
    //   // data: {
    //   //   BPLCNM: req.body.BPLCNM
    //   // },
    //   headers: {
    //     'content-type': 'application/json'
    //   },
    //   withCredentials: true,
    // })
    // await axios.get(cafeAPI)
    //   .then((data) => {
    //     console.log(data);
    //     res.status(200).send("OK");
    //   })
    // .catch((e) => {
    //   res.status(400).send("err");
    // });
    // await request(cafeAPI, function(err, res, body) {
    //   if (err) {
    //     console.log(err)
    //   }
    //   const obj = JSON.parse(body)
    //   console.log(obj)
    // })

    await axios({
      method: "get",
      url: cafeAPI,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
