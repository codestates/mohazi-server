const express = require("express");
const session = require("express-session");
const cors = require("cors");
const https = require("https");
const fs = require("fs");

// const usersRouter = require("./routes/users");
// const cardsRouter = require("./routes/cards");
// const selectionsRouter = require("./routes/selections");

// require('./models');

const app = express();
app.use(express.json());
const port = 80;

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
// app.use("/login", usersRouter);
// app.use("/logout", usersRouter);
// app.use("/signup", usersRouter);
// app.use("/userdelete", usersRouter);
// app.use("/usersearch", usersRouter);
// app.use("/userupdate", usersRouter);
// // cards
// app.use("/createcard", cardsRouter);
// app.use("/dailycarddelete", cardsRouter);
// app.use("/dailycardinfo", cardsRouter);
// app.use("/dailycardupdate", cardsRouter);
// app.use("/mypage", cardsRouter);
// // selections
// app.use("/itemtype", selectionsRouter);
// app.use("/selectionupdate", selectionsRouter);

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
    console.log(`🚀 server listen in ${port}`);
  });

module.exports = server;