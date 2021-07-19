const express = require('express')
const userList = require('../models/users')
const gameList = require('../models/games')

const app = express.Router()

const games = gameList
const users = userList

JSON.stringify(users)

const getValidatedUser = () => users.filter(Boolean);

const getUsersById = id => {
  getValidatedUser().find(
  user => user.id === id)
}

const getUserbyIndex = id => {
  getValidatedUser().findIndex(
    user => user.id === id)
}

app.get("/users", (req,res) => {
  res.send(users)
})

app.get("/games", (req, res)=> {
  res.send(games)
})

app.get("/users/:id", (req, res)=> {
  const getIdRequest = req.params.id-1

  const user = users[getIdRequest]

  !user ? res.send("Unregistred user...") :res.send(user)
})

app.post("/users/postUser/", (req, res) => {

  const user = req.body

  if (!user.id || !user.name || !user.email || !user.admin) {
    res.status(400).send({
      message: 'incomplete registration, look at the body of the request' 
    })
    return;
  }

  user.id = users.length + 1

  users.push(user)
  res.send(users)

})

app.post("/users/postGame/:id", (req, res)=> {

  const id = req.params.id-1
  const user = users[id]

  if (user.admin) {

    const game = req.body

    !game.nameGame || !game.typeGame || !game.typeHost || !game.date || !game.time ?
      res.status(400).send({
        message: "incomplete registration, look at the body of the request",
        games
      }):res.status(200)
    
    
    games.push(game)
    res.send(games)
    
  } else if (!user.admin) {
    res.send({ message: "user without administrator permission..."})
  }
})

app.put("/users/update/:id", (req,res) => {

  const id = +req.params.id;
  const userIndex = getUserbyIndex(id);

  userIndex < 0 ? res.status(404).send({message: "user not found..."}):res.status(200);

  const newUser = req.body;

  !Object.keys(newUser).length ? res.status(400).send({
    message: "Empty registration, look at the body of the request",
    users
  }):res.status(200)

  !newUser || !newUser.id|| !newUser.name || !newUser.email || !newUser.admin?
  res.status(400).send({
    message: "incomplete registration, look at the body of the request",
    users
  }):res.status(200)

  const user = getUsersById(id)

  users[0] = {
    ...user,
    ...newUser,
  };

  res.send(users)

})

app.delete("/users/delete/:id", (req, res)=> {

  const getIdRequest = +req.params.id;
  const userIndex = getUsersById(getIdRequest)


  if (userIndex < 0) {
    res.status(404).send({message: "user not found..."});
    return;
  }

  users.splice(userIndex, 1)

  res.send({
    message: 'user deleted successfully...'
  })

})

module.exports = app