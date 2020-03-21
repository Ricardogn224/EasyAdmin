function setDate(){
	let date ="12/01/12";
	return date;
}
/* ici la listes des produits disponnible de l'entreprise*/
let produit1 = {
	idProduit:1,
	nomProduit:"parecetamol",
	quantité:20,
	prix:2,
	description:"medicament",
	prixAchatProd:2,
};

let produit2 = {
	idProduit:2,
	nomProduit:"aspirine",
	quantité:20,
	prix:8,
	description:"medicament",
	prixAchatProd:2,

};

let produit3 = {
	idProduit:3,
	nomProduit:"C100 cendox",
	quantité:20,
	prix:10,
	description:"medicament",
	prixAchatProd:2,

};

let produit4 = {
	idProduit:4,
	nomProduit:"cipanemol",
	quantité:20,
	prix:8,
	description:"medicament",
	prixAchatProd:2,

};

let produit5 = {
	idProduit:5,
	nomProduit:"dodonol",
	quantité:20,
	prix:25,
	description:"medicament",
	prixAchatProd:2,

};
let listeProduit=[produit1,produit2,produit3,produit4,produit5];

let vente1 ={
	quantitéVendu:6,
	prixVendu:4,
	idVente:1,
	idProduit:2,
	nomProduit: produit1.nomProduit,
	date:setDate(),
};
let vente2 ={
	quantitéVendu:6,
	prixVendu:4,
	idVente:2,
	idProduit:2,
	nomProduit: produit2.nomProduit,
	date:setDate(),
};
let vente3 ={
	quantitéVendu:6,
	prixVendu:4,
	idVente:3,
	idProduit:2,
	nomProduit: produit4.nomProduit,
	date:setDate(),
};
let vente4={
	quantitéVendu:6,
	prixVendu:4,
	idVente:4,
	idProduit:2,
	nomProduit: produit5.nomProduit,
	date:setDate(),
};
let vente5 ={
	quantitéVendu:6,
	prixVendu:4,
	idVente:5,
	idProduit:2,
	nomProduit: produit5.nomProduit,
	date:setDate(),
};
let vente6 ={
	quantitéVendu:6,
	prixVendu:4,
	idVente:6,
	idProduit:2,
	nomProduit: produit3.nomProduit,
	date:setDate(),
};

let listeVente=[vente1,vente2,vente3,vente4,vente5,vente6];
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
let listeEmployer=[employer1,employer2];

let depense1 ={
	idDepense:1,
	nommenclature:"loyer",
	Montant:3000,
	Nature:"réccurentes",

}

let depense2 ={
	idDepense:2,
	nommenclature:"charge social",
	Montant:3000,
	Nature:"réccurentes",
};

let depense3 ={
	idDepense:3,
	nommenclature:"charge salariale",
	Montant:3000,
	Nature:"réccurentes",
};

let listeDepense=[depense1,depense2,depense3];
/* ici la liste des magasins qui utilise notre applications*/
let magasin = {
idMagasin: 1,
nomMagasin: "Pharmacie",
adresseMagasin: "10 victor Hugo Paris 9"
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
/* */
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
	window.localStorage.setItem("listeDepense", JSON.stringify([listeDepense]));
	window.localStorage.setItem("connexion1",JSON.stringify([connexion1]));


	let listeProduit = JSON.parse(window.localStorage.getItem("listeProduit"));
	let listeVente= JSON.parse(window.localStorage.getItem("listeVente"))
	if (listeProduit){
		listeProduit = listeProduit;
	}else{window.localStorage.setItem("listeProduit", JSON.stringify(listeProduit))}
	if (listeVente){
		listeVente = listeVente;
	}else{window.localStorage.setItem("listeVente", JSON.stringify(listeVente))}
	
	if (listeEmployer){
		listeEmployer = listeEmployer;
	}else{window.localStorage.setItem("listeEmployer", JSON.stringify(listeEmployer))}
	
	// quand tout est bon on affiche les produits
	let listeNomProduit = JSON.parse(window.localStorage.getItem("listeProduit"));

	for(let i =0; i < listeNomProduit[0].length; i++){
		let div = document.createElement("div");
		div.innerHTML = listeNomProduit[0][i].nomProduit;
		div.id =listeNomProduit[0][i].nomProduit;
		div.style.marginTop = "5px";
		div.style.cursor = "pointer";
		div.onclick = function (){
			alert(div.value)
		}
		let sectionMesProduits = document.getElementById("sectionMesProduits")
		sectionMesProduits.appendChild(div)
	}


	// quand tout est bon on affiche les Employers
	let listeNomEmployer = JSON.parse(window.localStorage.getItem("listeEmployer"));
	for(let i =0; i < listeNomEmployer.length; i++){
		let div = document.createElement("div");
		div.innerHTML = listeNomEmployer[i].nomEmployer;
		div.id =listeNomEmployer[i].nomEmployer;
		div.style.marginTop = "5px";
		div.style.cursor = "pointer";
		let sectionMesEmployers = document.getElementById("sectionMesEmployers")
		sectionMesEmployers.appendChild(div)
	}
}

