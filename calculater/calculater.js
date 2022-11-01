//all the calculator buttons are inside of the buttons array
var display= document.getElementById("display")
   




var buttons= Array.from(document.getElementsByClassName("number"))

//im connecting each button inside the array (button)to a function

buttons.map((button)=>{
    button.addEventListener("click",(event)=>{
        switch(event.target.innerText){
            case "C":
            display.innerText='';
            break;
    case"=":
    display.innerText=eval(display.innerText)
    
    break;
    
    case"←":
    if (display.innerText!=='')
    display.innerText= display.innerText.slice(0,-1);
    break;
    default:
        display.innerText+= event.target.innerText
        break;
    
    
        }
    })
    })


