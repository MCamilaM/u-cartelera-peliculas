function ShowSelected() {
    /* Para obtener el valor */
    var cod = document.getElementById("dropdownMenuButton2").value;
    console.log("cod" + cod);

    switch (cod) {
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
        { id: 1, name: 'Ballena', year: 2018, category: ['drama', ' terror'], score: '1.0', image: 'img/ballena.png' },
        { id: 1, name: 'super man', year: 2023, category: ['drama', 'otra'], score: '8.0', image: 'img/ballena.png' },
        { id: 1, name: 'hormiga', year: 2017, category: ['drama', 'otra'], score: '2.0', image: 'img/ballena.png' },
        { id: 1, name: 'Zallena', year: 2021, category: ['drama', 'otra'], score: '8.0', image: 'img/ballena.png' },
        { id: 1, name: 'gallena', year: 2023, category: ['drama', 'otra'], score: '3.0', image: 'img/ballena.png' },
        { id: 1, name: 'yallena', year: 2019, category: ['drama', 'otra'], score: '9.0', image: 'img/ballena.png' },
        { id: 1, name: 'wallena', year: 2022, category: ['drama', 'otra'], score: '8.0', image: 'img/ballena.png' },
        { id: 1, name: 'lallena', year: 2023, category: ['drama', 'otra'], score: '5.0', image: 'img/ballena.png' }
    ]

    return movies
}

function showMovies(movies) {

    resultSearch.innerHTML = '';

    for (let movie of movies) {
        // altGr + } (dos veces) para hacer backticks
        resultSearch.innerHTML += `
 
                <div class="card" style="width: 18rem;">
                    <img src="${movie.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${movie.name}</h5>
                        <p class="card-text" style="font-size:30px">Calificación: ${movie.score}</p>
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

function alphabeticalOrderFilter(){

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
