let button = document.getElementById("hamburger");
let nav = document.querySelector(".menu-box")
let cross =document.getElementById("cross");
  

function navshow(){
   
        nav.style.transform="translate(0%)";
        button.style.display="none";
        cross.style.display="block"
}
 
function navhide(){
    nav.style.transform="translate(100%)";
    button.style.display="block";
    cross.style.display="none"
}