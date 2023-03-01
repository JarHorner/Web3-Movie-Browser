import React, { useState } from "react";
import SEPERATOR from "./seperator";

/**
 * Filter component, this component is responsible for displaying and handiling filters
 * @param {*} props
 * @returns JSX.Element
 */
const Filters = (props) => {
  //----------------------- CONSTANTS -----------------------//

  //Retrieves the default movie list from local storage, used as a reset
  const defaultList = JSON.parse(localStorage.getItem("movieList"));

  //Conditional styles for hiding and showing the filter pane
  const hideFilter = " w-0 p-0 ";
  const showFilter = " w-1/5 p-2 ";
  const displayContent = " flex ";
  const hideContent = " hidden ";

  //----------------------- STATES -----------------------//
  const [selectedRadio, setSelectedRadio] = useState("");
  const [titleInput, setInputTitle] = useState("");
  const [genreInput, setGenreTitle] = useState("");
  const [yearLessInput, setYearLess] = useState();
  const [yearGreatInput, setYearGreat] = useState();
  const [ratingLessInput, setRatingLess] = useState();
  const [ratingGreatInput, setRatingGreat] = useState();

  //----------------------- FUNCTIONS -----------------------//

  const resetDropdown = () => {
    let dropdown = document.getElementById("genre");
    dropdown.selectedIndex = 0;
  };

  const clearUnfocusedInputs = () => {
    switch (selectedRadio) {
      //TITLE
      case "title":
        resetDropdown();
        setYearLess("");
        setYearGreat("");
        setRatingGreat("");
        setRatingLess("");

        break;

      //GENRE
      case "genre":
        setInputTitle("");
        setYearLess("");
        setYearGreat("");
        setRatingGreat("");
        setRatingLess("");

        break;

      //YEAR
      case "year":
        setInputTitle("");
        resetDropdown();
        setRatingGreat("");
        setRatingLess("");

        break;

      //RATING
      case "rating":
        setInputTitle("");
        resetDropdown();
        setYearLess("");
        setYearGreat("");

        break;
      default:
        break;
    }
  };
  /**
   * Handles the process of filtering out the movies
   * @param {*} e
   */
  const submitFilter = (e) => {
    //Prevents default form action
    e.preventDefault();

    //Filters based off selected filter radio
    switch (selectedRadio) {
      //TITLE
      case "title":
        let filteredList = defaultList.filter((movie) =>
          movie.title.toLowerCase().includes(titleInput)
        );
        props.setMovieList(filteredList);
        break;

      //GENRE
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

      //YEAR
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

      //RATING
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

  //----------------------- RENDER -----------------------//
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
          <div
            className={
              "flex w-full items-center p-1 rounded-lg my-2 transition-all " +
              (selectedRadio === "title"
                ? "  bg-pink-700 scale-100 drop-shadow-xl  "
                : " bg-pink-50 scale-95")
            }
          >
            <label
              className={
                "mr-2 w-20 " +
                (selectedRadio === "title" ? "  text-white  " : "text-pink-900")
              }
            >
              <input
                type="radio"
                className="mr-2 text-pink-900 "
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
              value={titleInput}
              disabled={selectedRadio !== "title"}
              onChange={(e) => {
                setInputTitle(e.target.value);
                clearUnfocusedInputs();
              }}
            />
          </div>

          <div
            className={
              "flex w-full items-center p-1 rounded-lg my-2 transition-all " +
              (selectedRadio === "genre"
                ? "  bg-pink-700 scale-100 drop-shadow-xl  "
                : " bg-pink-50 scale-95")
            }
          >
            <label
              className={
                "mr-2 w-20 " +
                (selectedRadio === "genre" ? "  text-white  " : "text-pink-900")
              }
            >
              <input
                type="radio"
                className="  mr-2 "
                value={genreInput}
                name="radio"
                onClick={() => {
                  setSelectedRadio("genre");
                }}
              />
              Genre{" "}
            </label>
            <select
              id="genre"
              className=" p-2 flex-1 rounded-lg"
              disabled={selectedRadio !== "genre"}
              onClick={(e) => {
                setGenreTitle(e.target.value);
                clearUnfocusedInputs();
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

          <div
            className={
              "flex w-full items-center p-2 rounded-lg my-2 transition-all " +
              (selectedRadio === "year"
                ? "  bg-pink-700 scale-100 drop-shadow-xl  "
                : " bg-pink-50 scale-95")
            }
          >
            <label
              className={
                "mr-2 w-20 " +
                (selectedRadio === "year" ? "  text-white  " : "text-pink-900")
              }
            >
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
              <label
                className={
                  "mr-2 " +
                  (selectedRadio === "year"
                    ? "  text-white  "
                    : "text-pink-900")
                }
              >
                Less Than
              </label>
              <input
                type="number"
                className=" p-2 flex-1 rounded-lg"
                value={yearLessInput}
                placeholder="Find Movies Made Before a Year"
                disabled={selectedRadio !== "year"}
                onChange={(e) => {
                  setYearLess(e.target.value);
                  clearUnfocusedInputs();
                }}
              />
              <label
                className={
                  "mr-2  " +
                  (selectedRadio === "year"
                    ? "  text-white  "
                    : "text-pink-900")
                }
              >
                Greater Than
              </label>
              <input
                type="number"
                className=" p-2 flex-1 rounded-lg"
                value={yearGreatInput}
                placeholder="Find Movies Made After a Year"
                disabled={selectedRadio !== "year"}
                onChange={(e) => {
                  setYearGreat(e.target.value);
                  clearUnfocusedInputs();
                }}
              />
            </div>
          </div>

          <SEPERATOR title="Misc" />

          <div
            className={
              "flex w-full items-center p-2 rounded-lg my-2 transition-all " +
              (selectedRadio === "rating"
                ? "  bg-pink-700 scale-100 drop-shadow-xl  "
                : " bg-pink-50 scale-95")
            }
          >
            <label
              className={
                "mr-2 w-20 " +
                (selectedRadio === "rating"
                  ? "  text-white  "
                  : "text-pink-900")
              }
            >
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
              <label
                className={
                  "mr-2 " +
                  (selectedRadio === "rating"
                    ? "  text-white  "
                    : "text-pink-900")
                }
              >
                Less Than
              </label>
              <input
                type="number"
                className=" p-2 flex-1 rounded-lg"
                value={ratingLessInput}
                placeholder="Ratings Less Than"
                disabled={selectedRadio !== "rating"}
                onChange={(e) => {
                  setRatingLess(e.target.value);
                  clearUnfocusedInputs();
                }}
              />
              <label
                className={
                  "mr-2 " +
                  (selectedRadio === "rating"
                    ? "  text-white  "
                    : "text-pink-900")
                }
              >
                Greater Than
              </label>
              <input
                type="number"
                className=" p-2 flex-1 rounded-lg"
                value={ratingGreatInput}
                placeholder="Ratings Greater Than"
                disabled={selectedRadio !== "rating"}
                onChange={(e) => {
                  setRatingGreat(e.target.value);
                  clearUnfocusedInputs();
                }}
              />
            </div>
          </div>

          <div className=" flex justify-center mt-10">
            <button
              type="button"
              className="p-2 bg-pink-900 text-white rounded-lg flex-1 mx-4 hover:scale-105 hover:drop-shadow-xl transition-all"
              onClick={() => {
                clearUnfocusedInputs();
                props.setMovieList(defaultList);
                props.setShowFilter(false);
              }}
            >
              Hide/Clear Filters
            </button>

            <button
              type="submit"
              className=" p-2 bg-pink-600 text-white rounded-lg flex-1 mx-4 hover:scale-105 hover:drop-shadow-xl transition-all"
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
