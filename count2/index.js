const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
let index = 0;

buttons.forEach((btn)=>{
    btn.addEventListener("click", function(e){
        let checkButtons = e.currentTarget.classList;
        if(checkButtons.contains("increase")){
            index++;
        }else{
            index--;
        }
        if(index < 0){
            result.style.color = "red"
        }else{
            result.style.color = "green"
        }
        result.innerHTML = index;
    })
})