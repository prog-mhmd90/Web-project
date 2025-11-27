
//الأفلام
var movies = [
    { 
        id: 1, 
        title: "Inception", 
        genre: "Sci-Fi", 
        year: 2010, 
        director: "Christopher Nolan",
        image: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O."
    },
    { 
        id: 2, 
        title: "Avatar", 
        genre: "Action", 
        year: 2009, 
        director: "James Cameron",
        image: "https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg",
        description: "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home."
    },
    { 
        id: 3, 
        title: "Titanic", 
        genre: "Drama", 
        year: 1997, 
        director: "James Cameron",
        image: "https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png",
        description: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic."
    },
    { 
        id: 4, 
        title: "Frozen", 
        genre: "Animation", 
        year: 2013, 
        director: "Chris Buck, Jennifer Lee",
        image: "https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg",
        description: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man to change the weather condition."
    },
    { 
        id: 5, 
        title: "The Avengers", 
        genre: "Action", 
        year: 2012, 
        director: "Joss Whedon",
        image: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
        description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
    },
    { 
        id: 6, 
        title: "The Godfather", 
        genre: "Crime", 
        year: 1972, 
        director: "Francis Ford Coppola",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    { 
        id: 7, 
        title: "John Wick", 
        genre: "Action", 
        year: 2014, 
        director: "Chad Stahelski",
        image: "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg",
        description: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and took everything from him."
    },
    { 
        id: 8, 
        title: "Cars", 
        genre: "Animation", 
        year: 2006, 
        director: "John Lasseter",
        image: "https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg",
        description: "A hot-shot race-car named Lightning McQueen gets waylaid in Radiator Springs, where he finds the true meaning of friendship and family."
    },
    { 
        id: 9, 
        title: "Scarface", 
        genre: "Crime", 
        year: 1983, 
        director: "Brian De Palma",
        image: "https://upload.wikimedia.org/wikipedia/en/7/71/Scarface_-_1983_film.jpg",
        description: "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed."
    },
    { 
        id: 10, 
        title: "Toy Story", 
        genre: "Animation", 
        year: 1995, 
        director: "John Lasseter",
        image: "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
        description: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room."
    },
    { 
        id: 11, 
        title: "Interstellar", 
        genre: "Sci-Fi", 
        year: 2014, 
        director: "Christopher Nolan",
        image: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    { 
        id: 12, 
        title: "Kung Fu Panda", 
        genre: "Animation", 
        year: 2008, 
        director: "John Stevenson, Mark Osborne",
        image: "https://upload.wikimedia.org/wikipedia/en/7/76/Kungfupanda.jpg",
        description: "The Dragon Warrior has to clash against the savage Tai Lung as China's fate hangs in the balance."
    },
    { 
        id: 13, 
        title: "Get Out", 
        genre: "Horror", 
        year: 2017, 
        director: "Jordan Peele",
        image: "https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png",
        description: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point."
    },
    { 
        id: 14, 
        title: "Jurassic Park", 
        genre: "Adventure", 
        year: 1993, 
        director: "Steven Spielberg",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg",
        description: "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose."
    },
    { 
        id: 15, 
        title: "The Shawshank Redemption", 
        genre: "Drama", 
        year: 1994, 
        director: "Frank Darabont",
        image: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    { 
        id: 16, 
        title: "Fast & Furious 7", 
        genre: "Action", 
        year: 2015, 
        director: "James Wan",
        image: "https://upload.wikimedia.org/wikipedia/en/b/b8/Furious_7_poster.jpg",
        description: "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother."
    },
    { 
        id: 17, 
        title: "Harry Potter and the Sorcerer's Stone", 
        genre: "Fantasy", 
        year: 2001, 
        director: "Chris Columbus",
        image: "https://upload.wikimedia.org/wikipedia/en/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg",
        description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
    },
    { 
        id: 18, 
        title: "The Dark Knight", 
        genre: "Action", 
        year: 2008, 
        director: "Christopher Nolan",
        image: "https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    { 
        id: 19, 
        title: "The Lion King", 
        genre: "Animation", 
        year: 1994, 
        director: "Roger Allers, Rob Minkoff",
        image: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg",
        description: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
    },
    { 
        id: 20, 
        title: "Spider-Man: No Way Home", 
        genre: "Action", 
        year: 2021, 
        director: "Jon Watts",
        image: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
        description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear."
    }
];

// مسح لو في بيانات قديمه واضافة الجديده
localStorage.removeItem("movies");
localStorage.setItem("movies", JSON.stringify(movies));

// عرض الأفلام
window.onload = function() {
    var container = document.querySelector('.movies-container');
    if (!container) {
        console.log("Container not found!");
        return;
    }
    
    container.innerHTML = '';
    
    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        var card = '<div class="card">';
        card += '<img src="' + movie.image + '" alt="' + movie.title + '">';
        card += '<h3>' + movie.title + '</h3>';
        card += '<p>' + movie.genre + ' • ' + movie.year + '<br>Director: ' + movie.director + '</p>';
        card += '<br>';
        card += '<a href="/HTML/Details.html?id=' + movie.id + '" class="details-btn">Details</a>';
        card += '</div>';
        
        container.innerHTML += card;
    }
    
    console.log("Showing " + movies.length + " movies");
};
