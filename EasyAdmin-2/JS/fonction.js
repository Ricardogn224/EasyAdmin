

  function hide2(id,id2){
  var div=document.getElementById(id);
  var div2=document.getElementById(id2);
  if (div.style.display!=='none'){
    div.style.display='none';
    div2.style.display='block';
}
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  

}

/* fonctions pour les formulaires */
function surligne(champ, erreur)
{
   if(erreur)
      champ.style.border = "1px solid red";
   else
      champ.style.border = "";
}

function checkMail(champ)
{
   var mail = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!mail.test(champ.value))
   {
      surligne(champ, true);
      return false;
    
   }

   else
   {
      surligne(champ, false);
      return true;
    
   }
}



function checkRempli(champ){
 if(champ.value.length>=1){
      surligne(champ, false);
      return true;
      
   }
   else{
   	surligne(champ, true);
    return false;
   
   }
}



/*ici la liste des personnes pouvant se connecter*/
let connexion1 = {
  mail:"ricardo@gmail.com",
  mdp:"rica",
  idEmployer:2,

};
let connexion2 = {
  mail:"ricardo@gmail.com",
  mdp:"rica",
  idEmployer:1,

};

/* permet de se connecter si le mot de passe et l'adresse sont corrects*/
function verfication(){
const mail = document.getElementById("mail");
const recupMail = mail.value; 
const motdepasse= document.getElementById("mdp");
const recupMdp = motdepasse.value;


  const objectConnexion1 = JSON.parse(window.localStorage.getItem("connexion1"));
  const mailConnexion1 = objectConnexion1.map(m => m.mail);
  const mdpConnexion1 = objectConnexion1.map(m => m.mdp);
  
  if (recupMail == mailConnexion1 && recupMdp == mdpConnexion1){
    myForm.action='menu_admin.html';
    window.localStorage.setItem("nomObjectConnexionPersonnConnecter","connexion1");
  }else{
    alert("Votre identifiant et/ou votre mot de passe sont incorrects. Veuillez réeassayer ");
    myForm.action='connexion.html';
  }}