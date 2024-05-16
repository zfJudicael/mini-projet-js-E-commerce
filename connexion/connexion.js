var sign_inBTN = document.getElementById("sign_inBTN");
var sign_upBTN = document.getElementById("sign_upBTN");
var droite = document.getElementById("sign_up");
var gauche = document.getElementById("sign_in");

window.onload = function(){
    sign_inBTN.style.color = "#00aa7f";
    sign_inBTN.style.borderBottom = "2px solid #00aa7f";
    sign_inBTN.style.backgroundColor = "#d4fde3";
    droite.style.transform = "translateX(388px)";
    droite.style.opacity = "0";
}


sign_inBTN.onclick = function(){

    if(!this.style.color){
        this.style.color = "#00aa7f";
        this.style.backgroundColor = "#d4fde3";
        this.style.borderBottom = "2px solid #00aa7f";

        sign_upBTN.style.removeProperty("color");
        sign_upBTN.style.removeProperty("background-color");
        sign_upBTN.style.removeProperty("border-bottom");

        droite.style.transform = "translateX(388px)";
        droite.style.animation = "hide 0.5s";
        droite.style.opacity = "0";
        gauche.style.transform = "translateX(0)";
        gauche.style.animation = "show 0.5s";
        gauche.style.opacity = "1";
    }
}

sign_upBTN.onclick = function(){

    if(!this.style.color){
        this.style.color = "#00aa7f";
        this.style.backgroundColor = "#d4fde3";
        this.style.borderBottom = "2px solid #00aa7f";

        sign_inBTN.style.removeProperty("color");
        sign_inBTN.style.removeProperty("background-color");
        sign_inBTN.style.removeProperty("border-bottom");

        gauche.style.transform = "translateX(-388px)";
        gauche.style.animation = "hide 0.5s";
        gauche.style.opacity = "0";
        droite.style.transform = "translateX(0)";
        droite.style.animation = "show 0.5s";
        droite.style.opacity = "1";
    }
}


var password = document.getElementsByClassName("password");
function showOrHidePassword() {
    for(let i = 0; i< password.length ; i++){
        if(password[i].type === "password"){
            password[i].type = "text"
        }else{
            password[i].type = "password"
        }
    }
}
