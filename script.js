let inputbox =
document.querySelector("input")
let buttons =
document.querySelectorAll("button")
let string= ''
buttons.forEach(element=> {
    element.addEventListener('click', (e)=> {
        if(e.target.innerText=='=') {
            string = String(eval(string))
            inputbox.value = string;
        }
        else if(e.target.innerText=='AC') { 
            string=''
            inputbox.value=string;
        }
        else{
            string +=e.target.innerText
            inputbox.value=string;
          
 
     



            
        }
    })
})
