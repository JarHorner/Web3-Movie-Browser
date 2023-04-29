import HOME from "./views/home";
import DEFAULT from "./views/default";
import FetchingDataModal from "./components/fetchingDataModal";
import * as cloneDeep from "lodash/cloneDeep";
import React, { useState, useEffect } from "react";

function App() {
  //ADD STATE
  const [movieList, setMovieList] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  const [fetchingModal, setFetchingModal] = useState(false);

  // State for determ what view
  const [homeView, setHomeView] = useState(true);

  const [genreList, setGenreList] = useState([]);

  const AddFavorite = (movie) => {
    if (!favoritesList.find((favoritesList) => favoritesList.id === movie.id)) {
      const copyFavorites = cloneDeep(favoritesList);
      copyFavorites.push(movie);
      setFavoritesList(copyFavorites);
    }
  };

  const RemoveFavorite = (movie) => {
    const copyFavorites = favoritesList.filter((fav) => fav.id !== movie.id);
    setFavoritesList(copyFavorites);
  };

  const closeFetchingModal = () => {
    setFetchingModal(false);
  };

  const getGenres = () => {
    let genreOptions = [];
    JSON.parse(localStorage.getItem("movieList")).map((movie) =>
      movie.details.genres?.map((genre) => {
        if (!genreOptions.includes(genre.name)) {
          genreOptions.push(genre.name);
        }
        return null;
      })
    );
    setGenreList(genreOptions);
  };

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const url =
          "https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies-brief.php?limit=200";
        //"https://web3-moviebrowserapi.glitch.me/api/movies";
        const response = await fetch(url);
        const data = await response.json();
        localStorage.setItem("movieList", JSON.stringify(data));
        setMovieList(data);
        closeFetchingModal(false);
      } catch (err) {
        console.error(err);
      }
    };

    // invoke the async function
    if (!localStorage.getItem("movieList")) {
      // shows the loading modal when the site opens up
      setFetchingModal(true);

      // invoke the async function
      console.log("I AM FETCHING! MAKE SURE I SHOULD BE");
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
      <FetchingDataModal fetchingModal={fetchingModal} />
      {homeView ? (
        <HOME
          renderDefaultView={renderDefaultView}
          movieList={movieList}
          setMovieList={setMovieList}
        />
      ) : (
        <DEFAULT
          renderHomeView={renderHomeView}
          movieList={movieList}
          favoritesList={favoritesList}
          setMovieList={setMovieList}
          AddFavorite={AddFavorite}
          RemoveFavorite={RemoveFavorite}
          genreList={genreList}
        />
      )}
    </div>
  );
}

export default App;
