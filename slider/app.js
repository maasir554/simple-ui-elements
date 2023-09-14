sliderOne = document.getElementById("slider-1")
add_slider_logics = (slider) => {
    let line = slider.children[1]
    
    let dragger = slider.children[1].children[1]
    
    let fill = slider.children[1].children[0];
    
    let lineWidth = parseInt(window.getComputedStyle(line).getPropertyValue('width').slice(0,-2))
    
    let valueBox = slider.children[2]
    
    let returnValue;

    // the following is an important function:
    const mousemover = (event2)=>{
        let reqPosn = (event2.clientX) ? (event2.clientX - line.offsetLeft) : (event2.touches[0].clientX - line.offsetLeft)
        if (reqPosn >=0 && reqPosn <= lineWidth){
            fill.style.width = reqPosn + 'px'

            dragger.style.left = reqPosn +'px'
            
            returnValue = Math.round( reqPosn / lineWidth * 100)
            
        } 
        // To solve the issue wen user moves cursor too fast:
        else if (reqPosn >= lineWidth){
            fill.style.width = lineWidth + 'px'
            
            dragger.style.left = lineWidth + 'px'
            
            returnValue = 100;
        }
        // sames reason as the last one.
        else{
            fill.style.width = '0px'
            
            dragger.style.left = '0px'
            
            returnValue = 0
        }
        // as returnValue changes, we need to update some parts.
        valueBox.innerText = returnValue + '%';
        
        updateTBsize(returnValue);
        
    }
    
    // we need to add the event to the document object
    const rapid_mouse_reporter = () => {
        // the following is a new thing i learnt.
        // it updates the value continuously as we move mouse.
        document.addEventListener('mousemove',mousemover)

        document.addEventListener('touchmove',mousemover)

    }
    
    // adding functionality to the dragger
    dragger.addEventListener('mousedown',rapid_mouse_reporter)
    
    dragger.addEventListener('touchstart',rapid_mouse_reporter);
    
    // when mouse is up, we need to remove the event listener.: 
    
    document.addEventListener('mouseup',()=>{
        document.removeEventListener('mousemove',mousemover);
        document.removeEventListener("touchmove", mousemover)
    })

    document.addEventListener('touchend', () => {
        document.removeEventListener("touchmove", mousemover)
        document.removeEventListener('mousemove',mousemover);
    })

    // if we click directly on some point on the gray liner, it should also
    // work similarly.
    let lineDraggerIntegration = (event)=>{

        // the below two lines are just for adding focus to the dragger(circle)
        // event.preventDefault() // default behaviour of browser doesnot allow us to set focus on mouse down
        
        dragger.focus()
        
        document.addEventListener('mousemove',mousemover)

        document.addEventListener('touchmove',mousemover)
        
        // the following is repeated, but it is required for mouse down
        let reqPosn =  (event.clientX) ? (event.clientX - line.offsetLeft ) : (event.touches[0] - line.offsetLeft);
        
        if (reqPosn >=0 && reqPosn <= lineWidth){
            fill.style.width = reqPosn + 'px'
            
            dragger.style.left = reqPosn +'px'
            
            returnValue = Math.round( reqPosn / lineWidth * 100)
            
            valueBox.innerText = returnValue + '%'
            
            updateTBsize(returnValue);
        }
    }

    
    line.addEventListener('mousedown',lineDraggerIntegration )
    line.addEventListener('touchstart',lineDraggerIntegration)

    document.addEventListener('mouseup',()=>{document.removeEventListener('mousemove',mousemover)})
    document.addEventListener('touchend',()=>{document.removeEventListener('touchmove',mousemover)})

    dragger.addEventListener('touchstart',e=>{dragger.focus()})
    line.addEventListener('touchend',()=>{dragger.focus()})
    line.addEventListener('mousedown',(e)=>{e.preventDefault();dragger.focus()})

    // Keyboard logics: 
    const keyboardLogic = (event) => {
        let INITIALreqPosn = parseFloat(fill.style.width.slice(0,-2));
        let reqPosn;
        switch( event.keyCode){
            case 39 : case 38 :
                reqPosn = INITIALreqPosn + parseFloat(lineWidth/100)
                if (reqPosn >=0 && reqPosn <= lineWidth){
                    fill.style.width = reqPosn + 'px'
        
                    dragger.style.left = reqPosn +'px'
                    
                    returnValue = Math.round( reqPosn / lineWidth * 100)
                    
                } 
                // To solve the issue wen user moves cursor too fast:
                else if (reqPosn >= lineWidth){
                    fill.style.width = lineWidth + 'px'
                    
                    dragger.style.left = lineWidth + 'px'
                    
                    returnValue = 100;
                }
                // sames reason as the last one.
                else{
                    fill.style.width = '0px'
                    
                    dragger.style.left = '0px'
                    
                    returnValue = 0
                }
                // as returnValue changes, we need to update some parts.
                valueBox.innerText = returnValue + '%';
                
                updateTBsize(returnValue);

                break;
            
            case 37: case 40:     
            reqPosn = INITIALreqPosn - parseFloat(lineWidth/100);
                if (reqPosn >=0 && reqPosn <= lineWidth){
                    fill.style.width = reqPosn + 'px'
    
                    dragger.style.left = reqPosn +'px'

                    returnValue = Math.round( reqPosn / lineWidth * 100)

                } 
                // To solve the issue wen user moves cursor too fast:
                else if (reqPosn >= lineWidth){
                    fill.style.width = lineWidth + 'px'

                    dragger.style.left = lineWidth + 'px'

                    returnValue = 100;
                }
                // sames reason as the last one.
                else{
                    fill.style.width = '0px'

                    dragger.style.left = '0px'

                    returnValue = 0
                }
                // as returnValue changes, we need to update some parts.
                valueBox.innerText = returnValue + '%';

                updateTBsize(returnValue);
                break;
            }
    }
    
    slider.addEventListener('keydown',keyboardLogic)

}

// finally, adding the logics to the slider:
add_slider_logics(sliderOne)

// additional showcase:
updateTBsize = (size) => {
    let TB = document.getElementById('showcaseTB')
    
    TB.style.fontSize = size + 'px';
}


// Mohammad Maasir | 11 sep 2023 - 12 sep 2023| completed 00:45
// SPDX Identifier: MIT License 
