let botaoPlayPause = document.getElementById('playpause');
let audioCapitulo = document.getElementById('audio-capitulo');
let avancar = document.getElementById('avancar')
let anterior = document.getElementById('voltar')
let numeroCapitulo = document.getElementById('capitulo')
const numeroCapitulos = 10;
let isPlaying = 0;
let capituloAtual = 1;

let tocar = ()=>{
    audioCapitulo.play()
    isPlaying = 1;
    botaoPlayPause.classList.remove('bi-play-circle-fill')
    botaoPlayPause.classList.add('bi-pause-circle-fill')
}

let pausar = ()=>{
    audioCapitulo.pause()
    isPlaying = 0;
    botaoPlayPause.classList.remove('bi-pause-circle-fill')
    botaoPlayPause.classList.add('bi-play-circle-fill')
}


function playPause(){
    if(isPlaying===0){
        tocar()
    } else {
        pausar()
    }
}

function proximaFaixa(){
    if(capituloAtual === numeroCapitulos){
        capituloAtual = 1
    } else{
    capituloAtual++
    }
    audioCapitulo.src=`./books/dom-casmurro/${capituloAtual}.mp3`
    numeroCapitulo.innerText = `Capitulo ${capituloAtual}`

    tocar()
}

function faixaAnterior(){
    if(capituloAtual<=1){
        capituloAtual = 10 
    } else{
    capituloAtual--
    }
    audioCapitulo.src=`./books/dom-casmurro/${capituloAtual}.mp3`
    numeroCapitulo.innerText = `Capitulo ${capituloAtual}`

    tocar()
}


botaoPlayPause.addEventListener('click', playPause);
avancar.addEventListener('click', proximaFaixa);
anterior.addEventListener('click', faixaAnterior)
