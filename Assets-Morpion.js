(function() {

    // Récupération des cases à clicker
    const items = document.getElementsByClassName('grid-item');

    function choiseCase(id) {
        switch (id) {
            case 'item0':
                document.getElementById(id).innerHTML='X';
                break;
            case 'item1':
                document.getElementById(id).innerHTML='X';
                break;
            case 'item2':
                document.getElementById(id).innerHTML='X';
                break;  
            case 'item3':
                document.getElementById(id).innerHTML='X';
                break;
            case 'item4':
                document.getElementById(id).innerHTML='X';
                break;
            case 'item5':
                document.getElementById(id).innerHTML='X';
                break;
            case 'item6':
                document.getElementById(id).innerHTML='X';
                break;
            case 'item7':
                document.getElementById(id).innerHTML='X';
                break;
            case 'item8':
                document.getElementById(id).innerHTML='X';
                break;
     
            default:
                console.log('Mauvais choix');
        } /*fin switch*/
     
        adversaire(this.id); 
    
    }

    // Vide le contenu de toute les cases
    function rest() {
        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
            items[i].textContent = ''
        }
    }

})();


    
 
 
/* Fonction selection de case Adversaire*/
function adversaire(id) {
    var bool = true;
    var tableau = [];
    tableau.push(id);
 
    while (bool == true) {
        var nb = Math.floor(Math.random() * 9);
        var caseAdversaire = 'case'+nb;
 
        for(var indice in tableau) {
            if (caseAdversaire != tableau[indice]) {
                document.getElementById(caseAdversaire).innerHTML='O';
                bool = false;	
            }
        }
    }
    tableau.push(caseAdversaire);
}

var tableau = [];
 
const limiteBoucle = 10;
 
 
function adversaire(id) {
 
    var bool = true;
    var compteur = 0;
 
    tableau.push(id);
 
    while (bool == true && compteur < limiteBoucle) {
 
    	compteur++;
 
        var nb = Math.floor(Math.random() * 9);
 
        var caseAdversaire = 'case'+nb;
 
        if (-1 === tableau.indexOf(caseAdversaire)) {
        	document.getElementById(caseAdversaire).innerHTML = 'O';
        	bool = false;
        }
 
    }
 
    if (limiteBoucle === compteur) {
    	console.log("fin de la partie");
    } else {
    	tableau.push(caseAdversaire);
    }
 
}