/*function rechargerProduits(){
	let selectedIndex = document.getElementById("choisirMagasin2").selectedIndex;
	let idMagasin = document.getElementById("choisirMagasin2").options[selectedIndex].value;

	let magasin = JSON.parse(window.localStorage.getItem("magasin"))
	if(magasin){
		try{
			let produits = magasin.filter(m=>m.idMagasin == idMagasin)[0].listeIdProduit;
			for(let i =0; i < produits.length; i++){
				let div = document.createElement("div");
				div.innerHTML = produits[i].nomProduit;
				div.id =produits[i].nomProduit;
				div.style.border = "1px solid black";
				div.style.marginTop = "5px";
				div.style.cursor = "pointer";
				div.onclick = function (){
					alert(div.id)
				}
				let sectionMesProduits = document.getElementById("sectionMesProduits")
				sectionMesProduits.innerHTML = ""
				sectionMesProduits.appendChild(div)
			}
		}catch(err){
			alert("Pas de produits pour ce magasin pour l'instant")
		}

	}


}*/

/*function AutoCompleteMagasin2(){
	let listeMagasins = JSON.parse(window.localStorage.getItem("magasin"))
	let selectMagasin = document.getElementById("choisirMagasin2")
	if(listeMagasins){
		for (let i=0 ; i< listeMagasins.length; i++){

			let idMagasin = listeMagasins[i].idMagasin;
			let nomMagasin = listeMagasins[i].nomMagasin;

			let option = document.createElement("option");
			option.id= idMagasin;
			option.value = idMagasin;
			option.innerHTML = nomMagasin
			selectMagasin.appendChild(option);
		
		}
	}

} */

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
                contenuIFrame.src = 'gestionDepense.html';
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
	const objectConnexion1 = JSON.parse(window.localStorage.getItem("connexion1"));
	const mailConnexion1 = objectConnexion1.map(m => m.mail);

	const mdpConnexion1 = objectConnexion1.map(m => m.mdp);
	
	if (recupMail == mailConnexion1 && recupMdp == mdpConnexion1){
		var from = document.getElementById(myForm);
		myForm.action='menu_admin.html';
		window.localStorage.setItem("nomObjectConnexionPersonnConnecter","connexion1");
	}else{
		alert(" Mauvais identifiants ");
		var from = document.getElementById(myForm);
		myForm.action='../html/connexion.html';
	}
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
	let quantité = document.getElementById("quantitéProduit").value;
	let prixAchatProd = document.getElementById("prixAchatProduit").value;
	let prixVente =document.getElementById("prixVenteProduit").value;
	let description = document.getElementById("description").value;

	let newProduit = {
		idProduit: idProduit,
		nomProduit: nomProduit,
		quantité: quantité,
		prix: prixVente,
		description:description,
		prixAchatProd: prixAchatProd
	}

	let tousProduits = JSON.parse(window.localStorage.getItem("listeProduit"));
	tousProduits[0].push(newProduit);
	alert('bravo')
	window.localStorage.setItem("listeProduit", JSON.stringify(tousProduits));
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
	let listeNomProd = JSON.parse(window.localStorage.getItem("listeProduit"));

	let selectProduits = document.getElementById("nomProduit")
	for (let i=0 ; i< listeNomProd.length; i++){

		let idProduit = listeNomProd[0][i].idProduit;
		let nomProduit = listeNomProd[0][i].nomProduit;
		let prix = listeNomProd[0][i].prix;

		let option = document.createElement("option");
		option.id= idProduit;
		option.value = idProduit;
		option.innerHTML = nomProduit + " ("+prix+"€)"
		selectProduits.appendChild(option);
		
	}
}



function showEmployer(){
	let isHidden = document.getElementById("sectionEmployer").style.display;
	if(isHidden == "none"){
		document.getElementById("sectionEmployer").style.display = "block"
	}else{
		document.getElementById("sectionEmployer").style.display = "none"
	}
}

// fonction pour ajouter un magasin
function ajouterEmployer(){
	let idEmployer = document.getElementById("idEmployer").value;
	let nomEmployer = document.getElementById("nomEmployer").value;
	let adresseEmployer = document.getElementById("AdresseEmployer").value;
	let poste = document.getElementById("poste").value
	let salaire = document.getElementById("salaire").value
	let newEmployer = {
		idEmployer:idEmployer,
		nomEmployer: nomEmployer,
		adresseEmployer: adresseEmployer,
		poste : poste,
		salaire: salaire
	}

	let tousEmployer = JSON.parse(window.localStorage.getItem("listeEmployer"));
	tousEmployer.push(newEmployer);
	window.localStorage.setItem("listeEmployer", JSON.stringify(tousEmployer));

}


