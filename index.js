const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));
//app to understand incoming data as JSON
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/camera", (req, res) => {
  res.render("camera");
});

app.get("/offline", (req, res) => {
  res.render("offline");
});

app.use((req, res) => {
  res.render("notfound");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
