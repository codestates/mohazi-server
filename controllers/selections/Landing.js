const { randomCafe } = require("./CafeLists");
const { randomExhibition } = require("./ExhibitionLists");
const { randomMall } = require("./MallLists");
const { randomPark } = require("./ParkLists");
const { randomRestaurant } = require("./RestaurantLists");
// const axios = require("axios");

/**
 * 각 items를 호출해서 한 개씩 model.findOrCreate - where BPLCNM: req.body.response.BPLCNM, ...
 * 그렇다면 최초엔 아무런 DB도 없을 것 -> 
 */

module.exports = {
  //   await
  // axios({
  //   method: "get",
  //   url: "https://localhost:4000/landing",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   withCredentials: true,
  // })
  get:
  async (req, res) => {
    console
      .log(req)
      .then((response) => {
        // console.log(response)
        console.log(
          "목록들 : " +
            JSON.stringify([
              { randomCafe },
              { randomExhibition },
              { randomMall },
              { randomPark },
              { randomRestaurant },
            ])
        );
        // res.status(200).send({
        //   recommendations: [{ randomCafe }, { randomExhibition }, { randomMall }, { randomPark }, { randomRestaurant }],
        // });
      })
      .catch((err) => res.status(400).send({ err: "err" }));
  }
};
