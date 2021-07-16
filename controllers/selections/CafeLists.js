const { cafe } = require("../../models");
const axios = require("axios");
require("dotenv").config();

module.exports = async (req, res) => {
  // console.log(req)
  const dong = [
    "청운효자동",
    "사직동",
    "삼청동",
    "부암동",
    "평창동",
    "무악동",
    "교남동",
    "가회동",
    "종로1가",
    "종로2가",
    "종로3가",
    "종로4가",
    "종로5가",
    "종로6가",
    "이화동",
    "혜화동",
    "창신1동",
    "창신2동",
    "창신3동",
    "숭인1동",
    "숭인2동",
    "소공동",
    "회현동",
    "명동",
    "필동",
    "장충동",
    "광희동",
    "을지로동",
    "신당동",
    "다산동",
    "약수동",
    "청구동",
    "신당5동",
    "동화동",
    "황학동",
    "중림동",
    "후암동",
    "용산2가",
    "남영동",
    "청파동",
    "원효로1동",
    "원효로2동",
    "효창동",
    "용문동",
    "한강로동",
    "이촌1동",
    "이촌2동",
    "이태원1동",
    "이태원2동",
    "한남동",
    "서빙고동",
    "보광동",
    "왕십리2동",
    "왕십리도선동",
    "마장동",
    "사근동",
    "행당1동",
    "행당2동",
    "응동동",
    "금호1동",
    "금호2동",
    "금호3동",
    "금호4동",
    "옥수동",
    "성수1가1동",
    "성수1가2동",
    "성수2가1동",
    "성수2가3동",
    "송정동",
    "용답동",
    "중곡1동",
    "중곡2동",
    "중곡3동",
    "중곡4동",
    "능동",
    "구의1동",
    "구의2동",
    "구의3동",
    "광장동",
    "자양1동",
    "자양2동",
    "자양3동",
    "자양4동",
    "화양동",
    "군자동",
    "용신동",
    "제기동",
    "전농1동",
    "전농2동",
    "답십리1동",
    "답십리2동",
    "장안1동",
    "장안2동",
    "청량리동",
    "회기동",
    "휘경1동",
    "휘경2동",
    "이문1동",
    "이문2동",
    "면목본동",
    "면목2동",
    "면목3동",
    "면목8동",
    "면목4동",
    "면목5동",
    "면목7동",
    "상봉1동",
    "상봉2동",
    "중화1동",
    "중화2동",
    "묵1동",
    "묵2동",
    "망우본동",
    "망우3동",
    "신내1동",
    "신내2동",
    "성북동",
    "삼선동",
    "동선동",
    "돈암1동",
    "돈암2동",
    "안암동",
    "보문동",
    "정릉1동",
    "정릉2동",
    "정릉3동",
    "정릉4동",
    "길음1동",
    "길음2동",
    "종암동",
    "월곡1동",
    "월곡2동",
    "장위1동",
    "장위2동",
    "장위3동",
    "석관동",
    "삼양동",
    "미아동",
    "송중동",
    "송천동",
    "삼각산동",
    "번1동",
    "번2동",
    "번3동",
    "수유1동",
    "수유2동",
    "수유3동",
    "우이동",
    "인수동",
    "쌍문1동",
    "쌍문2동",
    "쌍문3동",
    "쌍문4동",
    "방학1동",
    "방학2동",
    "방학3동",
    "창1동",
    "창2동",
    "창3동",
    "창4동",
    "창5동",
    "도봉1동",
    "도봉2동",
    "월계1동",
    "월계2동",
    "월계3동",
    "공릉1동",
    "공릉3동",
    "공릉2동",
    "하계1동",
    "하계2동",
    "중계본동",
    "중계1동",
    "중계2동",
    "중계3동",
    "중계4동",
    "상계1동",
    "상계2동",
    "상계3동",
    "상계4동",
    "상계5동",
    "상계6동",
    "상계7동",
    "상계8동",
    "상계9동",
    "상계10동",
    "녹번동",
    "불광1동",
    "불광2동",
    "갈현1동",
    "갈현2동",
    "구산동",
    "대조동",
    "응암1동",
    "응암2동",
    "응암3동",
    "역촌동",
    "신사1동",
    "신사2동",
    "증산동",
    "수색동",
    "진관동",
    "충현동",
    "천연동",
    "북아현동",
    "신촌동",
    "연희동",
    "홍제1동",
    "홍제2동",
    "홍제3동",
    "홍은1동",
    "홍은2동",
    "남가좌1동",
    "남가좌2동",
    "북가좌1동",
    "북가좌2동",
    "아현동",
    "공덕동",
    "도화동",
    "용강동",
    "대흥동",
    "염리동",
    "신수동",
    "서강동",
    "서교동",
    "합정동",
    "망원1동",
    "망원2동",
    "연남동",
    "성산1동",
    "성산2동",
    "상암동",
    "목1동",
    "목2동",
    "목3동",
    "목4동",
    "목5동",
    "신월1동",
    "신월2동",
    "신월3동",
    "신월4동",
    "신월5동",
    "신월6동",
    "신월7동",
    "신정1동",
    "신정2동",
    "신정3동",
    "신정4동",
    "신정6동",
    "신정7동",
    "염창동",
    "등촌1동",
    "등촌2동",
    "등촌3동",
    "화곡본동",
    "화곡1동",
    "화곡2동",
    "화곡3동",
    "화곡4동",
    "화곡6동",
    "화곡8동",
    "우장산동",
    "가양1동",
    "가양2동",
    "가양3동",
    "발산1동",
    "공항동",
    "방화1동",
    "방화2동",
    "방화3동",
    "신도림동",
    "구로1동",
    "구로2동",
    "구로3동",
    "구로4동",
    "구로5동",
    "가리봉동",
    "고척1동",
    "고척2동",
    "개봉1동",
    "개봉2동",
    "개봉3동",
    "오류1동",
    "오류2동",
    "항동",
    "수궁동",
    "가산동",
    "독산1동",
    "독산2동",
    "독산3동",
    "독산4동",
    "시흥1동",
    "시흥2동",
    "시흥3동",
    "시흥4동",
    "시흥5동",
    "영등포본동",
    "영등포동",
    "여의동",
    "당산1동",
    "당산2동",
    "도림동",
    "문래동",
    "양평1동",
    "양평2동",
    "신길1동",
    "신길3동",
    "신길4동",
    "신길5동",
    "신길6동",
    "신길7동",
    "대림1동",
    "대림2동",
    "대림3동",
    "노량진1동",
    "노량진2동",
    "상도1동",
    "상도2동",
    "상도3동",
    "상도4동",
    "흑석동",
    "사당1동",
    "사당2동",
    "사당3동",
    "사당4동",
    "사당5동",
    "대방동",
    "신대방1동",
    "신대방2동",
    "은천동",
    "성현동",
    "청룡동",
    "보라매동",
    "청림동",
    "행운동",
    "낙성대동",
    "중앙동",
    "인헌동",
    "남현동",
    "서원동",
    "신원동",
    "서림동",
    "난곡동",
    "관악구 신사동",
    "신림동",
    "관악구 삼성동",
    "난향동",
    "조원동",
    "대학동",
    "미성동",
    "서초1동",
    "서초2동",
    "서초3동",
    "서초4동",
    "잠원동",
    "반포본동",
    "반포1동",
    "반포2동",
    "반포3동",
    "반포4동",
    "방배본동",
    "방배1동",
    "방배2동",
    "방배3동",
    "방배4동",
    "양재1동",
    "양재2동",
    "내곡동",
    "강남구 신사동",
    "논현1동",
    "논현2동",
    "압구정동",
    "청담동",
    "강남구 삼성1동",
    "강남구 삼성2동",
    "대치1동",
    "대치2동",
    "대치4동",
    "역삼1동",
    "역삼2동",
    "도곡1동",
    "도곡2동",
    "개포1동",
    "개포2동",
    "개포4동",
    "일원본동",
    "일원1동",
    "일원2동",
    "수서동",
    "세곡동",
    "풍납1동",
    "풍납2동",
    "거여1동",
    "거여2동",
    "마천1동",
    "마천2동",
    "방이1동",
    "방이2동",
    "오륜동",
    "오금동",
    "송파1동",
    "송파2동",
    "석촌동",
    "삼전동",
    "가락본동",
    "가락1동",
    "가락2동",
    "문정1동",
    "문정2동",
    "장지동",
    "위례동",
    "잠실본동",
    "잠실2동",
    "잠실3동",
    "잠실4동",
    "잠실6동",
    "잠실7동",
    "강일동",
    "상일동",
    "명일1동",
    "명일2동",
    "고덕1동",
    "고덕2동",
    "암사1동",
    "암사2동",
    "암사3동",
    "천호1동",
    "천호2동",
    "천호3동",
    "성내1동",
    "성내2동",
    "성내3동",
    "길동",
    "둔촌1동",
    "둔촌2동",
    "청운동",
    "신교동",
    "궁정동",
    "세종로",
    "효자동",
    "창성동",
    "통인동",
    "누상동",
    "누하동",
    "옥인동",
    "사직동",
    "체부동",
    "필운동",
    "내자동",
    "통의동",
    "적선동",
    "세종로",
    "도렴동",
    "당주동",
    "내수동",
    "신문로1가",
    "신문로2가",
    "삼청동",
    "팔판동",
    "안국동",
    "소격동",
    "화동",
    "사간동",
    "송현동",
    "홍지동",
    "신영동",
    "구기동",
    "평동",
    "송월동",
    "홍파동",
    "교북동",
    "행촌동",
    "재동",
    "계동",
    "원서동",
    "청진동",
    "서린동",
    "수송동",
    "중학동",
    "공평동",
    "관훈동",
    "견지동",
    "권농동",
    "운니동",
    "익선동",
    "경운동",
    "관철동",
    "인사동",
    "낙원동",
    "와룡동",
    "훈정동",
    "묘동",
    "봉익동",
    "돈의동",
    "장사동",
    "관수동",
    "인의동",
    "예지동",
    "원남동",
    "효제동",
    "연지동",
    "충신동",
    "연건동",
    "동숭동",
    "명륜1가",
    "명륜2가",
    "명륜3가",
    "명륜4가",
    "북창동",
    "태평로2가",
    "남대문로2가",
    "남대문로3가",
    "남대문로4가",
    "서소문동",
    "정동",
    "순화동",
    "의주로1가",
    "충정로1가",
    "봉래동1가",
    "회현동1가",
    "회현동2가",
    "남창동",
    "남대문로3가",
    "남대문로4가",
    "남대문로5가",
    "봉래동1가",
    "봉래동2가",
    "충정로1가",
    "순화동",
    "명동1가",
    "명동2가",
    "충무로1가",
    "충무로2가",
    "저동1가",
    "남산동1가",
    "남산동2가",
    "남산동3가",
    "태평로1가",
    "무교동",
    "다동",
    "을지로1가",
    "을지로2가",
    "삼각동",
    "남대문로1가",
    "남대문로2가",
    "수하동",
    "장교동",
    "수표동",
    "예장동",
    "회현동1가",
    "회현동2가",
    "회현동3가",
    "필동1가",
    "필동2가",
    "필동3가",
    "남학동",
    "주자동",
    "예장동",
    "충무로3가",
    "충무로4가",
    "충무로5가",
    "장충동2가",
    "묵정동",
    "장충동1가",
    "광희동1가",
    "광희동2가",
    "쌍림동",
    "을지로6가",
    "을지로7가",
    "충무로4가",
    "충무로5가",
    "인현동",
    "예관동",
    "오장동",
    "을지로3가",
    "을지로4가",
    "을지로5가",
    "주교동",
    "방산동",
    "입정동",
    "산림동",
    "초동",
    "인현동",
    "저동2가",
    "무학동",
    "흥인동",
    "의주로2가",
    "만리동1가",
    "만리동2가",
    "용산동4가",
    "갈월동",
    "남영동",
    "동자동",
    "용산동1가",
    "청파동1가",
    "청파동2가",
    "청파동3가",
    "서계동",
    "원효로1가",
    "원효로2가",
    "문배동",
    "신계동",
    "원효로3가",
    "원효로4가",
    "신창동",
    "산천동",
    "청암동",
    "도원동",
    "한강로1가",
    "한강로2가",
    "한강로3가",
    "용산동3가",
    "용산동5가",
    "동빙고동",
    "주성동",
    "용산동6가",
    "상왕십리동",
    "하왕십리동",
    "도선동",
    "홍익동",
    "신설동",
    "성북동1가",
    "동소문동1가",
    "동소문동4가",
    "삼선동1가",
    "삼선동2가",
    "삼선동3가",
    "삼선동4가",
    "삼선동5가",
    "돈암동",
    "동소문동2가",
    "동소문동3가",
    "동소문동5가",
    "동선동1가",
    "동선동2가",
    "동선동3가",
    "동선동4가",
    "동선동5가",
    "동소문동6가",
    "동소문동7가",
    "안암동1가",
    "안암동2가",
    "안암동3가",
    "안암동4가",
    "안암동5가",
    "보문동1가",
    "보문동2가",
    "보문동3가",
    "보문동4가",
    "보문동5가",
    "보문동6가",
    "보문동7가",
    "하월곡동",
    "상월곡동",
    "수유동",
    "창신동",
    "숭인동",
    "이촌동",
    "이태원동",
    "성수동1가",
    "성수동2가",
    "중곡동",
    "구의동",
    "자양동",
    "전농동",
    "답십리동",
    "장안동",
    "휘경동",
    "이문동",
    "면목동",
    "상봉동",
    "중화동",
    "묵동",
    "망우동",
    "신내동",
    "돈암동",
    "정릉동",
    "길음동",
    "장위동",
    "번동",
    "쌍문동",
    "방학동",
    "창동",
    "도봉동",
    "월계동",
    "공릉동",
    "하계동",
    "중계동",
    "상계동",
    "불광동",
    "갈현동",
    "응암동",
    "은평구 신사동",
    "충정로2가",
    "충정로3가",
    "합동",
    "미근동",
    "북아현동",
    "냉천동",
    "옥천동",
    "영천동",
    "현저동",
    "대신동",
    "대현동",
    "신촌동",
    "봉원동",
    "창천동",
    "홍제동",
    "홍은동",
    "남가좌동",
    "북가좌동",
    "아현동",
    "신공덕동",
    "마포동",
    "토정동",
    "노고산동",
    "구수동",
    "현석동",
    "마포구 신정동",
    "창전동",
    "상수동",
    "하중동",
    "당인동",
    "동교동",
    "망원동",
    "성산동",
    "마포구 중동",
    "목동",
    "신월동",
    "양천구 신정동",
    "등촌동",
    "화곡동",
    "내발산동",
    "가양동",
    "마곡동",
    "외발산동",
    "과해동",
    "오곡동",
    "오쇠동",
    "방화동",
    "개화동",
    "구로동",
    "고척동",
    "개봉동",
    "오류동",
    "천왕동",
    "온수동",
    "궁동",
    "독산동",
    "시흥동",
    "신길동",
    "영등포동1가",
    "영등포동2가",
    "영등포동3가",
    "영등포동4가",
    "영등포동5가",
    "영등포동6가",
    "영등포동7가",
    "영등포동8가",
    "당산동1가",
    "당산동2가",
    "당산동3가",
    "당산동4가",
    "당산동5가",
    "당산동6가",
    "당산동",
    "문래동1가",
    "문래동2가",
    "문래동3가",
    "문래동4가",
    "문래동5가",
    "문래동6가",
    "양평동1가",
    "양평동2가",
    "양평동3가",
    "양평동4가",
    "양평동5가",
    "양평동6가",
    "양화동",
    "양평동",
    "대림동",
    "노량진동",
    "동작구 본동",
    "상도동",
    "사당동",
    "동작동",
    "신대방동",
    "봉천동",
    "서초동",
    "방배동",
    "반포동",
    "양재동",
    "우면동",
    "원지동",
    "염곡동",
    "신원동",
    "논현동",
    "강남구 삼성동",
    "대치동",
    "역삼동",
    "도곡동",
    "강남구 개포동",
    "일원동",
    "자곡동",
    "율현동",
    "풍납동",
    "거여동",
    "마천동",
    "방이동",
    "송파동",
    "가락동",
    "문정동",
    "잠실동",
    "신천동",
    "명일동",
    "고덕동",
    "암사동",
    "천호동",
    "성내동",
    "둔촌동",
  ];

  for (let j = 0; j < dong.length; j++) {
    const deco = encodeURI(`서울 ${dong[j]}`);

    await axios({
      method: "get",
      url: `https://dapi.kakao.com/v2/local/search/keyword.json?query=${deco}&category_group_code=CE7&page=1`,
      // url: `https://dapi.kakao.com/v2/local/search/keyword.json?query=${deco}&category_group_code=CE7&page=2`,
      // url: `https://dapi.kakao.com/v2/local/search/keyword.json?query=${deco}&category_group_code=CE7&page=3`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `KakaoAK ${process.env.KAKAO_MAP_RESTAPI_KEY}`,
      },
    })
      .then((response) => {
        // console.log(response.data);
        const cafeLists = response.data.documents;
        for (let i = 0; i < cafeLists.length; i++) {
          cafe.findOrCreate({
            where: {
              address_name: cafeLists[i].address_name,
              category_group_code: cafeLists[i].category_group_code,
              category_group_name: cafeLists[i].category_group_name,
              category_name: cafeLists[i].category_name,
              distance: cafeLists[i].distance,
              phone: cafeLists[i].phone,
              place_name: cafeLists[i].place_name,
              place_url: cafeLists[i].place_url,
              road_address_name: cafeLists[i].road_address_name,
              x: cafeLists[i].x,
              y: cafeLists[i].y,
            },
          });
          continue;
        }
        return res.status(200).send({
          response: cafeLists,
          meta: response.data.meta,
          message: "카페 정보를 조회했습니다.",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
