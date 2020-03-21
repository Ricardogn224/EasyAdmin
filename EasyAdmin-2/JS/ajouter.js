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

let listeDepense=[depense1 ,depense2,depense3];



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
	
}





function ajouterEmployer(){
	let idEmployer = document.getElementById("idEmployer").value;
	let nomEmployer = document.getElementById("nomEmployer").value;
	let adresseEmployer = document.getElementById("AdresseEmployer").value;
	let poste = document.getElementById("poste").value;
	let salaire = document.getElementById("salaire").value;
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

	document.getElementById("idEmployer").value;
	document.getElementById("nomEmployer").value;
	document.getElementById("AdresseEmployer").value;
	document.getElementById("poste").value;
	document.getElementById("salaire").value;

}

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
	window.localStorage.setItem("listeProduit", JSON.stringify(tousProduits));
	
	document.getElementById("idProduit").value =" ";
	document.getElementById("nomProduit").value=" ";
	document.getElementById("quantitéProduit").value=" ";
	document.getElementById("prixAchatProduit").value=" ";
	document.getElementById("prixVenteProduit").value=" ";
	document.getElementById("description").value=" ";
}
function ajouterDepense(){
	let idProduit = document.getElementById("idDepense").value;
	let nomProduit = document.getElementById("nomDepense").value;
	let montant = document.getElementById("momtant").value;
	let Nature = document.getElementById("nature").value;

	let newDepense = {
		idDepense: idDepense,
		nommenclature: nomDepense,
		Montant: montant,
		Nature: nature,
	
	}

	let tousDepenses = JSON.parse(window.localStorage.getItem("listeDepense"));
	tousDepenses[0].push(newDepense);
	window.localStorage.setItem("listeDepense", JSON.stringify(tousDepenses));
	
	document.getElementById("idDepense").value;
	document.getElementById("nomDepense").value;
	document.getElementById("montant").value;
	document.getElementById("nature").value;
}
