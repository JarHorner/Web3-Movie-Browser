import React, { useState } from "react";
import Header from "../components/header";
import Filters from "../components/filters";

const Default = (props) => {
  const [defaultView, setDefaultView] = useState(true);

  const renderDefaultView = () => {
    setDefaultView(true);
  };

  const renderMovieDetailsView = () => {
    setDefaultView(false);
  };

  return (
    <div id="default_cntr" className="h-full flex flex-col">
      <Header renderHomeView={props.renderHomeView} />
      <div className="h-full flex flex-row">
        {defaultView ? (
          <>
            <div
              id="default_filters"
              className="w-1/4 m-3 bg-slate-400 rounded-2xl"
            >
              <div className="flex flex-row justify-center items-center">
                <h1 className="text-3xl font-bold">Filters</h1>
              </div>
            </div>
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
          <div
            id="default_filters"
            className="w-5/6 m-3 bg-slate-400 rounded-2xl"
          >
            <div className="px-20 py-5 flex flex-row">
              <h1 className="text-3xl font-bold">Movie Title</h1>
            </div>
          </div>
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
