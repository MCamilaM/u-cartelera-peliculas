const movies = [
    { id: 1, name: 'Ballena', year: 2018, category: ['drama', ' terror'], score: '1.0', image: 'img/ballena.png' },
    { id: 1, name: 'super man', year: 2023, category: ['drama', 'otra'], score: '8.0', image: 'img/ballena.png' },
    { id: 1, name: 'hormiga', year: 2017, category: ['drama', 'otra'], score: '2.0', image: 'img/ballena.png' },
    { id: 1, name: 'Ballena', year: 2021, category: ['drama', 'otra'], score: '8.0', image: 'img/ballena.png' },
    { id: 1, name: 'Ballena', year: 2023, category: ['drama', 'otra'], score: '3.0', image: 'img/ballena.png' },
    { id: 1, name: 'Ballena', year: 2019, category: ['drama', 'otra'], score: '9.0', image: 'img/ballena.png' },
    { id: 1, name: 'Ballena', year: 2022, category: ['drama', 'otra'], score: '8.0', image: 'img/ballena.png' },
    { id: 1, name: 'Ballena', year: 2023, category: ['drama', 'otra'], score: '5.0', image: 'img/ballena.png' }
]

const boxSearch = document.querySelector('#box-search');
const buttonSearch = document.querySelector('#button-search');
const resultSearch = document.querySelector('#movie-catalog');

const filter = () => {

    resultSearch.innerHTML = '';

    const textToSearch = boxSearch.value.toLowerCase();
    for (let movie of movies) {
        let name = movie.name.toLowerCase();
        if (name.indexOf(textToSearch) !== -1) {
            // altGr + } (dos veces) para hacer backticks
            resultSearch.innerHTML += `
 
                <div class="card" style="width: 18rem;">
                    <img src="${movie.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${movie.name}</h5>
                        <p class="card-text">Calificación: ${movie.score}</p>
                        <p class="card-text" style="font-size:30px">Lanzamiento: ${movie.year}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">${movie.category}</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Ver detalle</a>
                    </div>
                </div>
            `

        }
    }
}

boxSearch.addEventListener('keyup', filter)

filter()