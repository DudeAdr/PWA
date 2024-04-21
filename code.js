function writeDown(){
    fetch('./cars/carsinfo.json')
    .then(response => response.json())
    .then(data => {

        let htmlCars = document.getElementById('cars');
        const cars = data.Cars;

        cars.forEach(car => { 
            htmlCars.innerHTML += `
            <div class="post">
            <a href="${car.GoTo}">
                <img src="${car.ImagePath}">
                <h2>${car.Name}</h2>
                <hr></hr>
                <p>${car.Description}</p>
            </a>
            </div>`;  
        });
    })
    .catch(error => {
        console.error('Wystąpił błąd podczas wczytywania pliku JSON:', error);
    });
}

writeDown();


var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(form);

    var name = formData.get('name');
    var email = formData.get('email');
    var message = formData.get('message');

    console.log('Imię i nazwisko:', name);
    console.log('Adres e-mail:', email);
    console.log('Wiadomość:', message);
});