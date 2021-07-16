// /mypage에 들어갔을 때 필요한 정보들
// user정보, 해당 user가 갖고 있는 카드들, 해당 user가 tag된 카드들

// TODO : /mypage에서 selections도 보이도록
// 현재 상황 : 내 정보, 내가 등록한 카드, 내가 태그된 카드들이 보임
// 1. 내가 등록한 카드들의 selections를 뽑아야 함
// 2. 내가 등록된 카드들의 selections도 뽑아야 함
// 3. /searchselections 활용

// 현재 상황 : 내가 등록한 카드의 ID 및 Selections / 태그된 카드의 ID 및 Selections 나옴
// 된건가?
const { user, dailyCard, selection } = require("../../models");
const axios = require("axios");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
  const { userId } = req.body;

  //console.log('여기', userId)
  await user
    .findOne({
      where: {
        id: userId,
      },
    })
    .then((admin) => {
      dailyCard
        .findAll({
          raw: true,
          where: {
            admin: admin.id,
          },
        })
        .then((cards) => {
          return cards.map((el) => el.id);
        })
        .then((myCardsID) => {
          // console.log(myCardsID)
          axios
            .get(`https://api.mohazi.site/searchtaggedcards`, {
              params: {
                userId: userId,
              },
            })
            .then((tagged) => {
              // console.log(tagged)
              return tagged.data.taggedCards.map((el) => el.id);
            })
            .then((taggedCardsID) => {
              selection
                .findAll({
                  raw: true,
                  where: {
                    dailyCards_id: {
                      [Op.in]: myCardsID,
                    },
                  },
                })
                .then((mySelections) => {
                  // console.log("내가 등록한 것", mySelections)
                  selection
                    .findAll({
                      raw: true,
                      where: {
                        dailyCards_id: {
                          [Op.in]: taggedCardsID,
                        },
                      },
                    })
                    .then((taggedSelections) => {
                      res.status(200).send({
                        message: `${admin.username} 유저의 정보를 조회했습니다.`,
                        userInfo: {
                          id: admin.id,
                          email: admin.email,
                          username: admin.username,
                          photo: admin.photo,
                          description: admin.description,
                        },
                        myCardsInfo: mySelections,
                        taggedCardsInfo: taggedSelections,
                      });
                    });
                });
            });
        });
    })
    .catch((err) => {
      res.status(400).send({ message: "유저 정보를 조회할 수 없습니다." });
    });
};
