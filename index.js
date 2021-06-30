const express = require("express");
const session = require("express-session");
const cors = require("cors");
const https = require("https");
const fs = require("fs");

// const usersRouter = require("./routes/users");
// const cardsRouter = require("./routes/cards");
const selectionsRouter = require("./routes/selections");

require('./models');

const app = express();
app.use(express.json());
const port = 4000;

//express-session 설정
app.use(
  session({
    secret: "@mohazi",
    resave: false,
    saveUninitialized: true,
    cookie: {
      domain: "localhost",
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
    methods: ["GET", "POST", "OPTIONS", "PATCH", "DELETE"],
    credentials: true,
  })
);

//router 연결 - users
// app.use("/", usersRouter);
// // cards
// app.use("/", cardsRouter);
// selections
app.use("/", selectionsRouter);

//https-server
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