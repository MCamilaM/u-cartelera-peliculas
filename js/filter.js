function ShowSelected() {
    /* Para obtener el valor */
    var cod = document.getElementById("dropdownMenuButton2").value;
    console.log("cod" + cod);

    switch (cod) {
        case "value0":
            console.log(cod);
            showMovies(getMovies())
            break;
        case "recientes":
            console.log(cod);
            mostRecentFilter()
            break;
        case "antiguas":
            console.log(cod);
            oldestFilter()
            break;
        case "puntaje":
            console.log(cod);
            scoreFilter()
            break;
        case "a-z":
            console.log(cod);
            alphabeticalOrderFilter();
            break;
        default:
            console.log("No tengo mascota");
            break;
    }

    /* Para obtener el texto */
    // var combo = document.getElementById("dropdownMenuButton2");
    // var selected = combo.options[combo.selectedIndex].text;
    // console.log("select" +selected);
}

function getMovies() {

    const movies = [
        { id: 1, name: 'Ballena', year: 2018, category: ['drama', ' terror'], score: 1.0, duration:'2h 50min', image: 'img/movie1/ballena.png', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes by saying "Shazam!", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.' },
        { id: 2, name: 'Posesión infernal El despertar', year: 2023, category: ['Terror'], score: '7.3', duration:'1h 37min', image: 'img/movie2/movie2.jpg', sipnosis: 'Beth visita a su hermana mayor, Ella, que está criando a 3 niños en un pequeño apartamento en Los Ángeles. Su reunión es muy corta cuando encuentran un libro demoníaco, The Necronomicon Ex-Mortis.' },
        { id: 3, name: 'hormiga', year: 2017, category: ['drama', 'otra'], score: 2.0, duration:'2h 50min', image: 'img/movie3/mario.jpg', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes' },
        { id: 4, name: 'Ballena', year: 2021, category: ['drama', 'otra'], score: 8.0, duration:'2h 50min', image: 'img/movie4/john-wick.jpg', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes' },
        { id: 5, name: 'Ballena', year: 2023, category: ['drama', 'otra'], score: 3.0, duration:'2h 50min', image: 'img/movie5/avatar.jpg', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes' },
        { id: 6, name: 'Ballena', year: 2019, category: ['drama', 'otra'], score: 9.0, duration:'2h 50min', image: 'img/movie6/sin-novedad-frente.jpg', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes' },
        { id: 7, name: 'Ballena', year: 2022, category: ['drama', 'otra'], score: 8.0, duration:'2h 50min', image: 'img/movie7/cadena-perpetua.jpg', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes' },
        { id: 8, name: 'Ballena', year: 2023, category: ['drama', 'otra'], score: 5.0, duration:'2h 50min', image: 'img/movie8/harry-potter.jpg', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes' },
        { id: 9, name: 'Ballena', year: 2022, category: ['drama', 'otra'], score: 8.0, duration:'2h 50min', image: 'img/movie9/insidious.jpg', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes' },
        { id: 10, name: 'Ballena', year: 2023, category: ['drama', 'otra'], score: 5.0, duration:'2h 50min', image: 'img/movie10/garfield.jpg', sipnosis: 'Billy Batson and his foster siblings, who transform into superheroes' }
    ]
    

    return movies
}

function showMovies(movies) {

    resultSearch.innerHTML = '';

    for (let movie of movies) {
        // altGr + } (dos veces) para hacer backticks
        resultSearch.innerHTML += `
 
        <div class="card m-5 shadow p-3 mb-5 bg-white rounded mask flex-center " style="width: 23rem;">
        <div class="banner d-flex">
            <img src="img/popcorn.png" class="imagen-banner" width="45" alt="...">
            <p class="card-title">FilmStart</p>
        </div>
        <img src="${movie.image}" class="card-img-top hover-zoom" alt="...">
        <div class="card-body">
            <h5 class="card-title" style="font-weight:bold">${movie.name}</h5>
            <p class="card-text">⭐Calificación: ${movie.score}</p>
            <p class="card-text" >📽Estreno: ${movie.year}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><span style="font-weight:bold">Categoria:</span> ${movie.category}</li>
        </ul>
        <div class="card-body">
            <a href="/movie.html" class="card-link"><button type="button" class="btn btn-outline-danger">Ver detalle</button></a>
        </div>
    </div>
            `

    }
}

function mostRecentFilter() {

    const movies = getMovies()

    movies.sort(function (movie1, movie2) {
        if (movie1.year > movie2.year) { return -1; }
        if (movie1.year < movie2.year) { return 1; }
        // movie1.year must be equal to movie2.year
        return 0;
    });

    showMovies(movies)
}

function oldestFilter() {

    const movies = getMovies()

    movies.sort(function (movie1, movie2) {
        if (movie1.year > movie2.year) { return 1; }
        if (movie1.year < movie2.year) { return -1; }
        // movie1.year must be equal to movie2.year
        return 0;
    });

    showMovies(movies)
}

function scoreFilter() {

    const movies = getMovies()

    movies.sort(function (movie1, movie2) {
        if (movie1.score > movie2.score) { return -1 }
        if (movie1.score < movie2.score) { return 1 }
        // movie1.score must be equal to movie2.score
        return 0;
    });

    showMovies(movies)
}

function alphabeticalOrderFilter() {

    const movies = getMovies()

    movies.sort(function (movie1, movie2) {
        var movie1Name = movie1.name.toLowerCase();
        var movie2Name = movie2.name.toLowerCase();

        if (movie1Name < movie2Name) { return -1 }
        if (movie1Name > movie2Name) { return 1 }
        // movie1.score must be equal to movie2.score
        return 0;
    });

    showMovies(movies)

}
