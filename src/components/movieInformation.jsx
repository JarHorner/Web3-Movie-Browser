import React, { useState } from "react";
import RatingBox from "./ratingBox";
import MoviePosterModal from "./moviePosterModal";

const MovieInformation = (props) => {
  const [showLargePoster, setShowLargePoster] = useState(false);

  // will add in props movie image link
  const movieImage =
  "https://image.tmdb.org/t/p/" + "w342" + "/wby9315QzVKdW9BonAefg8jGTTb.jpg";

  const handleOpenLargePoster = () => {
    setShowLargePoster(true);
  };

  const handleCloseLargePoster = () => {
    setShowLargePoster(false);
  };

  return (
    <div className="flex flex-row ml-5 bg-slate-400 rounded-2xl h-full">
      <div className="flex flex-col">
        <img src={movieImage} title="Movie Title" alt="Movie Title" onClick={handleOpenLargePoster}></img>
        <MoviePosterModal showLargePoster={showLargePoster} handleCloseLargePoster={handleCloseLargePoster} />
        <div className="flex flex-row w-full justify-between my-2 ">
          <a
            href="https://www.imdb.com/title/yyyy"
            className="text-2xl font-bold hover:text-red-600 hover:scale-105 transition-all"
            target="_blank"
            rel="noreferrer"
            title="Head to the IMDB Page!"
          >
            IMDB
          </a>
          <a
            href="https://www.themoviedb.org/movie/xxxx"
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
            <p>
              Derek Vineyard is paroled after serving 3 years in prison for
              killing two thugs who tried to break into/steal his truck. Through
              his brother, Danny Vineyard's narration, we learn that before
              going to prison, Derek was a skinhead and the leader of a violent
              white supremacist gang that committed acts of racial crime
              throughout L.A. and his actions greatly influenced Danny. Reformed
              and fresh out of prison, Derek severs contact with the gang and
              becomes determined to keep Danny from going down the same violent
              path as he did.
            </p>
          </div>
        </div>
        <div className="flex flex-row ml-5">
          <div className="text-2xl flex flex-col justify-center ">
            <p className="font-bold">Genres:</p>
          </div>
          <div className="ml-5 my-2 text-xl ">
            <p> Horror Comedy</p>
          </div>
        </div>
        <div className="flex flex-row ml-5">
          <div className="text-2xl flex flex-col justify-center ">
            <p className="font-bold">Release Date:</p>
          </div>
          <div className="ml-5 my-2  text-xl ">
            <p> 2007-07-25</p>
          </div>
        </div>
        <div className="flex flex-row ml-5">
          <div className="text-2xl flex flex-col justify-center ">
            <p className="font-bold">Runtime:</p>
          </div>
          <div className="ml-5 my-2  text-xl ">
            <p> 87 Minutes</p>
          </div>
        </div>
        <div className="flex flex-row ml-5">
          <div className="text-2xl flex flex-col justify-center ">
            <p className="font-bold">Tagline:</p>
          </div>
          <div className="ml-5 my-2 text-xl ">
            <p> See our family. And feel better about yours.</p>
          </div>
        </div>
        <div className="flex flex-row ml-5">
          <div className="text-2xl flex flex-col justify-center ">
            <p className="font-bold">Revenue:</p>
          </div>
          <div className="ml-5 my-2  text-xl ">
            <p> $527068851</p>
          </div>
        </div>
        <RatingBox />
      </div>
    </div>
  );
};

export default MovieInformation;
