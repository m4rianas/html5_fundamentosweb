let nome = window.document.getElementById('Nome')
let email = document.querySelector('#E-mail')
let assunto = document.querySelector('#Assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

function validarNome(){
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido!'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Validado!'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail Inválido!'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Validado!'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validarAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 500){
        txtAssunto.innerHTML = 'Texto muito grande! Digite um texto com até 500 caracteres!'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente!!!')
    }
}
function mapaZoom(){
    mapa.style.whidth = '800px'
    mapa.style.heigh = '650px'
}

function mapaNormal(){
    mapa.style.whidth = '600px'
    mapa.style.heigh = '450px'
}
