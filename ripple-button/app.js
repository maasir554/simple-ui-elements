
ripple = (event) => {;
        let goley = document.getElementsByClassName("gola")[0]
        if (goley){
            goley.remove();
        }else{}
        let targetButton = event.currentTarget; // event.target is different from event.currntTarget
        let gola = document.createElement('span')
        gola.classList.add('gola')
        // clientX will give x coordinate of cursor [left direction is +ve x]
        // down direction is +ve y
        // offsetLeft gibes the x coorfinate of leftmost point of an element
        let [x,y] = [event.clientX - targetButton.offsetLeft,event.clientY - targetButton.offsetTop]
        // console.log(y);
        gola.style.left = x + 'px'
        gola.style.top = y + 'px'
        // console.log(gola);
        targetButton.appendChild(gola)

        let goley2 = document.getElementsByClassName("gola2")
        for (let i of goley2){
        if(i.parentElement == event.currentTarget){
            i.remove()
        }
    }
} 

stripple = (event) => {
    targetBtn = event.currentTarget
    let gola = document.createElement('span')
    gola.classList.add('gola2')
    let [x,y] = [event.clientX - targetBtn.offsetLeft,event.clientY - targetBtn.offsetTop]
    gola.style.left = x + 'px'
    gola.style.top = y + 'px'
    targetBtn.appendChild(gola)
}

clripple = (event) => {
    let goley2 = document.getElementsByClassName("gola2")
    for (let i of goley2){
        if(i.parentElement == event.currentTarget){
            i.remove()
        }
    }
}

// Mohammad Maasir | 10 sep 2023 | completed: 18:25
