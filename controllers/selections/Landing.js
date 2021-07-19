const { cafe, exhibition, market, sight, restaurant } = require("../../models");
const { Op } = require("sequelize");

module.exports = {
  get: async (req, res) => {
    await cafe
      .findAll({
        where: {
          id: {
            [Op.gte]: 1,
          },
        },
      })
      .then((cafe) => {
        exhibition
          .findAll({
            where: {
              id: {
                [Op.gte]: 1,
              },
            },
          })
          .then((exhibition) => {
            market
              .findAll({
                where: {
                  id: {
                    [Op.gte]: 1,
                  },
                },
              })
              .then((market) => {
                sight
                  .findAll({
                    where: {
                      id: {
                        [Op.gte]: 1,
                      },
                    },
                  })
                  .then((sight) => {
                    restaurant
                      .findAll({
                        where: {
                          id: {
                            [Op.gte]: 1,
                          },
                        },
                      })
                      .then((restaurant) => {
                        for (let c in cafe) {
                          c = Math.floor(Math.random() * cafe.length);
                          for (let e in exhibition) {
                            e = Math.floor(Math.random() * exhibition.length);
                            for (let m in market) {
                              m = Math.floor(Math.random() * market.length);
                              for (let s in sight) {
                                s = Math.floor(Math.random() * sight.length);
                                for (let r in restaurant) {
                                  r = Math.floor(
                                    Math.random() * restaurant.length
                                  );
                                  return res.status(200).send({
                                    recommendations: [
                                      cafe[c],
                                      exhibition[e],
                                      market[m],
                                      sight[s],
                                      restaurant[r],
                                    ],
                                  });
                                }
                              }
                            }
                          }
                        }
                      });
                  });
              });
          });
      })
      .catch((err) => res.status(400).send({ err: "data err" }));
  },
};
