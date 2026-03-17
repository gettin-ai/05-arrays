// Set up event listener for when the user selects a genre
// Create an array for each movie genre
const comedyMovies = ["Superbad", "Mean Girls", "Elf", "The Mask"];
const actionMovies = ["Mad Max: Fury Road", "John Wick", "Black Panther", "Die Hard"];
const dramaMovies = ["The Pursuit of Happyness", "Forrest Gump", "The Shawshank Redemption", "Titanic"];
const sciFiMovies = ["Interstellar", "Star Wars", "The Matrix", "Avatar"];

document.getElementById("genre").addEventListener("change", function() {
  // Get the selected genre
  const selectedGenre = document.getElementById("genre").value;

  // Create a movieList array
  let movieList = [];

  // Add movies to the movieList based on the selected genre
  if (selectedGenre === "Comedy") {
    movieList = comedyMovies;
  } else if (selectedGenre === "Action") {
    movieList = actionMovies;
  } else if (selectedGenre === "Drama") {
    movieList = dramaMovies;
  } else if (selectedGenre === "Sci-Fi") {
    movieList = sciFiMovies;
  }

  // Display the list of movies on the page
  document.getElementById("movieRecommendations").innerText = `Enjoy: ${movieList.join(", ")}!`;
});
