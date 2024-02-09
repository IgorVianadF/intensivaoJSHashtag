const buttonSend = document.getElementById('enviar');
const textInput = document.getElementById('texto');
const textBox = document.getElementById('mensagens')
const socket = io();

buttonSend.addEventListener('click',()=>{
    if(textInput.value !== ''){
        socket.emit('new message', textInput.value)
        textInput.value = ''
    }
})

socket.addEventListener('new message', (msg)=>{
    const messageElem = document.createElement('li')
    messageElem.textContent = msg
    messageElem.classList.add('mensagem')
    textBox.appendChild(messageElem)
})