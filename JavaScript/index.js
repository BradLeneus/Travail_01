////////////////// Obtenez le modal d'inscription ///////////////////////    
function login(event) {  // fonction pour se connecter
  event.preventDefault();
  const nomUtilisateur = document.getElementById("unameLogin").value;
  const pwsd = document.getElementById("pswdLogin").value;

  const connexionUtilisateur = localStorage.getItem("uname");
  const pwsdLogin = localStorage.getItem("pswd");

  if (nomUtilisateur === connexionUtilisateur && pwsd === pwsdLogin) {
    window.location.replace("../accueil.html")
  }
  else {
    alert("Désolé,Vous n'avez pas entré vos bonnes informations.")
  }
}

function inscrireUtilisateur() { // fonction pour s'inscrire
  const nomUtilisateur = document.getElementById("nomUtilisateur").value;
  const mdp = document.getElementById("mdp").value;
  const confirmationMdp = document.getElementById("confirmationMdp").value;

  if (mdp === confirmationMdp) {
    localStorage.setItem("uname", nomUtilisateur)
    localStorage.setItem("pswd", mdp)
  }
}




////////////////// Obtenez le modal d'inscription ///////////////////////
var modal = document.getElementById('id01');

// Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
window.onclick = function (event) {

  if (event.target == modal) {
    modal.style.display = "none";
  }
}


///////////////// Obtenez le modal de connexion //////////////////////////
var modal2 = document.getElementById('id02');

// Lorsque l'utilisateur clique n'importe où en dehors du modal, fermez-le
window.onclick = function (event) {
  if (event.target == modal2) {
    modal.style.display = "none";
  }
}