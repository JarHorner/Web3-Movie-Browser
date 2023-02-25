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
    <div className="flex flex-row ml-5 bg-slate-400 rounded-2xl h-full">
      <div className="flex flex-col">
        <img
          src={"https://image.tmdb.org/t/p/w342" + props.movieSelected.poster}
          title={props.movieSelected.title}
          alt={props.movieSelected.title}
          className="cursor-pointer"
          onClick={handleOpenLargePoster}
          onError={renderPlaceholderImg}
        ></img>
        <MoviePosterModal
          poster={props.movieSelected.poster}
          showLargePoster={showLargePoster}
          handleCloseLargePoster={handleCloseLargePoster}
        />
        <div className="flex flex-row w-full justify-between my-2 ">
          <a
            href={"https://www.imdb.com/title/" + props.movieSelected.imdb_id}
            className="text-2xl font-bold hover:text-red-600 hover:scale-105 transition-all"
            target="_blank"
            rel="noreferrer"
            title="Head to the IMDB Page!"
          >
            IMDB
          </a>
          <a
            href={
              "https://www.themoviedb.org/movie/" + props.movieSelected.tmdb_id
            }
            className="text-2xl font-bold hover:text-red-600 hover:scale-105 transition-all"
            target="_blank"
            rel="noreferrer"
            title="Head to the TMDB Page!"
          >
            TMDB
          </a>
        </div>
      </div>
      <div className="flex-1"></div>
      <div className="flex flex-col w-3/4 ">
        <div className="flex flex-row ml-5">
          <div className="mr-10 my-2 text-lg ">
            <p>{props.movieSelected.details.overview}</p>
          </div>
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
