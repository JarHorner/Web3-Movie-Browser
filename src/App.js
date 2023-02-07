import React, { useEffect, useState } from 'react';
import Home from './Home.js';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect( () => {
    if (!localStorage.getItem("movieData"))
    {
      const getMovieData = async () => {
        try {
          const moviesURL = 'https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?id=ALL';
          const resp = await fetch(moviesURL);
          const data = await resp.json();
          localStorage.setItem("movieData", JSON.stringify(data));
        }
        catch (err) {
          console.error(err);
        }
      }
      getMovieData();
    }
    setMovies(JSON.parse(localStorage.getItem("movieData")));
  }, []);



  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
