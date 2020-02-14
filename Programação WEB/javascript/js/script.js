senhaAdmin = 'paçoca'
usuarioAdimin = 'master'

var app = document.getElementById("app")

var loginEl = document.createElement("input")
loginEl.setAttribute("type", "text")
loginEl.setAttribute("placeholder", "Escreva seu nome")
loginEl.setAttribute("id", "usuario")
app.appendChild(loginEl)

var senhaEl = document.createElement("input")
senhaEl.setAttribute("type", "password")
senhaEl.setAttribute("placeholder", "Digite sua senha")
senhaEl.setAttribute("id", "senha")
app.appendChild(senhaEl)

var entrarEl = document.createElement("button")
entrarEl.innerHTML = "Entrar"
entrarEl.setAttribute("onclick", "checarlogin()")
app.appendChild(entrarEl)

function checarlogin(){
    if((loginEl.value === usuarioAdimin) && (senhaEl.value === senhaAdmin)){
        alert("Olá " + loginEl.value + " seja bem vindo")
    }else{
        alert("Usuário ou senha inválidos")
    }
}