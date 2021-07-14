const express = require("express");
const session = require("express-session");
const cors = require("cors");
const https = require("https");
const fs = require("fs");
const dotenv = require("dotenv")

const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");
const selectionsRouter = require("./routes/selections");

require('./models');

const app = express();
app.use(express.json());
const port = 80;

const AWS = require("aws-sdk");
dotenv.config()
AWS.config.region = process.env.AWS_CONFIG_REGION;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.AWS_CONFIG_IDENTITYPOOLID
});

//express-session 설정
app.use(
  session({
    secret: "@mohazi",
    resave: false,
    saveUninitialized: true,
    cookie: {
      domain: "https://mohazi.site",
      path: "/",
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "none",
      httpOnly: true,
      secure: true,
    },
  })
);

//cors 설정
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE", "PUT"],
    credentials: true,
  })
);

//router 연결 - users
app.use("/", usersRouter);
// cards
app.use("/", cardsRouter);
// selections
app.use("/", selectionsRouter);

<<<<<<< HEAD

app.listen(port, () => {
  console.log(`🚀 ${port}번 포트로 서버가 연결됐습니다.`);
});

app.get('/', (req, res) => { res.status(200).send("Hello World") })
=======
const server = https
  .createServer(
    {
      key: fs.readFileSync(__dirname + `/` + "key.pem", "utf-8"),
      cert: fs.readFileSync(__dirname + `/` + "cert.pem", "utf-8"),
    },
    app
  )
  .listen(port, () => {
    console.log(`🚀 ${port}번 포트로 서버가 연결됐습니다.`);
  });

module.exports = server;
>>>>>>> 3c836fe3a2c77ebb008aee45e589a7618c47a70a
