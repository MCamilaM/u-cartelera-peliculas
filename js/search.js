const movies = [
    { id: 1, name: 'Ballena', year: 2018, category: ['drama', ' terror'], score: '1.0', duration:'2h 50min', image: 'img/ballena.png', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.' },
    { id: 2, name: 'super man', year: 2023, category: ['drama', 'otra'], score: '8.0', duration:'2h 50min', image: 'img/ballena.png', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.' },
    { id: 3, name: 'hormiga', year: 2017, category: ['drama', 'otra'], score: '2.0', duration:'2h 50min', image: 'img/ballena.png', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.' },
    { id: 4, name: 'Ballena', year: 2021, category: ['drama', 'otra'], score: '8.0', duration:'2h 50min', image: 'img/ballena.png', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.' },
    { id: 5, name: 'Ballena', year: 2023, category: ['drama', 'otra'], score: '3.0', duration:'2h 50min', image: 'img/ballena.png', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.' },
    { id: 6, name: 'Ballena', year: 2019, category: ['drama', 'otra'], score: '9.0', duration:'2h 50min', image: 'img/ballena.png', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.' },
    { id: 7, name: 'Ballena', year: 2022, category: ['drama', 'otra'], score: '8.0', duration:'2h 50min', image: 'img/ballena.png', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.' },
    { id: 8, name: 'Ballena', year: 2023, category: ['drama', 'otra'], score: '5.0', duration:'2h 50min', image: 'img/ballena.png', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.' }
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
                        <a href="/movie.html" class="card-link">Ver detalle</a>
                    </div>
                </div>
            `

        }
    }
}

boxSearch.addEventListener('keyup', filter)

filter()