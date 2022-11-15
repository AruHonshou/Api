const loadInitialTemplate = () => {
    const template = `
    <h1>Usuarios</h1>
    <form id="user-Form">
        <div>
            <label>Nombre</label>
            <input name="name"></input>
        </div>
        <div>
            <label>Apellido</label>
            <input name="lastname"></input>
        </div>
        <button type="submit">Enviar</button>
    </form>
    <ul id="user-list"></ul>
    `
    
    const body = document.getElementsByTagName('body')[0]
    body.innerHTML = template
}
const getUsers = async() => {

}

const addFormListener = () => {
    const userForm = document.getElementById('user-Form')
    userForm.onsubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(userForm)
        const data = Object.fromEntries(formData.entries())
        console.log(data)
        await fetch('/Users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'aplication/json'
            }
        })
        userForm.reset()
        getUsers()
    }
}

window.onload = () => {
    loadInitialTemplate()
    addFormListener()
}

