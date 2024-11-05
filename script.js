var botao = document.getElementById('menu-botao')
var menu = document.getElementById('menu')

botao.addEventListener('click', function(){
    if (menu.style.display === 'block'){
        menu.style.display = 'nome'
    } else{
        menu.style.display = 'block'
    }
})
