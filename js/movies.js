      // set up an empty array that will hold the movies 
      var arrMovies = [];

      // Function to add a movie to the movie array
      function addMovie(event){
          event.preventDefault(); // prevent the form from submitting and the page will not refresh
          // Set up a pointer variable to the movie text input
          var txtMovieInput = document.getElementById("txtMovie");
          // Set up a variable that holds the movie title
          var movieTitle = txtMovieInput.value.trim();

          // Check to make sure a movie title was entered
          if (movieTitle){
              // Add the movie title to the array
              arrMovies.push(movieTitle);
              // Sort the array so the movie title is in alphabetic order
              arrMovies.sort();
              // Clear the text from the input textbox
              txtMovieInput.value = "";
              // Call the function to update the movies that appear on the page
              updateMovieList();
          }
      }

      // Function to update the list of movies on the page
      function updateMovieList(){
          // Create an empty array to hold the html formatted movie list
          var arrMoviesFormatted = [];
          // pointer to the movie list div
          var divMovies = document.getElementById("divMovieList");

          // Loop through the movie array
          for (var i = 0; i < arrMovies.length; i++){
              // Take the array items and format with some html
              arrMoviesFormatted.push("<div>" + arrMovies[i] + "</div>");
          }

          // Turn the movie formatted list of movies into a string 
          divMovies.innerHTML = arrMoviesFormatted.join('');
      }

      // function to clear the movies from the list 
      function clearList(){
          // Clear the movies array
          arrMovies = [];

          // Call the function to update the movies that appear on the page
          updateMovieList();


          
      }