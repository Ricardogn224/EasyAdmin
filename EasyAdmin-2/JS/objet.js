



let connexion = {
    id_connexion: 1,
    mail: "abra@gmail.com",
    nom: "Abraham",
    Prenom: "Ricardo",
    Id_lot_magasin: [],
    Id_lot_employer: [],
    Poste: "Admin"
};

let employer = {
    Id_employer: 1,
    Nom: "Hernandez",
    Prenom: "Abraham",
    Magasin_ratacher: [],
    Poste: "?"
};


let Magasin = {
    id_Magasin: 1,
    liste_id_produits: [],
    liste_id_employer: [],
    liste_id_dépense: [],
    liste_id_vente: []
};

let produit = {
    id_produit: 1,
    Nom: "nom_produit",
    descriptions: "descriptions",
    quantité: 40,
    prix: 2
};

let prod_mag = {
    id_Magasin: 1,
    id_produit: 1,
    quantité: 40
};

let vente = {
    id_vente: 1,
    id_Magasin: 1,
    nom_produit: "aspirine",
    quantité: 10,
    prix_unitaire: 5,
    total: 50
};

// function vente() {
//     let new_vente = new vente();
//     var new_vente = document.forms["vente"]["nom_Produits"].value;
//     if (x === "") {
//         alert("Name must be filled out");
//         return false;
//     }
// }







////

let aspirine = {
    id_produit: 1,
    Nom: "aspirine",
    descriptions: "medoc",
    quantité: 40,
    prix: 2
};

let ricardo = {
    Id_employer: 1,
    Nom: "Hernandez",
    Prenom: "Abraham",
    Poste: "?"
};



let magasin = {
    id_Magasin: 1,
    produits: [aspirine],
    employees: [ricardo],
    depenses: []
};



let achatAspirine = {
    id_vente: 1,
    id_Magasin: magasin.id_Magasin,
    id_Employer: ricardo.Id_employer,
    nom_produit: aspirine.Nom,
    quantité: 10,
    prix_unitaire: 5,
    total: 50
};



function addPointDeVente(produit) {
    window.localStorage.setItem("PointDeVentes", JSON.stringify([magasin]));
}

function addVente(vente) {
    let magasins = JSON.parse(window.localStorage.getItem("PointDeVentes"));
    magasins = magasins.map((m) => {
        if (m.id_Magasin === vente.id_Magasin) {
            m.produits = m.produits.map((produit) => {
                if (m.id_produit === vente.id_produit) {    
                    produit.quantité -= vente.quantité;
                }
                return produit
            });
        }
        return m
    });

    window.localStorage.setItem("PointDeVentes", JSON.stringify(magasins));


    let ventes = JSON.parse(window.localStorage.getItem("ventes"));
    if (ventes)
        ventes.push(vente)
    else
        ventes = [vente];
    window.localStorage.setItem("ventes", JSON.stringify(ventes));
}

function getVenteObjet() {
    let id = document.getElementById("id_magasin");
    if (id){
       // console.log(id.value)

         return  {
            id_vente: 1,
            id_Magasin: 1,
            nom_produit: "aspirine",
            quantité: 10,
            prix_unitaire: 5,
            total: 50
        };
    }
}

function SubmitVenteForm() {
    let vente = getVenteObjet();
  
    let ventes = JSON.parse(window.localStorage.getItem("ventes")) ||[];
    ventes.push(vente)

    window.localStorage.setItem("ventes", JSON.stringify(ventes))
 ///  console.log(JSON.parse(window.localStorage.getItem("ventes")).length)// taille liste des ventes
}

function loadPointDeVente() {
    let magasins = JSON.parse(window.localStorage.getItem("PointDeVentes"));
    let ids = magasins.map(m => m.id_Magasin)

    let select = document.getElementById('id_magasin');
    ids.forEach((id) => {
        let opt = document.createElement('option');
        opt.appendChild( document.createTextNode(`Magasin ${id}`));
        opt.value = id;
        select.appendChild(opt); 
    });
}
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


function RedirectionJavascript(){
  document.location.href="menu_admin.html"; 
}


addPointDeVente(magasin);
addVente(achatAspirine);
getVenteObjet();

/*
console.log(window.localStorage.getItem("ventes"));
console.log(window.localStorage.getItem("PointDeVentes"));
*/
