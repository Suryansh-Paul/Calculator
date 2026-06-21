const display = document.getElementById("display");
const buttons= document.querySelectorAll(".btn")
let justcalculated= false;

buttons.forEach(button=> {
    button.addEventListener("click", ()=>{
    const input= button.textContent;
    
    if(input==="C"){
        cleardisplay();
    }
    

    else if(input==="DEL"){
        
        deletelastchar();

    }
  
    else {
        appendtodisplay(input);
    }

  })
})


 