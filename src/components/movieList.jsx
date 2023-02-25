import { useState } from "react";
import MovieCard from "./movieCard";

const MovieList = (props) => {
  const [titleAlpha, setTitleAlpha] = useState();
  const [yearSort, setYearSort] = useState();

  const sortTitleAlpha = () => {
    props.setMovieList(
      [...props.movieList].sort((a, b) => {
        if (a.title.toUpperCase() < b.title.toUpperCase()) {
          return -1;
        }
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
          return 1;
        }

        return 0;
      })
    );
  };

  const sortTitleAlphaRev = () => {
    props.setMovieList(
      [...props.movieList].sort((a, b) => {
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
          return -1;
        }
        if (a.title.toUpperCase() < b.title.toUpperCase()) {
          return 1;
        }

        return 0;
      })
    );
  };

  const sortYearLG = () => {
    props.setMovieList(
      [...props.movieList].sort((a, b) => {
        const yearA = parseInt(a.release_date.substring(0, 4));
        const yearb = parseInt(b.release_date.substring(0, 4));
        if (yearA < yearb) {
          return -1;
        }
        if (yearA > yearb) {
          return 1;
        }

        return 0;
      })
    );
  };

  const sortYearGL = () => {
    props.setMovieList(
      [...props.movieList].sort((a, b) => {
        const yearA = parseInt(a.release_date.substring(0, 4));
        const yearb = parseInt(b.release_date.substring(0, 4));
        if (yearA > yearb) {
          return -1;
        }
        if (yearA < yearb) {
          return 1;
        }

        return 0;
      })
    );
  };

  return (
    <div
      id="default_List"
      className="bg-white/90 backdrop-blur-2xl flex flex-col h-full flex-1 "
    >
      <div className="flex items-center p-5 bg-white rounded-lg m-2 text-pink-900 ">
        <h1 className="text-3xl">List of Matching Movie Results</h1>
      </div>

      <div className="flex rounded-lg p-2 bg-white mx-2 ">
        <div className="flex-1 w-[14%] " />
        <div className=" flex-1 w-[14%] ">
          <h1
            className="text-xl  hover:text-pink-700  hover:cursor-pointer transition-all "
            onClick={() => {
              if (titleAlpha) {
                setTitleAlpha(false);
                sortTitleAlphaRev();
              } else {
                setTitleAlpha(true);
                sortTitleAlpha();
              }
            }}
          >
            {"Title"}
          </h1>
        </div>
        <div className=" flex-1 w-[14%]">
          <h1
            className="text-xl hover:text-pink-700  hover:cursor-pointer transition-all"
            onClick={() => {
              if (yearSort) {
                setYearSort(false);
                sortYearGL();
              } else {
                setYearSort(true);
                sortYearLG();
              }
            }}
          >
            Year
          </h1>
        </div>
        <div className=" flex-1  w-[14%]">
          <h1 className="text-xl">Rating</h1>
        </div>
        <div className=" flex-1 w-[14%]">
          <h1 className="text-xl">Popularity</h1>
        </div>
        <div className=" flex-1 w-[14%]" />
        <div className=" flex-1 w-[14%]" />
      </div>

      <div className=" overflow-y-scroll ">
        {props.movieList.map((m) => (
          <MovieCard
            movie={m}
            key={m.id}
            AddFavorite={props.AddFavorite}
            renderMovieDetailsView={props.renderMovieDetailsView}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
