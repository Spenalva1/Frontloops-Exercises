const methods = document.querySelectorAll(".method")
var selectedMethod = document.querySelector(".method.selected")

function handleMethodClick(e){
    selectedMethod.classList.remove("selected");
    this.classList.add("selected");
    selectedMethod = this;
}

methods.forEach(method =>{
    method.addEventListener("click", handleMethodClick)
})