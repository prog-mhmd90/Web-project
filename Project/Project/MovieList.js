var defaultMovies = [
    { 
        id: 1, 
        title: "Avatar", 
        genre: "Action", 
        year: 2009, 
        director: "James Cameron",
        image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
        description: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
    },
    { 
        id: 2, 
        title: "Titanic", 
        genre: "Drama", 
        year: 1997, 
        director: "James Cameron",
        image: "https://upload.wikimedia.org/wikipedia/en//18/Titanic_%%.png",
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
    },
    { 
        id: 3, 
        title: "The Avengers", 
        genre: "Action", 
        year: 2012, 
        director: "Joss Whedon",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg",
        description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
    },
    { 
        id: 4, 
        title: "Frozen", 
        genre: "Animation", 
        year: 2013, 
        director: "Chris Buck, Jennifer Lee",
        image: "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg",
        description: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition."
    },
    { 
        id: 5, 
        title: "The Godfather", 
        genre: "Crime", 
        year: 1972, 
        director: "Francis Ford Coppola",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    { 
        id: 6, 
        title: "John Wick", 
        genre: "Action", 
        year: 2014, 
        director: "Chad Stahelski",
        image: "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg",
        description: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him."
    },
    { 
        id: 7, 
        title: "Cars", 
        genre: "Animation", 
        year: 2006, 
        director: "John Lasseter",
        image: "https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg",
        description: "A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family."
    },
    { 
        id: 8, 
        title: "Scarface", 
        genre: "Crime", 
        year: 1983, 
        director: "Brian De Palma",
        image: "https://upload.wikimedia.org/wikipedia/en/7/71/Scarface_-_1983_film.jpg",
        description: "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed."
    },
    { 
        id: 9, 
        title: "Toy Story", 
        genre: "Animation", 
        year: 1995, 
        director: "John Lasseter",
        image: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
        description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room."
    },
    { 
        id: 10, 
        title: "Interstellar", 
        genre: "Sci-Fi", 
        year: 2014, 
        director: "Christopher Nolan",
        image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    { 
        id: 11, 
        title: "Kung Fu Panda", 
        genre: "Animation", 
        year: 2008, 
        director: "John Stevenson, Mark Osborne",
        image: "https://upload.wikimedia.org/wikipedia/en/7/76/Kungfupanda.jpg",
        description: "The Dragon Warrior has to clash against the savage Tai Lung as China's fate hangs in the balance. However, the Dragon Warrior mantle is supposedly mistaken to be bestowed upon an obese panda who is a novice in martial arts."
    },
    { 
        id: 12, 
        title: "Get Out", 
        genre: "Horror", 
        year: 2017, 
        director: "Jordan Peele",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
        description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point."
    },
    { 
        id: 13, 
        title: "Sherlock Holmes", 
        genre: "Mystery", 
        year: 2009, 
        director: "Guy Ritchie",
        image: "https://upload.wikimedia.org/wikipedia/en/2/2f/Sherlock_Holmes2.jpg",
        description: "Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England."
    },
    { 
        id: 14, 
        title: "The Conjuring", 
        genre: "Horror", 
        year: 2013, 
        director: "James Wan",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1f/The_Conjuring_poster.jpg",
        description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse."
    },
    { 
        id: 15, 
        title: "Fast & Furious 7", 
        genre: "Action", 
        year: 2015, 
        director: "James Wan",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b8/Furious_7_poster.jpg",
        description: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother."
    },
    { 
        id: 16, 
        title: "Harry Potter and the Sorcerer's Stone", 
        genre: "Fantasy", 
        year: 2001, 
        director: "Chris Columbus",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg",
        description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
    },
    { 
        id: 17, 
        title: "The Dark Knight", 
        genre: "Action", 
        year: 2008, 
        director: "Christopher Nolan",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    { 
        id: 18, 
        title: "Inception", 
        genre: "Sci-Fi", 
        year: 2010, 
        director: "Christopher Nolan",
        image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    }
];

// Get movies from localStorage
function loadMovies() {
    var savedMovies = localStorage.getItem("movies");
    var movies;
    
    if (savedMovies === null) {
        movies = defaultMovies;
        localStorage.setItem("movies", JSON.stringify(movies));
    } else {
        movies = JSON.parse(savedMovies);
    }
    
    displayMovies(movies);
}

// Display movies function
function displayMovies(movies) {
    var container = document.querySelector('.movies-container');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (!movies || movies.length === 0) {
        container.innerHTML = '<p>No movies found.</p>';
        return;
    }
    
    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        var movieCard = createMovieCard(movie);
        container.innerHTML = container.innerHTML + movieCard;
    }
}

// Create movie card HTML - بدون Template Literals
function createMovieCard(movie) {
    var cardHTML = '<div class="card">';
    cardHTML += '<img src="' + movie.image + '" alt="' + movie.title + '" ';
    cardHTML += 'onerror="this.src=\'/Images/default-movie.jpg\'">';
    cardHTML += '<h3>' + movie.title + '</h3>';
    cardHTML += '<p>' + movie.genre + ' • ' + movie.year + '<br>Director: ' + movie.director + '</p>';
    cardHTML += '<a href="/HTML/Details.html?id=' + movie.id + '" class="details-btn">Details</a>';
    cardHTML += '</div>';
    
    return cardHTML;
}

// Run when page loads
document.addEventListener('DOMContentLoaded', loadMovies);

