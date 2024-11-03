document.getElementById("removeGiocatoreButton").addEventListener("click", function() {
    document.getElementById("vendiGiocatore").style.display = "block";
    document.getElementById("Giocatore").style.display = "none";
});

function vendiGiocatoreNome(event) {
    event.preventDefault();
    const playerName = (document.getElementById("nomeGiocatore1").value);
    const rows =document.getElementById('rosa').querySelectorAll('tr');

    for(i=1; i<rows.length;i++){
        if(rows[i].cells[0].innerText===playerName){
            rows[i].remove();
            document.getElementById("Giocatore").style.display = "none";
            document.getElementById("vendiGiocatore").reset();
        }


    }
}

