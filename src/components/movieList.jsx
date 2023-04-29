import { useState } from "react";
import MovieCard from "./movieCard";

const MovieList = (props) => {
  const [titleAlpha, setTitleAlpha] = useState();
  const [yearSort, setYearSort] = useState();
  const [ratingSort, setRatingSort] = useState();
  const [popularitySort, setPopularitySort] = useState();

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

  const sortRatingsLG = () => {
    props.setMovieList(
      [...props.movieList].sort((a, b) => {
        const ratingA = parseFloat(a.ratings.average);
        const ratingB = parseFloat(b.ratings.average);
        if (ratingA < ratingB) {
          return -1;
        }
        if (ratingA > ratingB) {
          return 1;
        }

        return 0;
      })
    );
  };

  const sortRatingsGL = () => {
    props.setMovieList(
      [...props.movieList].sort((a, b) => {
        const ratingA = parseFloat(a.ratings.average);
        const ratingB = parseFloat(b.ratings.average);
        if (ratingA > ratingB) {
          return -1;
        }
        if (ratingA < ratingB) {
          return 1;
        }

        return 0;
      })
    );
  };

  const sortPopularityLG = () => {
    props.setMovieList(
      [...props.movieList].sort((a, b) => {
        const popularityA = parseFloat(a.ratings.popularity);
        const popularityB = parseFloat(b.ratings.popularity);
        if (popularityA < popularityB) {
          return -1;
        }
        if (popularityA > popularityB) {
          return 1;
        }

        return 0;
      })
    );
  };

  const sortPopularityGL = () => {
    props.setMovieList(
      [...props.movieList].sort((a, b) => {
        const popularityA = parseFloat(a.ratings.popularity);
        const popularityB = parseFloat(b.ratings.popularity);
        if (popularityA > popularityB) {
          return -1;
        }
        if (popularityA < popularityB) {
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
          <h1
            className="text-xl hover:text-pink-700  hover:cursor-pointer transition-all"
            onClick={() => {
              if (ratingSort) {
                setRatingSort(false);
                sortRatingsGL();
              } else {
                setRatingSort(true);
                sortRatingsLG();
              }
            }}
          >
            Rating
          </h1>
        </div>
        <div className=" flex-1 w-[14%]">
          <h1
            className="text-xl hover:text-pink-700  hover:cursor-pointer transition-all"
            onClick={() => {
              if (popularitySort) {
                setPopularitySort(false);
                sortPopularityGL();
              } else {
                setPopularitySort(true);
                sortPopularityLG();
              }
            }}
          >
            Popularity
          </h1>
        </div>
        <div className=" flex-1 w-[14%]" />
        <div className=" flex-1 w-[14%]" />
      </div>

      <div className=" overflow-y-scroll ">
        {props.movieList.length > 0 ? (
          props.movieList.map((m) => (
            <MovieCard
              setShowFav={props.setShowFav}
              movie={m}
              key={m.id}
              AddFavorite={props.AddFavorite}
              renderMovieDetailsView={props.renderMovieDetailsView}
            />
          ))
        ) : (
          <div className="text-center p-5 text-2xl text-pink-900">
            No results matching from filters. Please try again!
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;
