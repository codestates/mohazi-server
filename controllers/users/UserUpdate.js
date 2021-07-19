const { user } = require("../../models");
const s3 = require("../../config/s3");

module.exports = {
  put: async (req, res) => {
    const { userId, username, password, photo, description } = req.body;

    await user
      .findOne({ where: { id: userId } })
      .then((res) => {
        const prevPhoto = res.dataValues.photo;

        if (photo !== prevPhoto) {
          s3.deleteObject(
            {
              Bucket: "mohazig",
              Key: prevPhoto,
            },
            function (err, data) {
              if (data) {
                console.log("delete success", data);
              } else {
                console.log(err);
              }
            }
          );
        }
      })
      .then((response) => {
        if (password) {
          user
            .update(
              {
                username: username,
                password: password,
                photo: photo,
                description: description,
              },
              {
                where: {
                  id: userId,
                },
              }
            )
            .then((userInfo) => {
              return res.status(200).send({
                message: "성공적으로 정보를 바꾸었습니다.",
              });
            })
            .catch((err) => {
              res.status(400).send({
                err: "err",
              });
            });
        } else {
          user
            .update(
              {
                username: username,
                photo: photo,
                description: description,
              },
              {
                where: {
                  id: userId,
                },
              }
            )
            .then((userInfo) => {
              return res.status(200).send({
                message: "성공적으로 정보를 바꾸었습니다.",
              });
            })
            .catch((err) => {
              res.status(400).send({
                err: "err",
              });
            });
        }
      });
  },
};
