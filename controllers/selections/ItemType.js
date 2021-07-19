const { cafe, exhibition, market, restaurant, sight } = require("../../models");
const { Op } = require("sequelize");

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
        res.status(200).send({ items: results });
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
        res.status(200).send({ items: results });
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
        res.status(200).send({ items: results });
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
        res.status(200).send({ items: results });
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
        res.status(200).send({ items: results });
      })
      .catch((err) => res.status(400).send(err));
  }
};
