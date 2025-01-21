const envioAlice = document.querySelector('#aliceInput')
envioAlice.addEventListener('keyup', enviaMsg)
const envioBob = document.querySelector('#bobInput')
envioBob.addEventListener('keyup', enviaMsg)
const tela = document.querySelector('#display')

function enviaMsg(evento) {
    if (evento.key === 'Enter') {
        const msg = document.createElement('p')
        if(evento.target.id === 'aliceInput') {
            msg.classList.add('msgAlice')
            msg.textContent = envioAlice.value
            envioAlice.value = ''
        }
        if(evento.target.id === 'bobInput') {
            msg.classList.add('msgBob')
            msg.textContent = envioBob.value
            envioBob.value = ''
        }
        tela.appendChild(msg)
    } 
}