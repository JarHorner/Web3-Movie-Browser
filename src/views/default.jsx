import React from "react";
import Header from "../components/header";
import Filters from "../components/filters";
import MovieList from "../components/movieList";

const Default = (props) => {
  return (
    <div id="default_cntr" className="h-full flex flex-col">
      <Header renderHomeView={props.renderHomeView} />
      <div className="h-full flex flex-row">
        <Filters />
        <MovieList movieList={props.movieList} />
        <div
          id="default_Favorites"
          className="w-1/4 m-3 bg-slate-400 rounded-2xl"
        >
          <div className="flex flex-row justify-center items-center">
            <h1 className="text-3xl font-bold">Favorites</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
