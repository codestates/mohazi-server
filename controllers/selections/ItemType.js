const { cafe, exhibition, market, restaurant, sight } = require("../../models");
// 동 x,y 좌표가 들어오고
// 카테고리가 들어왔을 때
// 해당 좌표인근 카테고리 목록들 return
// 좌표인근 ?
// 좌표인근 구현하려면 다시 카카오로 axios 보내서 radius || rect 사용해야되는가

module.exports = async (req, res) => {
  const results = [];

  if (req.body.itemType === 'CE7') {
    await cafe.findAll({
      where: {
        category_group_code: req.body.itemType
      }
    })
    .then(cafes => {
      for (let i in cafes) {
        if (results.length < 5)
        results.push(i);
      }
    })
  } 
}