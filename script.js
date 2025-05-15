let heading = document.getElementById("heading")
let delinput = document.getElementById("delinput")
let delbtn= document.getElementById("delbtn")

delinput.addEventListener("keyup", () => {
       console.log(delinput.value);
    if (delinput.value == "delete" || delinput.value == "Delete") {
        delbtn.removeAttribute("disabled")
    }
    else {
        delbtn.setAttribute("disabled", true);
    }
})

delbtn.addEventListener("click", ()=> {
    heading.style.display = "none";
})



