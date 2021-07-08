const { cafe, exhibition, market, restaurant, sight } = require("../../models");
const { Op } = require("sequelize");

// rect[0, 1, 2, 3] 들어오고
// 카테고리, 키워드 들어왔을 때
// 해당 좌표인근 카테고리 목록들 return
// 좌표인근 => DB 에 저장돼 있는 x, y좌표를 활용
// x : rect[0] ~ x ~ rect[2]
// y : rect[1] ~ y ~ rect[3]

module.exports = async (req, res) => {
  if (req.body.itemType === "CE7") {
    await cafe
      .findAll({
        where: {
          category_group_code: req.body.itemType,
          x: {
            [Op.between]: [req.body.rect[0], req.body.rect[2]],
          },
          y: {
            [Op.between]: [req.body.rect[1], req.body.rect[3]],
          },
        },
      })
      .then((results) => {
        // console.log(results)
        res.status(200).send({items: results});
      })
      .catch((err) => res.status(400).send(err));
  }
  if (req.body.itemType === "FD6") {
    await restaurant
      .findAll({
        where: {
          category_group_code: req.body.itemType,
          x: {
            [Op.between]: [req.body.rect[0], req.body.rect[2]],
          },
          y: {
            [Op.between]: [req.body.rect[1], req.body.rect[3]],
          },
        },
      })
      .then((results) => {
        // console.log(results)
        res.status(200).send({items: results});
      })
      .catch((err) => res.status(400).send(err));
  }
  if (req.body.itemType === "MT1") {
    await market
      .findAll({
        where: {
          category_group_code: req.body.itemType,
          x: {
            [Op.between]: [req.body.rect[0], req.body.rect[2]],
          },
          y: {
            [Op.between]: [req.body.rect[1], req.body.rect[3]],
          },
        },
      })
      .then((results) => {
        // console.log(results)
        res.status(200).send({items: results});
      })
      .catch((err) => res.status(400).send(err));
  }
  if (req.body.itemType === "AT4") {
    await sight
      .findAll({
        where: {
          category_group_code: req.body.itemType,
          x: {
            [Op.between]: [req.body.rect[0], req.body.rect[2]],
          },
          y: {
            [Op.between]: [req.body.rect[1], req.body.rect[3]],
          },
        },
      })
      .then((results) => {
        // console.log(results)
        res.status(200).send({items: results});
      })
      .catch((err) => res.status(400).send(err));
  }
  if (req.body.itemType === "CT1") {
    await exhibition
      .findAll({
        where: {
          category_group_code: req.body.itemType,
          x: {
            [Op.between]: [req.body.rect[0], req.body.rect[2]],
          },
          y: {
            [Op.between]: [req.body.rect[1], req.body.rect[3]],
          },
        },
      })
      .then((results) => {
        // console.log(results)
        res.status(200).send({items: results});
      })
      .catch((err) => res.status(400).send(err));
  }
};
