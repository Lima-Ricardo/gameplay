import express from "express";

const app =  express()
const port = 3000

app.use(express.json())

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

app.get("/", (req,res) => {
  res.send(users)
})

app.get("/users/:id", (req, res)=> {
  const getIdRequest = req.params.id-1

  const users = users[getIdRequest]

  !user ? res.send("Unregistred user..."): res.send(user)
})

app.post("/users", (req, res)=> {
  
  const name = req.body.name
  const email = req.body.email
  const admin = req.body.admin

  const id = users.lastIndexOf(users)


  users.push({ name: name, email: email, admin: admin })

  res.send(users)
  res.send(`Sucessfully registered user:${users} by id: ${id} ...`)
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

app.listen(port, err => !err ? console.log('server is runnig!'):console.log("server is not running!"))


