const bt = document.getElementsByTagName("button")

function ExtraireLettres(chaine){
  var exp1 = new RegExp("[a-zA-Z\-' ]+","g");
  let lettres = chaine.match(exp1);
  return lettres;
}

function ExtraireChiffres(chaine){
  var exp2 = new RegExp("[0-9]+","g");
  let chiffres = chaine.match(exp2);
  return chiffres;
}

for(let i=0;i<bt.length;i++){
  bt[i].addEventListener('mouseover', function(obj){
    obj.target.innerHTML = "Acheter";
    this.style.width = "80px";
    this.style.cursor = "pointer";
    this.style.backgroundColor = "#00b300"
  })

  bt[i].addEventListener('mouseout', function(obj){
    obj.target.innerHTML = "<i class=\"fa-solid fa-cart-shopping\"></i>";
    this.style.width = "50px";
    this.style.backgroundColor = "white";
  })
}

var net_a_payer = document.getElementById("net_a_payer");
function afficherTotal(){
  if(total == 0){
    net_a_payer.innerHTML = "Net à payer:";
  }else{
    net_a_payer.innerHTML = "Net à payer:"+total+"Ar";
  }
}

var total = 0;
var addition = new Array();
/*AJOUT DE COMMANDES*/ 
function ajout(){
  var nom = ExtraireLettres(this.id);
  var prix = ExtraireChiffres(this.id);
  let html ="<div class=\"commandes\"><p class=\"sup\"><i class=\"fa-solid fa-circle-xmark\"></i></p><p>"+nom+"<br>"+prix+"AR</p></div>";
  lsCmd.insertAdjacentHTML("beforeend", html);
  total = total + Number(prix);
  afficherTotal();
}


const lsCmd = document.getElementById("liste_commandes");
for(let i=0;i<bt.length;i++){
  bt[i].addEventListener('click',ajout);
  bt[i].addEventListener('click', function(){
    var prix = Number(ExtraireChiffres(this.id));
    addition.push(prix);
    return addition;
  });
}

/*SUPPRESSION DE COMMANDES*/
function suppression(){
  var sup = document.getElementsByClassName("sup");
  var commandes = document.getElementsByClassName("commandes");
    for(let i=0;i<sup.length;i++){
      sup[i].onclick = function(){
      commandes[i].remove();
      total = total - addition[i];
      addition.splice(i, 1);
      afficherTotal();
    }
  }
}
setInterval(suppression, 50);

//Boutton de comfirmation
const acheter = document.getElementById("acheter");
acheter.onclick = function(){
  if(total==""||total==0){
    alert("Il n'y a aucun achat à effectuer");
  }else{
    confirm("Voulez vous vraimet effectuer cet achat pour la somme de "+total+"Ar ?");
  }
}

const annuler = document.getElementById("annuler");
annuler.onclick = function(){
  if(total!=""||total!=0){
    if ((confirm("Voulez vous vraiment vider votre panier?")) == true){
      lsCmd.innerHTML = "";
      net_a_payer.innerHTML = "Net à payer:";
      total = 0;
      addition = [];
    }
  }
}