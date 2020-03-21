function setDate(){
	let date ="12/01/12";
	return date;
}
/* ici la listes des produits disponnible de l'entreprise*/
let produit1 = {
	idProduit:1,
	NomProduit:"parecetamol",
	quantité:20,
	prix:2
};

let produit2 = {
	idProduit:2,
	NomProduit:"aspirine",
	quantité:20,
	prix:8
};

let produit3 = {
	idProduit:3,
	NomProduit:"C100 cendox",
	quantité:20,
	prix:10
};

let produit4 = {
	idProduit:4,
	NomProduit:"cipanemol",
	quantité:20,
	prix:8
};

let produit5 = {
	idProduit:5,
	NomProduit:"dodonol",
	quantité:20,
	prix:25
};

/* ici la liste des ventes effectuer par l'entreprise*/
let vente1 ={
	idVente:1,
	idProduit:2,
	date:setDate(),
};
let vente2 ={
	idVente:2,
	idProduit:2,
	date:setDate(),
};
let vente3 ={
	idVente:3,
	idProduit:2,
	date:setDate(),
};
let vente4={
	idVente:4,
	idProduit:2,
	date:setDate(),
};
let vente5 ={
	idVente:5,
	idProduit:2,
	date:setDate(),
};
let vente6 ={
	idVente:6,
	idProduit:2,
	date:setDate(),
};
/*ici la liste des employers de l'entreprise*/
let employer1 ={
	idEmployer:1,
	nomEmployer:"Ricardo",
	adresseEmployer:"162 avenue de france 75014",
	poste:"magasinier",
	salaire:"15000",
};

let employer2 ={
	idEmployer:2,
	nomEmployer:"Sarah",
	adresseEmployer:"162 avenue de france 75014",
	poste:"Cadre",
	salaire:"15000",
};

listeEmployer =[employer1,employer2];
/*ici la listre des dépense de l'entreprise */
let depense1 ={
	idDepense:1,
	nommenclature:"lOYER",
	montant:3000,
	nature:"réccurentes",

}

let depense2 ={
	idDepense:2,
	nommenclature:"charge social",
	montant:3000,
	nature:"réccurentes",
};

let depense3 ={
	idDepense:3,
	nommenclature:"charge salariale",
	montant:3000,
	nature:"réccurentes",
};


/* ici la liste des magasins qui utilise notre applications*/
let magasin = {
idMagasin: 1,
nomMagasin: "Pharmacie",
adresseMagasin: "10 victor Hugo Paris 9",
listeIdProduit:[produit1,produit2,produit3,produit4,produit5],
listeIdEmployer: [employer1,employer2],
listeIdDepense: [depense1,depense2],
listeIdVente: [vente1,vente2,vente3,vente4,vente5,vente6]
};

/*ici la liste des personnes pouvant se connecter*/
let connexion1 = {
	mail:"sarah@gmail.com",
	mdp:"sarah",
	idEmployer:2,
	
};
let connexion2 = {
	mail:"ricardo@gmail.com",
	mdp:"rica",
	idEmployer:1,

};



/*fonctions permetant d'enregistrer les objets dans le local storage*/


