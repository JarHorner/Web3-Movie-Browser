import React, { useState } from "react";
import Header from "../components/header";
import Filters from "../components/filters";
import MovieDetails from "../components/movieDetails";
import MovieList from "../components/movieList";
import Favorites from "../components/favorites";




const Default = (props) => {
  const [defaultView, setDefaultView] = useState(true);
  const [filterView, setShowFilter] = useState(true);
  const [movieSelected, setMovieSelected] = useState([]);

  const renderDefaultView = () => {
    setDefaultView(true);
  };

  const renderMovieDetailsView = () => {
    setDefaultView(false);
  };

  return (
    <div id="default_cntr" className="flex flex-col bg-movieHeroImg bg-cover h-full  ">

      <div className=" h-[10%]">
        <Header renderHomeView={props.renderHomeView} setShowFilter={setShowFilter} filterView={filterView} renderMovieDetailsView={renderMovieDetailsView} />
      </div>

      <div className="flex flex-1 h-[90%]">
        {defaultView ? (
          <>
            <Filters filterView={filterView} setShowFilter={setShowFilter} movieList={props.movieList} setMovieList={props.setMovieList} genreList={props.genreList} />
            <MovieList movieList={props.movieList} renderMovieDetailsView={renderMovieDetailsView} setMovieSelected={setMovieSelected}  />
          </>
        ) : (
          <MovieDetails movieSelected={movieSelected} renderDefaultView={renderDefaultView} />
        )}
        <Favorites filterView={filterView} />
      </div>
    </div>
  );
};

export default Default;
