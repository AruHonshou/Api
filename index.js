const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://aru:chancho88XD@cluster0.zsg9ebq.mongodb.net/?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String,
    edad: Number,
})

const crear = async () => {
    const user = new User({username: 'Nako', edad: 22})
    const savedUser = await user.save()
    console.log(savedUser)
}
// crear()

const buscarTodo = async() => {
    const users = await User.find()
    console.log(users)
}
// buscarTodo()

// buscara a todos los llamados Aru
const buscar = async () => {
    const user = await User.find({username: "Aru"})
    console.log(user)
}
// buscar()

// para buscar a solo una persona, si no lo encuentra nos dara null
const buscarUno = async() => {
    const user = await User.findOne({username: "Aru"})
    console.log(user)
}
// buscarUno()

// actulizamos un username, en este caso la edad
const actualizar = async() => {
    const user = await User.findOne({username: "Aru"})
    console.log(user)
    user.edad = 23
    if (user)await user.save()
}
// actualizar()

// eliminar un username, si este no existe que muestre null
const eliminar = async () => {
    const user =  await User.findOne({username: "Nako"})
    console.log(user)
    if (user){
        await user.remove()
    }
}
eliminar()