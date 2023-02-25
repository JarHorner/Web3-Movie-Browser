import React, { useState } from "react";

import SEPERATOR from "./seperator";

const Filters = (props) => {
  const defaultList = JSON.parse(localStorage.getItem("movieList"));

  const hideFilter = " w-0 p-0 ";
  const showFilter = " w-1/5 p-2 ";

  const displayContent = " flex ";
  const hideContent = " hidden ";

  const [selectedRadio, setSelectedRadio] = useState("");

  const [titleInput, setInputTittle] = useState("");
  const [genreInput, setGenreTittle] = useState("");
  const [yearLessInput, setYearLess] = useState();
  const [yearGreatInput, setYearGreat] = useState();
  const [ratingLessInput, setRatingLess] = useState();
  const [ratingGreatInput, setRatingGreat] = useState();

  const submitFilter = (e) => {
    e.preventDefault();

    switch (selectedRadio) {
      case "title":
        let filteredList = defaultList.filter((movie) =>
          movie.title.toLowerCase().includes(titleInput)
        );
        props.setMovieList(filteredList);
        break;

      case "genre":
        let filteredGList = [];
        defaultList.forEach((movie) => {
          let genres = movie.details.genres?.map((genre) => genre.name);
          if (genres?.includes(genreInput)) {
            filteredGList.push(movie);
          }
        });
        props.setMovieList(filteredGList);
        break;

      case "year":
        let filterdYearList;
        if (yearLessInput && yearGreatInput) {
          filterdYearList = defaultList.filter(
            (movie) =>
              parseInt(movie.release_date.split("-")[0]) <
                parseInt(yearLessInput) ||
              parseInt(movie.release_date.split("-")[0]) >
                parseInt(yearGreatInput)
          );
        } else if (yearLessInput) {
          filterdYearList = defaultList.filter(
            (movie) =>
              parseInt(movie.release_date.split("-")[0]) <
              parseInt(yearLessInput)
          );
        } else if (yearGreatInput) {
          filterdYearList = defaultList.filter(
            (movie) =>
              parseInt(movie.release_date.split("-")[0]) >
              parseInt(yearGreatInput)
          );
        } else {
          filterdYearList = defaultList;
        }
        props.setMovieList(filterdYearList);

        break;

      case "rating":
        let filterdRatingList;
        if (ratingLessInput && ratingGreatInput) {
          filterdRatingList = defaultList.filter(
            (movie) =>
              parseFloat(movie.ratings.average) < parseFloat(ratingLessInput) ||
              parseFloat(movie.ratings.average) > parseFloat(ratingGreatInput)
          );
        } else if (ratingLessInput) {
          filterdRatingList = defaultList.filter(
            (movie) =>
              parseFloat(movie.ratings.average) < parseFloat(ratingLessInput)
          );
        } else if (ratingGreatInput) {
          filterdRatingList = defaultList.filter(
            (movie) =>
              parseFloat(movie.ratings.average) > parseFloat(ratingGreatInput)
          );
        } else {
          filterdRatingList = defaultList;
        }
        props.setMovieList(filterdRatingList);

        break;
      default:
        break;
    }
  };

  return (
    <div
      id="default_filters"
      className={
        " bg-white h-full transition-all " +
        (props.filterView ? showFilter : hideFilter)
      }
    >
      <div
        className={
          "flex-col " + (props.filterView ? displayContent : hideContent)
        }
      >
        <div className=" bg-pink-700 p-5 text-white rounded-lg ">
          <h1 className=" text-xl">Movie Filters</h1>
          <h2>Select on a filter to see corresponding results</h2>
        </div>

        <SEPERATOR title="Type" />

        <form>
          <div className=" flex w-full items-center bg-pink-300 p-1 rounded-lg my-2">
            <label className="mr-2 text-white w-20">
              <input
                type="radio"
                className="mr-2 "
                name="radio"
                onClick={() => {
                  setSelectedRadio("title");
                }}
              />
              Title
            </label>
            <input
              type="text"
              className=" p-2 flex-1 rounded-lg outline-none"
              disabled={selectedRadio !== "title"}
              onKeyUp={(e) => {
                setInputTittle(e.target.value);
              }}
            />
          </div>

          <div className=" flex w-full items-center bg-pink-300 p-1 rounded-lg my-2">
            <label className="mr-2 text-white w-20">
              <input
                type="radio"
                className="  mr-2 "
                name="radio"
                onClick={() => {
                  setSelectedRadio("genre");
                }}
              />
              Genre{" "}
            </label>
            <select
              className=" p-2 flex-1 rounded-lg"
              disabled={selectedRadio !== "genre"}
              onClick={(e) => {
                setGenreTittle(e.target.value);
              }}
            >
              <option disabled selected value>
                {" "}
                Select a Genre{" "}
              </option>
              {props.genreList.map((genre) => (
                <option value={genre}>{genre}</option>
              ))}
            </select>
          </div>

          <SEPERATOR title="Date" />

          <div className=" flex w-full items-center bg-pink-300 p-1 rounded-lg my-2">
            <label className="mr-2 text-white w-20">
              <input
                type="radio"
                className="  mr-2 "
                name="radio"
                onClick={() => {
                  setSelectedRadio("year");
                }}
              />{" "}
              Year
            </label>

            <div className="flex flex-col flex-1">
              <label className="mr-2 text-white ">Less Than</label>
              <input
                type="number"
                className=" p-2 flex-1 rounded-lg"
                placeholder="Find Movies Made Before a Year"
                disabled={selectedRadio !== "year"}
                onChange={(e) => {
                  setYearLess(e.target.value);
                }}
              />
              <label className="mr-2 text-white ">Greater Than</label>
              <input
                type="number"
                className=" p-2 flex-1 rounded-lg"
                placeholder="Find Movies Made After a Year"
                disabled={selectedRadio !== "year"}
                onKeyUp={(e) => {
                  setYearGreat(e.target.value);
                }}
              />
            </div>
          </div>

          <SEPERATOR title="Misc" />

          <div className=" flex w-full items-center bg-pink-300 p-1 rounded-lg my-2">
            <label className="mr-2 text-white w-20">
              <input
                type="radio"
                className="  mr-2 "
                name="radio"
                onClick={() => {
                  setSelectedRadio("rating");
                }}
              />{" "}
              Rating
            </label>

            <div className="flex flex-col flex-1">
              <label className="mr-2 text-white ">Less Than</label>
              <input
                type="number"
                className=" p-2 flex-1 rounded-lg"
                placeholder="Ratings Less Than"
                disabled={selectedRadio !== "rating"}
                onChange={(e) => {
                  setRatingLess(e.target.value);
                }}
              />
              <label className="mr-2 text-white ">Greater Than</label>
              <input
                type="number"
                className=" p-2 flex-1 rounded-lg"
                placeholder="Ratings Greater Than"
                disabled={selectedRadio !== "rating"}
                onKeyUp={(e) => {
                  setRatingGreat(e.target.value);
                }}
              />
            </div>
          </div>

          <div className=" flex justify-center mt-10">
            <button
              type="button"
              className="p-2 bg-pink-600 text-white rounded-lg flex-1 mx-4"
              onClick={() => {
                props.setMovieList(defaultList);
                props.setShowFilter(false);
              }}
            >
              Hide Filters{" "}
            </button>

            <button
              type="submit"
              className=" p-2 bg-pink-600 text-white rounded-lg flex-1 mx-4 "
              onClick={submitFilter}
            >
              Submit Filters
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filters;