/*stocage de objets produit*/
window.onload = function(e){ 

	window.localStorage.setItem("produit1",JSON.stringify([produit1]));
	window.localStorage.setItem("produit2",JSON.stringify([produit2]));
	window.localStorage.setItem("produit3",JSON.stringify([produit3]));
	window.localStorage.setItem("produit4",JSON.stringify([produit4]));
	window.localStorage.setItem("produit5",JSON.stringify([produit5]));
	/*stocage des objets ventes*/

	window.localStorage.setItem("vente1",JSON.stringify([vente1]));
	window.localStorage.setItem("vente2",JSON.stringify([vente2]));
	window.localStorage.setItem("vente3",JSON.stringify([vente3]));
	window.localStorage.setItem("vente4",JSON.stringify([vente4]));
	window.localStorage.setItem("vente5",JSON.stringify([vente5]));
	window.localStorage.setItem("vente6",JSON.stringify([vente6]));

	/*stocage des objets employer*/
	window.localStorage.setItem("employer1",JSON.stringify([employer1]));
	window.localStorage.setItem("employer2",JSON.stringify([employer2]));
	/*stocage des objets depenses*/
	window.localStorage.setItem("depense1",JSON.stringify([depense1]));
	window.localStorage.setItem("depense2",JSON.stringify([depense2]));
	window.localStorage.setItem("depense3",JSON.stringify([depense3]));

	/*stocage des objets magasins, si on a pas deja une liste dans le localstorage */
	if(window.localStorage.getItem("magasin") === null){
		window.localStorage.setItem("magasin",JSON.stringify([magasin]));
	}


	window.localStorage.setItem("connexion1",JSON.stringify([connexion1]));

	window.localStorage.setItem("listeEmployer",JSON.stringify([listeEmployer]));

	// quand tout est bon on affiche les magasins
	let mesMagasins = JSON.parse(window.localStorage.getItem("magasin"))
	for(let m of mesMagasins){
		let div = document.createElement("div");
		div.innerHTML = m.nomMagasin + "<br>" + m.adresseMagasin + "<br>" + m.idMagasin
		div.id = m.idMagasin
		div.style.border = "2px solid black"
		div.style.marginTop = "5px"
		div.style.cursor = "pointer"
		div.onclick = function (){
			alert(div.id)
		}
		let sectionMesMagasins = document.getElementById("sectionMesMagasins")
		sectionMesMagasins.appendChild(div)
	}
}



// on charge tous les m
function loadMagasin() {
    let magasins = JSON.parse(window.localStorage.getItem("magasin"));
    let ids = magasins.map(m => m.idMagasin);

    let select = document.getElementById('idMagasin');
    ids.forEach((id) => {
        let opt = document.createElement('option');
        opt.appendChild( document.createTextNode(`Magasin ${id}`));
        opt.value = id;
        select.appendChild(opt); 
    });
}

/* sert à passer à la cacher une page pour en afficher une autre*/

function hide(id,id2){
  var div=document.getElementById(id);
  var div2=document.getElementById(id2);
  if (div.style.display!=='none'){
    div.style.display='none';
   div2.style.display='block'}
}

/* permet la redirection des pages contenu dans l'iframe*/
function refreshIframe(id) {
    let contenuIFrame = document.getElementById("contenu");
    if (contenuIFrame) {

        switch (id) {
            case 'p_vente':
                contenuIFrame.src = 'p_vente.html';
                break;
            case 'Produit':
               contenuIFrame.src = 'gestionProduits.html';
               break;
            case 'employer':
                contenuIFrame.src = 'employer.html';
                break;
            case 'dépenses' :
                contenuIFrame.src = 'depense.html';
                break;
            case 'vente':
                contenuIFrame.src ='vente.html';
                break;
        }
    }
}


/* cette fonction permet de verifier si la personne connecter est bien dans l'objet des personne autoriser à se connecter*/
function verfication(){
const mail = document.getElementById("mail");
const recupMail = mail.value; 
const motdepasse= document.getElementById("mdp");
const recupMdp = motdepasse.value;

alert("vous avez entrez le mail:");
alert(mail.value);
alert("vous avez entrez le maot de passe:");
alert(motdepasse.value);
	const objectConnexion1 = JSON.parse(window.localStorage.getItem("connexion1"));
	const mailConnexion1 = objectConnexion1.map(m => m.mail);

	alert(mailConnexion1);
	const mdpConnexion1 = objectConnexion1.map(m => m.mdp);
	alert(mailConnexion1);
	
	if (recupMail == mailConnexion1 && recupMdp == mdpConnexion1){
		alert("bravo votre motre mail et votre mots de passe est correct");
		var from = document.getElementById(myForm);
		myForm.action='menu_admin.html';
		alert(myForm.action);
		window.localStorage.setItem("nomObjectConnexionPersonnConnecter","connexion1");
	}else{
		alert("votre identifiant et votre mot de pase ne sont pas correct vous serez rediriger vers la page d'acceuil");
		var from = document.getElementById(myForm);
		myForm.action='../index.html';
		alert(myForm.action);
	}}

/*fonction qui permet de saluer l'utilisateur connecter*/
function bonjour(){
	let salutation = document.getElementById("bonjour");
	let nom=document.createTextNode("sarah");
	salutation.appendChild(nom);
}

/* fonction qui actualise le magasin de la personne connecter*/

