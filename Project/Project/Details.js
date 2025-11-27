
window.onload = function() {
    showMovieDetails();
};

function showMovieDetails() {

    // أخذ رقم الفلم من الرابط
    var urlParams = new URLSearchParams(window.location.search);
    var movieId = urlParams.get('id');
    
    if (!movieId) return;
    
    //بحث عن الفلم
    var savedMovies = localStorage.getItem("movies");
    if (!savedMovies) return;
    
    var movies = JSON.parse(savedMovies);
    var movie = null;
    
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].id == movieId) {
            movie = movies[i];
            break;
        }
    }
    
    if (!movie) return;
    
    // عرض
    var img = document.querySelector('.container img');
    var title = document.querySelector('.details h2');
    var info = document.querySelector('.info');
    var desc = document.querySelector('.description');
    
    if (img) img.src = movie.image;
    if (title) title.textContent = movie.title;
    if (info) info.textContent = 'Genre: ' + movie.genre + ' | Year: ' + movie.year + '\nDirector: ' + movie.director;
    if (desc) desc.textContent = movie.description;
}
