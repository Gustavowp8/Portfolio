let perfil = document.getElementById('contatoG')

function chamaGus() {
    alert('Você sera direcionado para outro site/app')
    location='https://api.whatsapp.com/send?phone=5561995084318&text=Ol%C3%A1%20Gustavo%2C%20'
}

myvideo = document.getElementById('videoM');
myvideo.autoplay = true;
myvideo.loop = true;
myvideo.load();

function fecharPerfil(){
    perfil.style.display= 'none'
}
function chamaPerfil(){
    perfil.style.display= 'block'
}

function infoJs(){
    alert('Os nossos sites e aplicativos contam com a programação moderna do JavaScript.')
}

function infoPagi(){
    alert('Os nossos sites contam com a tecnologia HTML e CSS últimas versões!')
}