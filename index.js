const display = document.getElementById("display");
const buttons= document.querySelectorAll(".btn")


buttons.forEach(button=> {
    button.addEventListener("click", ()=>{
    const input= button.textContent;
    
    if(input==="C"){
        cleardisplay();
    }
    

    else if(input==="DEL"){
        
        deletelastchar();

    }
    else if(input==="="){
        calculate();
         
    }
    else {
        appendtodisplay(input);
    }

  })
})


  function appendtodisplay(input){
    display.value+=input;
  }

  function cleardisplay(){
    display.value="";
  }

  function deletelastchar(){
    display.value=display.value.slice(0,-1);
  }

  function calculate(){
    
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value= "ERROR";
    }
    
  }
