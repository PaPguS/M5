let left = document.getElementById('left')
let carusel = document.getElementById('carusel')
let right = document.getElementById('right')

let caruselElem = 2
const width = 100 / caruselElem
const item = carusel.children.length - caruselElem
let current = 0

for (let i of carusel.children) {
    i.style.width = width + "%"
}
function clickRight(){
    current += 1
    if (current >= item){
        current = 0
    }
    carusel.style.transform = `translateX(-${width*current}%)`
}
right.addEventListener("click", clickRight)

function clickLeft(){
    current -= 1
    if (current < 0){
        current = item
    }
    carusel.style.transform = `translateX(-${width*current}%)`
}
left.addEventListener("click", clickLeft)