// fonction pour ajouter un magasin
function ajouterVente(){
	let date = document.getElementById("date").value;
	let selectedIndex = document.getElementById("nomProduit").selectedIndex;
	let idProduit = document.getElementById("nomProduit").options[selectedIndex].value;
	let quantitéVendu = document.getElementById("quantités").value
	let prixVendu = document.getElementById("prix").value
	let total = document.getElementById("total").value
	
	let newVente = {
	date: date,
	idProduit:idProduit,
	quantitéVendu:quantitéVendu,
	prixVendu: quantitéVendu,
	total:total,
	}

	let tousVente = JSON.parse(window.localStorage.getItem("listeVente"));
		tousVente.push(newVente)
		window.localStorage.setItem("listeVente", JSON.stringify(tousVente));
	
	
	document.getElementById("date").value = ""
	document.getElementById("quantités").value =""
	document.getElementById("prix").value = ""
	document.getElementById("total").value = ""
	
}



function recapvente(){
	// quand tout est bon on affiche toutes les vventes
	let listeNomVente = JSON.parse(window.localStorage.getItem("listeVente"));
	if(listeNomVente){
		let div = document.createElement("div");
		div.innerHTML = "<td>" + "Vente " + "</td> " + "<td>" + "IdProduit " + "</td>" + "<td>" + "Quantité " + "</td>" + "<td>" + "Prix " + "</td> " ;
		let sectionMesProduits = document.getElementById("sectionMesVentes");
		sectionMesProduits.appendChild(div);
		for(let i =0; i < listeNomVente.length; i++){
			let tr = document.createElement("tr");
			let idProduit = listeNomVente[i].idProduit;



			tr.innerHTML = i +" "+ idProduit +" " + listeNomVente[i].quantitéVendu +" "+listeNomVente[i].prixVendu+"€" ;
			tr.id =i;
			tr.style.border = "1px solid black";
			tr.style.marginTop = "5px";
			tr.style.cursor = "pointer";
			tr.onclick = function (){
				alert(tr.id)
			}
			let sectionMesVentes = document.getElementById("sectionMesVentes")
			sectionMesVentes.appendChild(tr)
		}
	}else{
		alert("pas de produit")
	}

}
 

function recapEmployer(){
	// quand tout est bon on affiche toutes les Employers
	let listeNomEmployer = JSON.parse(window.localStorage.getItem("listeEmployer"));
	let div = document.createElement("div");
		div.innerHTML = "<td>" + "ID " + "</td> " + "<td>" + "Prenom " + "</td>" + "<td>" + "adresse " + "</td>" + "<td>" + "Poste " + "</td> " ;
		let sectionMesEmployers = document.getElementById("sectionMesEmployers");
		sectionMesEmployers.appendChild(div);
	for(let i =0; i < listeNomEmployer.length; i++){
		let tr = document.createElement("tr");
		tr.innerHTML = i +" "+ listeNomEmployer[i].nomEmployer +" " + listeNomEmployer[i].adresseEmployer +" "+listeNomEmployer[i].poste ;
		tr.id =i;
		tr.style.marginTop = "5px";
		tr.style.cursor = "pointer";
		tr.onclick = function (){
			alert(tr.id)
		}
		let sectionMesEmployers = document.getElementById("sectionMesEmployers")
		sectionMesEmployers.appendChild(tr)
	}
}

function recapProduit(){
		// quand tout est bon on affiche les produits dans liste produits
	let listeNomProduit = JSON.parse(window.localStorage.getItem("listeProduit"));
	let div = document.createElement("div");
		div.innerHTML = "<td>" + "Produit " + "</td> " + "<td>" + "quantité" + " </td>" + "<td>" + " description " + "</td>"  ;
		let sectionMesProduits = document.getElementById("sectionMesProduits");
		sectionMesProduits.appendChild(div);
		;
	for(let i =0; i < listeNomProduit.length; i++){
		let div = document.createElement("div");
		div.innerHTML = "<td> " + listeNomProduit[i].nomProduit+ "</td> " + "<td> " + listeNomProduit[i].quantité + "</td>" + "<td> " + listeNomProduit[i].description +"</td>" ;
		div.id =listeNomProduit[i].nomProduit;
		div.style.marginTop = "5px";
		div.style.cursor = "pointer";
		div.onclick = function (){
			alert(div.id)
		}
		let sectionMesProduits = document.getElementById("sectionMesProduits")
		sectionMesProduits.appendChild(div)
	}

}


function recapDepense(){
		// quand tout est bon on affiche les produits dans liste produits
	let listeNomDepense = JSON.parse(window.localStorage.getItem("listeDepense"));
	let div = document.createElement("div");
		div.innerHTML = "<td>" + "ID" + "</td> " + "<td>" + "Nommenclature" + " </td>" + "<td>" + " Montant " + "</td>" + "<td>" + " Depense " + "</td>"  ;
		let sectionMesDepenses = document.getElementById("sectionMesdepenses");
		sectionMesDepenses.appendChild(div);
	for(let i =0; i < listeNomDepense[0].length; i++){
		let div = document.createElement("div");
		div.innerHTML = i +" "+ listeNomDepense[0][i].nommenclature+ " " + listeNomDepense[0][i].Montant + " "+ listeNomDepense[0][i].Nature;
		div.style.marginTop = "5px";
		div.style.cursor = "pointer";
		div.onclick = function (){
			alert(div.id)
		}
		let sectionMesDepenses = document.getElementById("sectionMesdepenses");
		sectionMesDepenses.appendChild(div)
	}
}








































