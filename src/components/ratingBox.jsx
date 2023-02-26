import { useState, useEffect } from "react";
import RatingToStars from "./ratingToStars";
import AddRating from "./addRating";

import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons";

const RatingBox = (props) => {
  const [rated, setRated] = useState(false);
  const [selected, setSelected] = useState(false);
  const [stars, setStars] = useState([]);

  const SubmitRating = () => {
    setRated(true);
  };

  const RatingSelected = (e) => {
    setSelected(true);
  };

  useEffect(() => {
    DisplayRatingStars();
  }, []);

  // Creates a new array of fontawesome icon, empty star, and populates the state with it.
  // called in the useEffect and used as props in AddRating to reset the rating list if a rating has not been selected.
  const DisplayRatingStars = () => {
    let newStars = [];
    for (let index = 0; index < 10; index++) {
      const star = { icon: faStarEmpty, key: index };
      newStars.push(star);
    }
    setStars(newStars);
  };

  // gets the id of the star the users cursor is hovering over, and populates an array of fontawesome icon, full star, for ids
  // equal or lower then the hovered id and empty starts for id's larger then the hovered id.
  // Called each time the user hovers their cursor over a star in AddRating.
  const ChangeFullStar = (e) => {
    const starHovering = e.target.id;

    let newStars = [];
    for (let index = 0; index < 10; index++) {
      let star;
      if (index <= starHovering) {
        star = { icon: faStarFull, key: index };
      } else {
        star = { icon: faStarEmpty, key: index };
      }
      newStars.push(star);
    }
    setStars(newStars);
  };

  return (
    <div className="flex flex-col justify-center items-center mx-3 p-2 rounded-lg bg-white">
      <div className="flex  justify-center items-center w-full p-4">
        <RatingToStars averageRating={props.movieSelected.ratings.average} />
      </div>

      <div className="flex w-full">
        <div className="flex flex-col items-center flex-1 ">
          <h2 className="text-2xl bg-pink-700 p-2 rounded-t-lg text-white flex-1">
            Popularity
          </h2>
          <p className="text-lg p-2 border rounded-b-lg flex-1 w-full text-center">
            {props.movieSelected.ratings.popularity}
          </p>
        </div>

        <div className="flex flex-col items-center flex-1 ">
          <h2 className="text-2xl bg-pink-700 p-2 rounded-t-lg text-white flex-1">
            Count
          </h2>
          <p className="text-lg p-2 border rounded-b-lg flex-1 w-full text-center">
            {props.movieSelected.ratings.count}
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-center items-center mt-3">
          <h2 className="text-2xl font-bold underline">Rate Movie</h2>
        </div>
        {!rated ? (
          <AddRating
            selected={selected}
            stars={stars}
            SubmitRating={SubmitRating}
            RatingSelected={RatingSelected}
            DisplayRatingStars={DisplayRatingStars}
            ChangeFullStar={ChangeFullStar}
          />
        ) : (
          <div className="flex flex-row justify-center items-center w-full">
            <h1 className="text-lg my-5">Thank you for rating Movie Title</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default RatingBox;
