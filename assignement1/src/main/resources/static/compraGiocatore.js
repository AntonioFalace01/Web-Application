console.log('HELLO JS');

document.getElementById("compraGiocatoreButton").addEventListener("click", function() {
    document.getElementById("Giocatore").style.display = "block";
    document.getElementById("vendiGiocatore").style.display = "none";
});

document.getElementById("nuovoGiocatore").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("nomeGiocatore").value;
    const team = document.getElementById("squadra").value;
    const costo = document.getElementById("prezzoGiocatore").value;
    const tableBody = document.getElementById("rosa").getElementsByTagName('tbody')[0];

    addNewRowV1(tableBody , name , team , costo);

    document.getElementById("Giocatore").style.display = "none";
    document.getElementById("nuovoGiocatore").reset();

});


function addNewRowV1(tableBody , name, team, costo){

    const newRowHTML = `
        <tr>
            <td>${name}</td>
            <td>${team}</td>
            <td>${costo}</td>
        </tr>
    `;

    tableBody.innerHTML += newRowHTML;
    console.log('Adding new Row , with method 1');
}

