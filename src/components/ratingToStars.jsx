import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStarHalfStroke as faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons";

const RatingToStars = (props) => {
  // Converts the rating given by the movie object into a star fontawesome icon.
  // it first rounds the rating then in a loop based on what the rating is compared to the index of the loop
  // a star will be added to an array.
  // returns an array of star fontawesome icons.
  const ConvertRatingToStars = () => {
    let stars = [];
    // hard coding a rating to test
    let rating = RoundRating(props.averageRating);

    for (let index = 1; index <= 10; index++) {
      if (index <= rating) {
        // rating is higher then this index, so the star must be full
        const star = { icon: faStarFull, key: index };
        stars.push(star);
      } else if (index > rating) {
        if (rating % 1 === 0.5 && index - 1 < rating) {
          // the rating is lower then the index but the rating has a decimal and the last index was smaller then the rating, so star must be half
          const star = { icon: faStarHalf, key: index };
          stars.push(star);
        } else {
          // if none of the conditions above are met, the star must be empty
          const star = { icon: faStarEmpty, key: index };
          stars.push(star);
        }
      }
    }
    return stars;
  };

  // Rounds the given rating to either a 0, 1 or 0.5 to properly assign stars to array in ConvertRatingToStars()
  const RoundRating = (rating) => {
    let whole = Math.floor(rating);
    let decimal = rating % 1;

    if (decimal <= 0.25) {
      decimal = 0;
    } else if (decimal < 0.75) {
      decimal = 0.5;
    } else if (decimal >= 0.75) {
      decimal = 1;
    }
    return whole + decimal;
  };

  return (
    <>
      {ConvertRatingToStars().map((s) => {
        return (
          <FontAwesomeIcon
            icon={s.icon}
            key={s.key}
            className="text-5xl text-pink-700"
          />
        );
      })}
    </>
  );
};

export default RatingToStars;
