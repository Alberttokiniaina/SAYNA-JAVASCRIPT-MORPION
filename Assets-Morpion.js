(function() {

    // Récupération des cases à clicker
    const items = document.querySelectorAll('grid-item');
    items = Array.from(items)

    let currentPlayer = "X"

    let winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    function checkForWinner(){
        winningCombinations.forEach(function(combination){
            let check = combination.every(idx => items[idx].innerText.trim() == currentPlayer)
            if(check){
                highlightItems(combination)
            }
        })
    }

    items.forEach(function(items)){
        items.addEventListener('click', function()){
            if(items.innerText.trim() != "") return
            items.innerText = currentPlayer
            checkForWinner()
        }
    }

    function choiseCase(id) {

    }

    // Vide le contenu de toute les cases
    function rest() {
        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
            items[i].textContent = ''
        }
    }

})();
