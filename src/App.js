import HOME from "./views/home";
import DEFAULT from "./views/default";
import React, { useState, useEffect } from "react";

function App() {
  //ADD STATE
  const [movieList, setMovieList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  // State for determ what view
  const [homeView, setHomeView] = useState(true);

  const [genreList, setGenreList] = useState([]);

  const getGenres = () => {
    let genreOptions = [];
    JSON.parse(localStorage.getItem("movieList")).map((movie) => 
      
      (movie.details.genres?.map((genre)=> {
        if(!genreOptions.includes(genre.name)) {
          genreOptions.push(genre.name)
        }
        return null
      })) 
    );
    setGenreList(genreOptions)
 }

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const url =
          "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=10";
        const response = await fetch(url);
        const data = await response.json();
        localStorage.setItem("movieList", JSON.stringify(data));
        setMovieList(data);
      } catch (err) {
        console.error(err);
      }
    };
    // invoke the async function
    if (!localStorage.getItem("movieList")) {
      console.log("I AM FETCHING! MAKE SURE I SHOULD BE")
      getMovieData();
    } else {
      setMovieList(JSON.parse(localStorage.getItem("movieList")));
      getGenres();
    }
  }, []);

  const renderDefaultView = () => {
    setHomeView(false);
  };

  const renderHomeView = () => {
    setHomeView(true);
  };

  return (
    <div className="  h-full w-full  ">
      {homeView ? (
        <HOME renderDefaultView={renderDefaultView} movieList={movieList} setMovieList={setMovieList}/>
      ) : (
        <DEFAULT renderHomeView={renderHomeView} movieList={movieList} favoritesList={favoritesList} setMovieList={setMovieList} setFavoritesList={setFavoritesList} genreList={genreList} />
      )}
    </div>
  );
}

export default App;