function magasinCourant(){
	let objectConnexion1= JSON.parse(window.localStorage.getItem("connexion1"));
	let idEmployerConnecter = objectConnexion1.map(m => m.idEmployer);
	let magasinCourant= objectConnexion1.map(m => m.magasinTravail);

		let affMagasinCourant = document.getElementById("magasin");
		let numMagasinCourant=document.createTextNode(magasinCourant.toString());
		affMagasinCourant.appendChild(numMagasinCourant);
}

// fonction qui affiche la section des magasins
function showMagasin(){
	let isHidden = document.getElementById("sectionMagasin").style.display;
	if(isHidden == "none"){
		document.getElementById("sectionMagasin").style.display = "block"
	}else{
		document.getElementById("sectionMagasin").style.display = "none"
	}
}

// fonction pour ajouter un magasin
function ajouterMagasin(){
	let idMagasin = document.getElementById("idMagasin").value;
	let nomMagasin = document.getElementById("nomMagasin").value;
	let adresseMagasin = document.getElementById("adresseMagasin").value;
	let newMagasin = {
		idMagasin: idMagasin,
		nomMagasin: nomMagasin,
		adresseMagasin: adresseMagasin
	}

	let tousMagasins = JSON.parse(window.localStorage.getItem("magasin"))
	tousMagasins.push(newMagasin)
	window.localStorage.setItem("magasin", JSON.stringify(tousMagasins))

}

// fonction qui affiche la section des Produits
function showProduit(){
	let isHidden = document.getElementById("sectionProduit").style.display;
	if(isHidden == "none"){
		document.getElementById("sectionProduit").style.display = "block"
	}else{
		document.getElementById("sectionProduit").style.display = "none"
	}
}

// fonction pour ajouter un Produit
function ajouterProduit(){
	let idProduit = document.getElementById("idProduit").value;
	let nomProduit = document.getElementById("nomProduit").value;
	let adresseProduit = document.getElementById("adresseProduit").value;
	let newProduit = {
		idProduit: idProduit,
		nomProduit: nomProduit,
	}

	let tousProduits = JSON.parse(window.localStorage.getItem("magasin"))[0].listeIdProduit;
	alert(tousProduits);
	tousProduits.push(newProduit);
	window.localStorage.setItem("magasin", JSON.stringify(tousProduits));

}


function produitCourant(){
	let objectConnexion1= JSON.parse(window.localStorage.getItem("connexion1"));
	let idEmployerConnecter = objectConnexion1.map(m => m.idEmployer);

	let magasinObject= JSON.parse(window.localStorage.getItem("magasin"));
	let listeObjectProduit = magasinObject.map(m => m.listeIdProduit);

	nombreProduit = listeObjectProduit.values;
	alert(nombreProduit);


}

function affnombreEmployer(){
	let liste = JSON.parse(window.localStorage.getItem("listeEmployer"));
	nombreEmployer = liste.length +1;
	let salarier = document.getElementById("salarier");
	let nombre = document.createTextNode(nombreEmployer);
	salarier.appendChild(nombre);
}



/*liste des fonctions qui permettent de gerer l'auto complétion de l'iframe*/ 

function calculPrix(){
	let valQuantités = document.getElementById("quantités");
	let prix =document.getElementById("prix");
	 valQuantités = parseInt(valQuantités.value);
	 prix = parseInt(prix.value);
	 let somme= valQuantités * prix ;
	 total = document.getElementById("total");
	 total.value = somme;
}

/* cette fonction permet qu'une fois reseigner l'id du magasin on a la liste de tout les produits 
et une fois un produit selevtionner tout le formulaire s'auto complete*/
function AutoCompletionVente(){
	
/*cette partie de la fonction recuppere les differents produits et les affiches 
avec des select*/
	let listeNomProd = JSON.parse(window.localStorage.getItem("magasin"))[0].listeIdProduit;

	let selectProduits = document.getElementById("nomProduit")
	for (let i=0 ; i<listeNomProd.length ; i++){

		let idProduit = listeNomProd[i].idProduit;
		let nomProduit = listeNomProd[i].NomProduit;
		let prix = listeNomProd[i].prix;

		let option = document.createElement("option");
		option.id= idProduit
		option.value = idProduit
		option.innerHTML = nomProduit + " ("+prix+"€)"
		selectProduits.appendChild(option);
		
	}
	AutoCompetionInfoProduit()
}


