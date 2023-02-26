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

  const renderPlaceholderImg = (e) => {
    e.onerror = null;
    e.currentTarget.src = "https://via.placeholder.com/342";
  };

  const listGenres = () => {
    let genres = "";
    if (props.movieSelected.details.genres === null) {
      return genres;
    } else {
      props.movieSelected.details.genres.forEach((element) => {
        genres += element.name + " ";
      });
      return genres;
    }
  };

  return (
    <div className="flex mx-3 mb-3  h-full ">
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

        <div className="flex flex-row ml-5">
          <div className="text-2xl flex flex-col justify-center ">
            <p className="font-bold">Genres:</p>
          </div>
          <div className="ml-5 my-2 text-xl ">
            <p>{listGenres()}</p>
          </div>
        </div>
        <div className="flex flex-row ml-5">
          <div className="text-2xl flex flex-col justify-center ">
            <p className="font-bold">Release Date:</p>
          </div>
          <div className="ml-5 my-2  text-xl ">
            <p>{props.movieSelected.release_date}</p>
          </div>
        </div>
        <div className="flex flex-row ml-5">
          <div className="text-2xl flex flex-col justify-center ">
            <p className="font-bold">Runtime:</p>
          </div>
          <div className="ml-5 my-2  text-xl ">
            <p>{props.movieSelected.runtime} Minutes</p>
          </div>
        </div>
        <div className="flex flex-row ml-5">
          <div className="text-2xl flex flex-col justify-center ">
            <p className="font-bold">Tagline:</p>
          </div>
          <div className="ml-5 my-2 text-xl ">
            <p>{props.movieSelected.tagline}</p>
          </div>
        </div>
        <div className="flex flex-row ml-5">
          <div className="text-2xl flex flex-col justify-center ">
            <p className="font-bold">Revenue:</p>
          </div>
          <div className="ml-5 my-2  text-xl ">
            <p>$ {props.movieSelected.revenue}</p>
          </div>
        </div>
        <RatingBox movieSelected={props.movieSelected} />
      </div>
    </div>
  );
};

export default MovieInformation;
