// se asigna el framwork, luego importa dependencias, por ultimo nombre de la dependencia
const express = require("express");
const mongoose = require("mongoose")
const user = require("./user.controller")
const app = express()
const port = 3000

app.use(express.json())

mongoose.connect('mongodb+srv://aru:chancho88XD@cluster0.zsg9ebq.mongodb.net/?retryWrites=true&w=majority')

// endpoint
// res: response, req: request
// listar, crear, actualizar y eliminar
app.get('/users', user.list)
app.post('/users', user.create)
app.get('/users/:id', user.get)
// el id es un dato variable que aparece en la ruta
app.put('/users/:id', user.update)
app.patch('/users/:id', user.update)
app.delete('/users/:id', user.destroy)
// el 404 tiene sentido con GET, no con las demas

app.use(express.static('app'))


app.get ('/', (req, res) => {
    res.sendFile("${__dirname}/index.html")
})
app.get("*", (req, res) => {
    res.status(404).send("esta pagina no existe")
})

app.listen(port, () => {
    console.log("arrancando la aplicacion")
})