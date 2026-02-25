const endpoint ="https://lanciweb.github.io/demo/api/pictures/"

fetch(endpoint)
    .then(response => response.json())
    .then(data => {
        //codice per far qualcosa con la risposta
        console.log(data);
    })
    .catch(error => {
        //codice per far qualcosa in caso di errore
        console.log(error);
    })



