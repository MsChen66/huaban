function font(){
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.5 + 'px'
}

font()

window.onresize = font