/* cette partie de la fonction a partir du nom de produit seletionner
par l'utilisateur  renseigne le pix et la quantitié max a ne pas dépasser */
function AutoCompetionInfoProduit(){

	let listeNomProd = recuplistNomProduit();
	let listeQuantitésProd = recuplistQuantitésProduit();
	valueProduitSelectioner= document.getElementById("Option");
 	for (let i=0 ; i<listeNomProd.length ; i++){
 		if (valueProduitSelectioner == listeNomProd[i]){
 			quantités = document.getElementById("quantités");
 			quantités.max = listeQuantitésProd[i];
 		}
}

}


/* une fonction qui recupere les object qui
 contiennent les information de tout les produit et renvoie une liste des noms de produits*/
function recuplistNomProduit(){
	let produit1 = JSON.parse(window.localStorage.getItem("produit1"));
	let produit2 = JSON.parse(window.localStorage.getItem("produit2"));
	let produit3 = JSON.parse(window.localStorage.getItem("produit3"));
	let produit4 = JSON.parse(window.localStorage.getItem("produit4"));
	let produit5 = JSON.parse(window.localStorage.getItem("produit5"));


	let nomProduit1 = produit1.map(m => m.NomProduit);
	let nomProduit2 = produit2.map(m => m.NomProduit);
	let nomProduit3 = produit3.map(m => m.NomProduit);
	let nomProduit4 = produit4.map(m => m.NomProduit);
	let nomProduit5 = produit5.map(m => m.NomProduit);

	var listeNomProd = [nomProduit1,nomProduit2,nomProduit3,nomProduit4,nomProduit5];
 return(listeNomProd);
}

/* une fonction qui recupere les object qui
 contiennent les informations de tout les produit et renvoie la liste de la quantité des produquantité*/
function recuplistQuantitésProduit(){
	let produit1 = JSON.parse(window.localStorage.getItem("produit1"));
	let produit2 = JSON.parse(window.localStorage.getItem("produit2"));
	let produit3 = JSON.parse(window.localStorage.getItem("produit3"));
	let produit4 = JSON.parse(window.localStorage.getItem("produit4"));
	let produit5 = JSON.parse(window.localStorage.getItem("produit5"));


	let quantitéProduit1 = produit1.map(m => m.quantité);
	let quantitéProduit2 = produit2.map(m => m.quantité);
	let quantitéProduit3 = produit3.map(m => m.quantité);
	let quantitéProduit4 = produit4.map(m => m.quantité);
	let quantitéProduit5 = produit5.map(m => m.quantité);

	var listeQuantitésProd = [quantitéProduit1,quantitéProduit2,quantitéProduit3,quantitéProduit4,quantitéProduit5];
 return(listeQuantitésProd);
}

function recuplistPrixProduit(){
	let produit1 = JSON.parse(window.localStorage.getItem("produit1"));
	let produit2 = JSON.parse(window.localStorage.getItem("produit2"));
	let produit3 = JSON.parse(window.localStorage.getItem("produit3"));
	let produit4 = JSON.parse(window.localStorage.getItem("produit4"));
	let produit5 = JSON.parse(window.localStorage.getItem("produit5"));


	let prixProduit1 = produit1.map(m => m.NomProduit);
	let prixProduit2 = produit2.map(m => m.NomProduit);
	let prixProduit3 = produit3.map(m => m.NomProduit);
	let prixProduit4 = produit4.map(m => m.NomProduit);
	let prixProduit5 = produit5.map(m => m.NomProduit);

	var listePrixProd = [prixProduit1,prixProduit2,prixProduit3,prixProduit4,prixProduit5];
 return(listePrixProd);
}

/*ci dessous les fonctions qui permettent le fonctionnement de la page produit */


