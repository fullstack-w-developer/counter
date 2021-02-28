const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
let index = 0;

buttons.forEach((btn)=>{
 btn.addEventListener("click", function(e){
     let checkButtons = e.currentTarget.classList;
     if(checkButtons.contains('increase')){
         index++;
     }else if(checkButtons.contains('decrease')){
         index--;
        }else{
            index = 0;
        }

        if(index < 0){
            result.style.color = "red"
        }else  if(index > 0){
            result.style.color = "green"
        }else{
            result.style.color = "#00000089"
        }
        result.innerHTML = index
    })
})