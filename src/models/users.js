const User = require("./UserClass");

const gustavo = new User(
  1,
  "Gustavo Henrique",
  "gustavo.cervus@gmai.com",
  true
)

const adwaita = new User(
  2,
  "adwaita",
  "awaita.io@gmail.com",
  false
)

module.exports = [gustavo, adwaita]