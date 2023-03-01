import React, { useState } from "react";
import RatingBox from "./ratingBox";
import MoviePosterModal from "./moviePosterModal";

const MovieInformation = (props) => {
  const [showLargePoster, setShowLargePoster] = useState(false);

  const handleOpenLargePoster = () => {
    setShowLargePoster(true);
  };

  const handleCloseLargePoster = () => {
    setShowLargePoster(false);
  };

  // ensures img always has a working src
  const renderPlaceholderImg = (e) => {
    e.onerror = null;
    e.currentTarget.src = "https://via.placeholder.com/342";
  };

  const pluck = (arr, key) => arr.map((i) => i[key]);

  const listGenres = () => {
    let genres = "";
    if (props.movieSelected.details.genres === null) {
      return genres;
    } else {
      genres = pluck(props.movieSelected.details.genres, "name").join(", ");
    }
    return genres;
  };

  return (
    <div className="flex mx-3 mb-3 h-full ">
      <div className="flex flex-col  justify-center items-center ">
        <img
          src={"https://image.tmdb.org/t/p/w342" + props.movieSelected.poster}
          title={props.movieSelected.title}
          alt={props.movieSelected.title}
          className="cursor-pointer bg-white p-5 rounded-lg"
          onClick={handleOpenLargePoster}
          onError={renderPlaceholderImg}
        ></img>
        <MoviePosterModal
          poster={props.movieSelected.poster}
          showLargePoster={showLargePoster}
          handleCloseLargePoster={handleCloseLargePoster}
        />

        <div className="flex flex-1 justify-center items-center w-full  ">
          <a
            href={"https://www.imdb.com/title/" + props.movieSelected.imdb_id}
            className="text-2xl font-bold bg-[#f5c518] px-3 py-2 hover:scale-105 transition-all rounded-lg mr-1 "
            target="_blank"
            rel="noreferrer"
            title="Head to the IMDB Page!"
          >
            IMDb
          </a>
          <a
            href={
              "https://www.themoviedb.org/movie/" + props.movieSelected.tmdb_id
            }
            className="text-2xl font-bold bg-[#1db6dd] px-3 py-2 hover:scale-105 transition-all rounded-lg ml-1 "
            target="_blank"
            rel="noreferrer"
            title="Head to the TMDB Page!"
          >
            TMDB
          </a>
        </div>
        <h1 className="text-pink-500 text-center">
          View more imformation on the sites above.
        </h1>
      </div>

      <div className="flex flex-col flex-1 ">
        <div className="flex ml-3 bg-white p-5 rounded-lg text-lg">
          <p>{props.movieSelected.details.overview}</p>
        </div>

        <div className="flex  m-3">
          <div className="bg-white rounded-lg flex-1 ">
            <div className="flex p-2">
              <p className=" font-bold text-white text-2xl bg-pink-700 p-2 rounded-l-lg w-44 ">
                Genres
              </p>
              <p className=" font-bold text-pink-900 text-sm bg-white p-2 border rounded-r-lg flex-1 flex items-center">
                {listGenres()}
              </p>
            </div>

            <div className="flex p-2 ">
              <p className=" font-bold text-white text-2xl bg-pink-700 p-2 rounded-l-lg w-44">
                Release Date:
              </p>
              <p className=" font-bold text-pink-900 text-sm bg-white p-2 border rounded-r-lg flex-1 flex items-center">
                {props.movieSelected.release_date}
              </p>
            </div>

            <div className="flex p-2 ">
              <p className=" font-bold text-white text-2xl bg-pink-700 p-2 rounded-l-lg w-44">
                Runtime:
              </p>
              <p className=" font-bold text-pink-900 text-sm bg-white p-2 border rounded-r-lg flex-1 flex items-center">
                {props.movieSelected.runtime} Minutes
              </p>
            </div>

            <div className="flex p-2 ">
              <p className=" font-bold text-white text-2xl bg-pink-700 p-2 rounded-l-lg w-44 ">
                Tagline:
              </p>
              <p className=" font-bold text-pink-900 text-sm bg-white p-2 border rounded-r-lg flex-1 flex items-center">
                {props.movieSelected.tagline}
              </p>
            </div>

            <div className="flex p-2 ">
              <p className=" font-bold text-white text-2xl bg-pink-700 p-2 rounded-l-lg w-44">
                Revenue:
              </p>
              <p className=" font-bold text-pink-900 text-sm bg-white p-2 border rounded-r-lg flex-1 flex items-center">
                $ {props.movieSelected.revenue}
              </p>
            </div>
          </div>

          <RatingBox movieSelected={props.movieSelected} />
        </div>
      </div>
    </div>
  );
};

export default MovieInformation;
