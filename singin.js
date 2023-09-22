const express = require("express");
const mysql = require("mysql");
const path = require("path");
const static = require("serve-static");
const singin = require("./public/singin.json");
const { exec } = require("child_process");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: singin.host,
  user: singin.host,
  password: singin.host,
  database: singin.host,
  debug: false,
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", static(path.join(__dirname, "public")));
app.get("", (req, res) => {});

app.post("/process/SingIn", (req, res) => {
  console.log("/process/SingIn 호출됨 " + req);

  const paramName = req.body.memberName;
  const paramID = req.body.memberID;
  const paramPwd = req.body.memberPwd;
  const paramEmail = req.body.memberEmail;

  pool.getConnection((err, conn) => {
    if (err) {
      conn.release();
      console.log("Myaql getConnection error aborted");
      res.writeHead("200", { "Content-Type": "text/html; charset=utf8" });
      res.write("<h1>DB 연결 실패</h1>");
      res.end();
      return;
    }

    console.log("데이터베이스 끈");

    conn.query(
      "insert into singin (memberName, memberID, memberPwd, memberEmail) values (?,?,?,password(?))",
      [paramName, paramID, paramPwd, paramEmail],
      (err, result) => {
        conn.release();
        console.log("실행된 SQL: " + exec.sql);

        if (err) {
          console.log("SQL 실행시 오류 발생");
          console.dir(err);
          res.writeHead("200", { "Content-Type": "text/html; charset=utf8" });
          res.write("<h1>SQL query 실행 실패</h1>");
          res.end();
          return;
        }

        if (result) {
          console.dir(result);
          console.log("Inserted 성공");

          res.writeHead("200", { "Content-Type": "text/html; charset=utf8" });
          res.write("<h2>사용자 추가 성공</h2>");
          res.end();
        } else {
          console.log("Inserted 실패");

          res.writeHead("200", { "Content-Type": "text/html; charset=utf8" });
          res.write("<h1>사용자 추가 실패</h1>");
          res.end();
        }
      }
    );
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/SingIn.html");
});
