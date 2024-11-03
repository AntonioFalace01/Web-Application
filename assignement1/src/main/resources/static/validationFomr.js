console.log('HELLO JS');

function validateForm() {
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let email = document.getElementById("email").value;

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (nome === "" || nome.contains("1","2","3","4","5","6","7","8","9","0")) {
        alert("Il campo Nome è obbligatorio o deve essere scritto senza numeri");
        return false;
    }

    if (cognome === "" || nome.contains("1","2","3","4","5","6","7","8","9","0")) {
        alert("Il campo Cognome è obbligatorio o deve essere scritto senza numeri");
        return false;
    }

    if (email === "") {
        alert("Il campo Email è obbligatorio");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Inserisci un indirizzo email valido");
        return false;
    }


    alert("ORA SEI UN NERAZZURRO, BENVENUTO!");
    return true;
}