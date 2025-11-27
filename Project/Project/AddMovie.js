document.addEventListener('DOMContentLoaded', function() {
    initializeAddMoviePage();
});

function initializeAddMoviePage() {
    var form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleAddMovieForm);
    }
    
    // البحث عن زر Reset وإضافة event ليه
    var resetBtn = document.querySelector('.reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            document.querySelector('form').reset();
        });
    }
}

function handleAddMovieForm(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    
    var title = document.querySelector('input[placeholder="Movie title"]').value;
    var genre = document.querySelector('input[placeholder="Action,Drama,Comedy,..."]').value;
    var year = document.querySelector('input[placeholder="e.g. 2023"]').value;
    var director = document.querySelector('input[placeholder="Director"]').value;
    var description = document.querySelector('input[placeholder="Short description of the movie"]').value;
    
    if (!title || !director) {
        alert('Please fill in all required fields (Title and Director)');
        return;
    }
    
    // عمل object للفيلم الجديد
    var newMovie = {
        id: new Date().getTime(), 
        title: title,
        genre: genre,
        year: year,
        director: director,
        description: description,
        image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg" // صورة افتراضية
    };
    
    saveMovie(newMovie);
    alert('Movie added successfully!');
    
    // الانتقال لصفحة الأفلام بعد ثانية
    setTimeout(function() {
        window.location.href = 'MoviesList.html';
    }, 1000);
}

//  حفظ الفلم في localStorage
function saveMovie(movie) {
    var savedMovies = localStorage.getItem("movies");
    var movies = savedMovies ? JSON.parse(savedMovies) : [];
    
    movies.push(movie);
    
    localStorage.setItem("movies", JSON.stringify(movies));
}
