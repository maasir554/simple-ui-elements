const movingLine = document.getElementById("nav-indicator")
const navBtns = document.querySelectorAll(".nav-icons")

const colorSwitcher = (activeIdx) => {
    navBtns.forEach(e => {
        e.style.color = 'rgb(150, 150, 150)'
    })
    navBtns[activeIdx].style.color = "rgb(29, 97, 255)"
}

const lineMover = (idx) => {
    movingLine.style.left = `${(25 * (idx+1)) - 12.5}%`
}

navBtns.forEach((element,index) => {
    element.addEventListener('click' , ()=> {
        colorSwitcher(index)
        lineMover(index)
    })
});