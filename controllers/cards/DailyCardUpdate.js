// 메모를 추가하는 방안
// 1. selection table 에 memo column 다시 살려서 idx 별로 type[i]와 맞춤
// 1-1. 문제) 메모 삭제 시 메모 밀림의 가능성
// 2. card별 한 개의 메모만 사용 가능하도록
//
const { selection, dailyCard } = require("../../models");

module.exports = async (req, res) => {
  const { dailycardId, memo, photo, friends, date } = req.body;

  console.log('asdsad=' , req.body);

  await selection.update(
    {
      memo: memo,
    },
    {
      where: {
        dailyCards_id: dailycardId,
      },
    }
  )
    .then((updateInfo) => {
      dailyCard.update(
        {
          photo: photo,
          date: date
        },
        {
          where: {
            id: dailycardId,
          },
        }
      )
    })
    .then(result => {
      res.status(200).send({ message: "데일리카드 수정이 완료되었습니다." });
    })
    .catch((err) => {
      res.status(400).send({ err: "err" });
    });
};
