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
        { id: 1, name: 'La Ballena', year: 2022, category: ['Drama psicológico'], score: '7.7', duration:'2H ', image: 'img/movie1/ballena.png', sipnosis: 'Un solitario profesor de inglés que tiene obesidad mórbida y vive recluido intenta reconectar' , html:'movies/movie1.html'},
    { id: 2, name: 'Posesión infernal: El despertar', year: 2023, category: ['Terror'], score: '7.2', duration:'1H 36min', image: 'img/movie2/movie2.jpg', sipnosis: 'Beth visita a su hermana mayor, Ella, que está criando a 3 niños en un pequeño apartamento en Los Ángeles. Su reunión es muy corta cuando encuentran un libro demoníaco, The Necronomicon Ex-Mortis.' , html:'movies/movie2.html'},
    { id: 3, name: 'Super Mario Bros', year: 2023, category: ['Animación', ' Aventura', ' Comedia'], score: 7.3, duration:'1H 30min', image: 'img/movie3/mario.jpg', sipnosis: 'Un fontanero llamado Mario viaja a través de un laberinto subterráneo con su hermano, Luigi, tratando de salvar a una princesa capturada.' , html:'movies/movie3.html'},
    { id: 4, name: 'Jonh Wick', year: 2023, category: ['Accion', ' Suspenso', ' Crimen'], score: 8.2, duration:'2H 49min', image: 'img/movie4/john-wick.jpg', sipnosis: 'John Wick descubre un camino para derrotar a La Mesa, pero, antes de que pueda ganar su libertad, Wick debe enfrentarse a un nuevo enemigo con poderosas alianzas en todo el mundo y fuerzas que convierten a viejos amigos en enemigos.' , html:'movies/movie4.html'},
    { id: 5, name: 'Avatar, El sentido del agua', year: 2022, category: ['Accion', ' Aventura', ' Fantasía'], score: 7.7, duration:'3h 12min', image: 'img/movie5/avatar.jpg', sipnosis: 'Jake Sully vive con su nueva familia en el planeta de Pandora. Cuando una amenaza conocida regresa, Jake debe trabajar con Neytiri y el ejército de la raza navi para proteger su planeta.' , html:'movies/movie5.html'},
    { id: 6, name: 'Sin novedad en el frente', year: 2022, category: ['Drama', ' Acción'], score: 7.8, duration:'2h 28min', image: 'img/movie6/sin-novedad-frente.jpg', sipnosis: 'Las aterradoras experiencias y la angustia de un joven soldado alemán en el frente occidental durante la Primera Guerra Mundial.' , html:'movies/movie6.html'},
    { id: 7, name: 'Cadena Perpetua', year: 1994, category: ['Drama'], score: 9.3, duration:'2h 22min', image: 'img/movie7/cadena-perpetua.jpg', sipnosis: 'Andy Dufresne es encarcelado por matar a su esposa y al amante de esta. Tras una dura adaptación, intenta mejorar las condiciones de la prisión y dar esperanza a sus compañeros.' , html:'movies/movie7.html'},
    { id: 8, name: 'Harry Potter y el prisionero de azkaban', year: 2004, category: ['Aventura', ' Familiar', ' Fantasía'], score: 7.9, duration:'2h 22min', image: 'img/movie8/harry-potter.jpg', sipnosis: 'Harry Potter, Ron y Hermione regresan al Colegio Hogwarts de Magia y Hechicería para cursar su tercer año de estudios, donde se adentran en el misterio que rodea a un preso fugado que supone una peligrosa amenaza para el joven mago.' , html:'movies/movie8.html'},
    { id: 9, name: 'Insidious (La noche del demonio): La puerta roja', year: 'En espera', category: ['Terror', ' Misterio', ' Suspenso'], score: 0, duration:'En espera', image: 'img/movie9/insidious.jpg', sipnosis: 'Los Lambert 10 años después de la última entrega, cuando Dalton comienza la universidad.' , html:'movies/movie9.html'},
    { id: 10, name: 'Garfield: La pelicula', year: 2004, category: ['Animación', ' Aventura', ' Comedia'], score: 5.0, duration:'1h 20min', image: 'img/movie10/garfield.jpg', sipnosis: 'Jon Arbuckle compra una segunda mascota, un perro llamado Odie. Sin embargo, Odie es secuestrado y depende del gato de Jon, Garfield, encontrar y rescatar al perro.', html:'movies/movie10.html' }
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
            <p class="card-title">FilmStars</p>
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
            <a href="${movie.html}" class="card-link"><button type="button" class="btn btn-outline-danger">Ver detalle</button></a>
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
