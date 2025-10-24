const movies = [
  { title: "Avatar", year: 2009, genre: "Action" },
  { title: "Titanic", year: 1997, genre: "Drama" },
  { title: "The Avengers", year: 2012, genre: "Action" },
  { title: "Frozen", year: 2013, genre: "Animation" },
  { title: "The Godfather", year: 1972, genre: "Crime" },
  { title: "John Wick", year: 2014, genre: "Action" },
  { title: "Cars", year: 2006, genre: "Animation" },
  { title: "Scarface", year: 1983, genre: "Crime" },
  { title: "Toy Story", year: 1995, genre: "Animation" },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi" },
  { title: "Kung Fu Panda", year: 2008, genre: "Animation" },
  { title: "Get Out", year: 2017, genre: "Horror" },
  { title: "Sherlock Holmes", year: 2009, genre: "Mystery" },
  { title: "The Conjuring", year: 2013, genre: "Horror" },
  { title: "Fast & Furious 7", year: 2015, genre: "Action" },
  { title: "Harry Potter and the Sorcerer's Stone", year: 2001, genre: "Fantasy" },
  { title: "The Dark Knight", year: 2008, genre: "Action" },
  { title: "Inception", year: 2010, genre: "Sci-Fi" },
];

var container = document.getElementById("movieContainer");
container.innerHTML = "";

for (var i = 0; i < movies.length; i++) {
  var movieHTML = "<div class='movie'>" +
                  "<h3>" + movies[i].title + "</h3>" +
                  "<p>" + movies[i].genre + " - " + movies[i].year + "</p>" +
                  "</div>";

 
  container.innerHTML = container.innerHTML + movieHTML;
}