/* une fonction qui reccupere le contenu du formulaire ajouter produit et permet d'afficher un message de comfirmation de l'ajout*/
function getForm (){
	let valeurDate = document.getElementById("date");
	let valeurNumProd = document.getElementById("numProd");
	let valeurNomProd = document.getElementById("nomProd");
	let valeurPrixProd = document.getElementById("prixProd");
	let valeurQuantitéProd = document.getElementById("quantité");
	let resultatAction = document.getElementById("resultatAction");

	var getFormId= [valeurDate.id,valeurNumProd.id,valeurNomProd.id,valeurPrixProd.id,valeurQuantitéProd.id];
	var getForm =[valeurDate.value, valeurNumProd.value,valeurNomProd.value,valeurPrixProd.value,valeurQuantitéProd.value];
	for (let i=0; i < getForm.length ; i++) {

		let affichage = document.createTextNode(getForm[i]);
		let affichage1 = document.createTextNode(getFormId[i]);
		let espace =document.createTextNode(" ");
		let td = document.createElement("td");
		td.appendChild(affichage1);
		td.appendChild(espace);
		td.appendChild(affichage);
		resultatAction.appendChild(td);
	}

};

/* fonction qui permet d'ajouter un nouvelle employer*/
function getFormEmployer (){
	let numEmployer = document.getElementById("numEmployer");
	let nomEmployer = document.getElementById("nomEmployer");
	let adresse = document.getElementById("adessEmployer");
	let poste = document.getElementById("posteEmployer");
	let salaire = document.getElementById("salaireEmployer");
	let resultatAction= document.getElementById("resultatAction");

    /* */
	var getFormEmployerId= [numEmployer.id,nomEmployer.id,adresse.id,poste.id,salaire.id];
	var getFormEmployer =[numEmployer.value, nomEmployer.value,adresse.value,poste.value,salaire.value];
	for (let i=0; i < getFormEmployer.length ; i++) {

		let affichage = document.createTextNode(getFormEmployer[i]);
		let affichage1 = document.createTextNode(getFormEmployerId[i]);
		let espace =document.createTextNode(" ");
		let p = document.createElement("p");
		p.appendChild(affichage1);
		alert(affichage);
		p.appendChild(espace);
		p.appendChild(affichage);
		resultatAction.appendChild(p);
	}

};


/* perment de recuper l'id du magasin */
function Magasin(){
	let magasinObject= JSON.parse(window.localStorage.getItem("magasin"));
	let idMagasin = magasinObject.map(m => m.idMagasin);
	idMagasin = document.createTextNode(idMagasin);
	let option = document.createElement("option");
	option.appendChild(idMagasin);
	document.getElementById("idMagasin").appendChild(option);
}

/*fonction qui reccupèrre le contenu d'un formulaire de contact et affiche le message a bien été envoyer*/
function getFormContact(){
	let nom = document.getElementById("nom");
	let prenom = document.getElementById("prenom");
	let message = document.getElementById("message");
	let resultatAction= document.getElementById("resultatAction");

    /* */
	var getFormContactId= [nom.id,prenom.id,message.id];
	var getFormContact =[nom.value, prenom.value,message.value];
	for (let i=0; i < getFormContact.length  ; i++) {

		let affichage = document.createTextNode(getFormContact[i]);
		let affichage1 = document.createTextNode(getFormContactId[i]);
		let espace =document.createTextNode(" ");
		let p = document.createElement("p");
		p.appendChild(affichage1);
		p.appendChild(espace);
		p.appendChild(affichage);
		resultatAction.appendChild(p);
	}

};

/*fonction qui permet de reccuperer le contenu du formulaire depense, affiche un recapitulatif */
function getFormDepense(){
	let idDepense = document.getElementById("idDepense");
	let nomDepense = document.getElementById("nomDepense");
	let momtant = document.getElementById("momtant");
	let nature = document.getElementById("nature");
	let resultatAction= document.getElementById("resultatAction");

	    /* */
	var getFormDepenseId= [idDepense.id,nomDepense.id,momtant.id,nature.id];
	var getFormDepense =[idDepense.value,nomDepense.value,momtant.value,nature.name];
	for (let i=0; i < getFormDepense.length  ; i++) {

		let affichage = document.createTextNode(getFormDepense[i]);
		let affichage1 = document.createTextNode(getFormDepenseId[i]);
		let espace =document.createTextNode(" ");
		let p = document.createElement("p");
		p.appendChild(affichage1);
		p.appendChild(espace);
		p.appendChild(affichage);
		resultatAction.appendChild(p);
	}

}

/* fonction qui gerer la modification des informations sur un employer */

function modInfoEmployer(){
	
}
