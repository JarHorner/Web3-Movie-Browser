import React, { useState } from "react";
import Header from "../components/header";
import Filters from "../components/filters";
import MovieDetails from "../components/movieDetails";
import MovieList from "../components/movieList";
import FavoritesList from "../components/favoritesList";

const Default = (props) => {
  const [defaultView, setDefaultView] = useState(true);
  const [filterView, setShowFilter] = useState(true);
  const [favView, setShowFav] = useState(false);
  const [movieSelected, setMovieSelected] = useState([]);

  const renderDefaultView = () => {
    setDefaultView(true);
  };

  const renderMovieDetailsView = (movie) => {
    setDefaultView(false);
    setMovieSelected(movie);
  };

  return (
    <div
      id="default_cntr"
      className="flex flex-col bg-movieHeroImg bg-cover h-full  "
    >
      <div className=" h-[10%]">
        <Header
          renderHomeView={props.renderHomeView}
          setShowFilter={setShowFilter}
          filterView={filterView}
          setShowFav={setShowFav}
          favView={favView}
          renderMovieDetailsView={renderMovieDetailsView}
        />
      </div>

      <div className="flex flex-1 h-[90%]">
        {defaultView ? (
          <>
            <Filters
              filterView={filterView}
              setShowFilter={setShowFilter}
              movieList={props.movieList}
              setMovieList={props.setMovieList}
              genreList={props.genreList}
            />
            <MovieList
              movieList={props.movieList}
              setShowFav={setShowFav}
              renderMovieDetailsView={renderMovieDetailsView}
              setMovieList={props.setMovieList}
              AddFavorite={props.AddFavorite}
            />
          </>
        ) : (
          <MovieDetails
            movieSelected={movieSelected}
            renderDefaultView={renderDefaultView}
            AddFavorite={props.AddFavorite}
            setShowFav={setShowFav}
          />
        )}
        <FavoritesList
          favView={favView}
          setShowFav={setShowFav}
          favoritesList={props.favoritesList}
          RemoveFavorite={props.RemoveFavorite}
          renderMovieDetailsView={renderMovieDetailsView}
        />
      </div>
    </div>
  );
};

export default Default;
