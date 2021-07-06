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
              .then((mall) => {
                sight
                  .findAll({
                    where: {
                      id: {
                        [Op.gte]: 1,
                      },
                    },
                  })
                  .then((park) => {
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
                            for (let m in mall) {
                              m = Math.floor(Math.random() * mall.length);
                              for (let p in park) {
                                p = Math.floor(Math.random() * park.length);
                                for (let r in restaurant) {
                                  r = Math.floor(Math.random() * restaurant.length);
                                  return res.status(200).send({
                                    recommendations: [
                                      cafe[c],
                                      exhibition[e],
                                      mall[m],
                                      park[p],
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
