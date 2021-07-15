const express = require('express')

const app = express.Router()

const users = [
  {
    name: "Gustavo",
    email: "gustavo.cervus@gmail.com",
    admin: true
  },
  {
    name: 'Adwaita',
    email: "adwaita.io@gmail.com",
    admin: false
  },
]

const games = [
  {
    name: "League of Legends",
    typeGame: "ranked",
    typeHost: "host",
    date: "",
    time: "",
  },
  {
    name: "Read Dead Redemption",
    typeGame: "funny",
    typeHost: "visitor",
    date: "",
    time: "",
  },
  {
    name: "CS-GO",
    typeGame: "ranked",
    typeHost: "visitor",
    date: "",
    time: "",
  }
]

app.get("/", (req,res) => {
  res.send(users)
})

app.get("/users/:id", (req, res)=> {
  const getIdRequest = req.params.id-1

  const user = users[getIdRequest]

  !user ? res.send("Unregistred user..."): res.send(games)
})

app.post("/users/postUser/:id", (req, res) => {
  const getIdRequest  = req.params.id-1
  const user = users[getIdRequest]

  const name = req.body.name
  const email = req.body.email
  const admin = req.body.admin

  users.push({
      name: name,
      email: email,
      admin: admin
    })

  !user ? res.send('user without administrator permission...'): res.send(users)
})

app.post("/users/postGame/:id", (req, res)=> {
  const getIdRequest = req.params.id-1
  const user = users[getIdRequest]

  if (user.admin === true) {

    const name = req.body.name
    const typeGame = req.body.typeGame
    const typeHost = req.body.typeHost
    const date = req.body.date
    const time = req.body.time


    games.push(
      { 
        name: name,
        typeGame: typeGame,
        typeHost: typeHost,
        date: date,
        time: time 
      })

    res.send(games)
  } else if (user.admin === false) {
    res.send('user without administrator permission...')
  }

})

app.put("/users/update/:id", (req,res) => {

  const getIdRequest = req.params.id -1;

  const name = req.body.name
  const email = req.body.email
  const admin = req.body.admin

  users[getIdRequest].name = name;
  users[getIdRequest].email = email;
  users[getIdRequest].admin = admin

  res.send(users)
  res.send('user updated successfully...')

})

app.delete("/users/delete/:id", (req, res)=> {

  const getIdRequest = req.params.id-1;

  users.splice(getIdRequest,1);

  res.send(users)
  res.send('user deleted successfully...')

})

module.exports = app