const endpoint ="https://lanciweb.github.io/demo/api/pictures/"
const rowEl = document.querySelector(".row");


fetch(endpoint)
    .then(response => response.json())
    .then(photos => {
        //codice per far qualcosa con la risposta
        console.log(photos);
        photos.forEach(photo => {
            const { title, url, date } = photo;
            console.log(title, url, date);
            rowEl.innerHTML += `
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
                <div class="card">
                    <img class="pin" src="/img/pin.svg" alt="un semplice pin">
                    <img src="${url}" class="p-2 " alt="${title}">
                    <div class="card-body">
                        <p class="card-text">
                        ${date}<br>
                        <strong>${title}</strong>
                        </p>
                    </div>
                </div>
            </div>`;
            })
        })
        
    .catch(error => {
        console.error(error)})
