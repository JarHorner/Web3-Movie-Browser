import React, { useState } from "react";
import Header from "../components/header";
import Filters from "../components/filters";
import MovieList from "../components/movieList";
import MovieTitle from "../components/movieTitle";



const Default = (props) => {
  const [defaultView, setDefaultView] = useState(true);
  const [filterView, setShowFilter] = useState(true);

  const renderDefaultView = () => {
    setDefaultView(true);
  };

  const renderMovieDetailsView = () => {
    setDefaultView(false);
  };

  return (
    <div id="default_cntr" className="h-full flex flex-col bg-movieHeroImg bg-cover ">
      <Header renderHomeView={props.renderHomeView} setShowFilter={setShowFilter} filterView={filterView} />
      <div className="h-full flex flex-row">
        {defaultView ? (
          <>
            <Filters filterView={filterView} setShowFilter={setShowFilter} />
            <div
              id="default_List"
              className=" w-1/2 m-3 bg-slate-400 rounded-2xl"
            >
              <div className="flex flex-row justify-center items-center">
                <h1 className="text-3xl font-bold">Movie List</h1>
              </div>
            </div>
          </>
        ) : (
          <MovieTitle renderDefaultView={renderDefaultView} />
        )}
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
